"use client";

import { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
import Card from "../ui/Card";

const initialData = {
  "New Lead": [
    {
      id: "new-1",
      name: "Sarah Johnson",
      company: "Linear",
      amount: "$12,000",
    },
  ],

  Contacted: [
    {
      id: "contacted-1",
      name: "Alex Smith",
      company: "Stripe",
      amount: "$8,500",
    },
  ],

  Proposal: [
    {
      id: "proposal-1",
      name: "Emma Wilson",
      company: "Framer",
      amount: "$9,400",
    },
  ],

  Negotiation: [
    {
      id: "negotiation-1",
      name: "Daniel Brown",
      company: "Notion",
      amount: "$15,300",
    },
  ],

  Closed: [
    {
      id: "closed-1",
      name: "Sophia Lee",
      company: "Vercel",
      amount: "$20,000",
    },
  ],
};

export default function PipelineBoard() {
  const [columns, setColumns] = useState(initialData);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceColumn = [
      ...columns[result.source.droppableId],
    ];

    const destinationColumn = [
      ...columns[result.destination.droppableId],
    ];

    const [removed] = sourceColumn.splice(
      result.source.index,
      1
    );

    destinationColumn.splice(
      result.destination.index,
      0,
      removed
    );

    setColumns({
      ...columns,

      [result.source.droppableId]: sourceColumn,

      [result.destination.droppableId]:
        destinationColumn,
    });
  };

  // SSR Hydration mismatch prevention: Render a skeletal layout until mounted
  if (!mounted) {
    return (
      <Card className="border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-black">
            Sales Pipeline
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 opacity-50">
          {Object.keys(columns).map((columnId) => (
            <div
              key={columnId}
              className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-3 min-h-[320px]"
            >
              <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-4">
                {columnId}
              </h4>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-black">
          Sales Pipeline
        </h3>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {Object.entries(columns).map(
            ([columnId, tasks]) => (
              <Droppable
                droppableId={columnId}
                key={columnId}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-zinc-50/50 border border-zinc-200/60 rounded-2xl p-3 min-h-[340px] flex flex-col"
                  >
                    <div className="flex justify-between items-center mb-4 px-1">
                      <h4 className="text-[10px] font-bold text-zinc-700 uppercase tracking-wider">
                        {columnId}
                      </h4>

                      <span className="text-[9px] font-bold text-black bg-zinc-100 px-2 py-0.5 rounded-full border border-zinc-200">
                        {tasks.length}
                      </span>
                    </div>

                    <div className="space-y-3 flex-1">
                      {tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-white border border-zinc-200 rounded-xl p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:border-black hover:shadow-xs transition cursor-grab active:cursor-grabbing duration-200"
                            >
                              <p className="text-xs font-bold text-black leading-snug">
                                {task.name}
                              </p>

                              <p className="text-[10px] text-zinc-400 font-semibold mt-1">
                                {task.company}
                              </p>

                              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                                <span className="text-xs font-black text-[#DA291C]">
                                  {task.amount}
                                </span>

                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-red-50 text-[#DA291C] border border-red-100/50">
                                  Active
                                </span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}

                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            )
          )}
        </div>
      </DragDropContext>
    </Card>
  );
}