import EditBtn from "@/app/Components/EditBtn";
import getAllTodos from "@/app/lib/getAllTodos";
import Link from "next/link";
import React from "react";

const page = async () => {
      const task = await getAllTodos("pending");

      return (
            <div>
                  <h1 className="text-center text-6xl my-6">Pending Task</h1>
                  <div className="flex flex-col gap-6">
                        {task?.length === 0 && (
                              <h1 className="text-center my-10">
                                    No Pending Task Found
                              </h1>
                        )}
                        {task?.map((item) => (
                              <div
                                    key={item?._id}
                                    className="bg-gray-100 p-4 my-2 flex justify-between items-center"
                              >
                                    <Link href={`/task/${item?._id}`}>
                                          <h2 className="text-2xl text-red-500">
                                                {item?.title}
                                          </h2>
                                          <p>{item?.description}</p>
                                          <p>{item?.date}</p>
                                    </Link>
                                    <div>
                                          <EditBtn id={item?._id} />
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default page;
