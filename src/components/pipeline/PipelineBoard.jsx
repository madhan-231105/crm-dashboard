"use client";

import { useState } from "react";

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

  return (
    <Card>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold">
          Sales Pipeline
        </h3>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
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
                    className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 min-h-[320px]"
                  >
                    <h4 className="font-medium mb-4">
                      {columnId}
                    </h4>

                    <div className="space-y-4">
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
                              className="bg-white border border-neutral-200 rounded-xl p-4 hover:shadow-sm transition cursor-grab active:cursor-grabbing"
                            >
                              <p className="font-medium">
                                {task.name}
                              </p>

                              <p className="text-sm text-neutral-500 mt-1">
                                {task.company}
                              </p>

                              <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm font-medium">
                                  {task.amount}
                                </span>

                                <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200">
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