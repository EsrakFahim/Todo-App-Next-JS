import React from "react";
import TextInput from "./Components/TextInput";

const page = () => {
      return (
            <div className="flex justify-center w-full">
                  <div className="bg-blue-500 text-white w-full min-h-[450px] flex items-center justify-center rounded-md my-6">
                        <div className="w-full">
                              <h1 className="text-6xl font-bold text-center mt-10">
                                    To-Do List
                              </h1>
                              <div className="my-6">
                                    <TextInput />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default page;
