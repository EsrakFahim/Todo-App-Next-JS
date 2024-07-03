"use client";

import React, { useState } from "react";
import editTodo from "../lib/editTodo";

const EditBtn = ({ id }) => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const handleEdit = async () => {
            setLoading(true);
            setError(null);
            try {
                  await editTodo(id);
                  alert("Todo marked as complete!");
            } catch (err) {
                  setError(err.message);
            } finally {
                  setLoading(false);
                  document.location.reload();
            }
      };

      return (
            <div>
                  <button
                        onClick={handleEdit}
                        className="bg-orange-500 hover:bg-green-500 text-white text-lg px-4 py-2 rounded-full duration-300"
                        disabled={loading}
                  >
                        {loading ? "Loading..." : "Complete"}
                  </button>
                  {error && <p className="text-red-500">{error}</p>}
            </div>
      );
};

export default EditBtn;
