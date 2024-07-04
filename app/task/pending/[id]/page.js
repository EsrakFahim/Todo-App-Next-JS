import React from "react";
import { getTodo } from "@/app/lib/getTodo";

export async function generateMetadata({ params }) {
      const { id } = params;
      const task = await getTodo(id);

      return {
            title: task?.task || "Todo Item",
            description: task?.description || "Details of the todo item.",
      };
}

export default async function Page({ params }) {
      const { id } = params;
      const task = await getTodo(id);

      return (
            <div className="p-4">
                  <h1 className="text-2xl font-bold">{task?.task}</h1>
                  <p className="mt-2">{task?.description}</p>
                  <p className="text-gray-500 mt-4">Status: {task?.status}</p>
                  <p className="text-gray-500">
                        Date: {new Date(task?.date).toLocaleString()}
                  </p>
            </div>
      );
}
