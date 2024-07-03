"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import postTodo from "../lib/postTodo";

const TextInput = () => {
      const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
      } = useForm();

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);

      const onSubmit = async (data) => {
            setLoading(true);
            setError(null);
            setSuccess(null);
            try {
                  await postTodo(data);
                  setSuccess("Task added successfully!");
                  reset();
            } catch (err) {
                  setError(err.message);
            } finally {
                  setLoading(false);
            }
      };

      return (
            <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col items-center justify-center gap-5 w-full"
            >
                  <div className="flex justify-center w-full">
                        <div className="flex flex-col justify-center items-center w-full">
                              <input
                                    className="rounded-full py-2 px-4 text-lg text-black focus:outline-none focus:border-none w-[80%]"
                                    type="text"
                                    {...register("title", { required: true })}
                                    id="title"
                                    placeholder="Add a task title..."
                              />
                              {errors.title && (
                                    <span className="text-red-500">
                                          This field is required
                                    </span>
                              )}
                        </div>
                  </div>
                  <div className="flex justify-center w-full">
                        <div className="flex flex-col justify-center items-center w-full">
                              <input
                                    className="rounded-full py-2 px-4 text-lg text-black focus:outline-none focus:border-none w-[80%]"
                                    type="text"
                                    {...register("details", { required: true })}
                                    id="details"
                                    placeholder="Add a task details..."
                              />
                              {errors.details && (
                                    <span className="text-red-500">
                                          This field is required
                                    </span>
                              )}
                        </div>
                  </div>
                  {loading && <p>Loading...</p>}
                  {error && <p className="text-red-500">{error}</p>}
                  {success && <p className="text-green-500">{success}</p>}
                  <button
                        type="submit"
                        className=" bg-orange-400 text-white px-6 py-2 rounded-full"
                        disabled={loading}
                  >
                        Add Task
                  </button>
            </form>
      );
};

export default TextInput;
