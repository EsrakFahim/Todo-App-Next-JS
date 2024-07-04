import getAllTodos from "@/app/lib/getAllTodos";
import Link from "next/link";
import React from "react";

export const metadata = {
      title: "Complete Task",
      description: "This is the complete task page",
};

const page = async () => {
      const task = await getAllTodos("complete");
      

      return (
            <div>
                  <h1 className="text-center text-6xl my-6">Complete Task</h1>
                  <div className="flex flex-col gap-6">
                        {task.length === 0 && (
                              <h1 className="text-center my-10">
                                    No Complete Task Found
                              </h1>
                        )}
                        {task.map((item) => (
                              <Link
                                    key={item?._id}
                                    className="bg-gray-100 p-4 my-2 flex justify-between items-center"
                                    href={`/task/complete/${item?._id}`}
                              >
                                    <div>
                                          <h2 className="text-2xl text-green-500">
                                                {item?.task}
                                          </h2>
                                          <p>{item?.description}</p>
                                          <p>Task Add date:{item?.date}</p>
                                          <p>
                                                Task Complete date:
                                                {item?.completeDate}
                                          </p>
                                    </div>
                              </Link>
                        ))}
                  </div>
            </div>
      );
};

export default page;
