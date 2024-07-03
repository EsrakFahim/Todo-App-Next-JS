export default async function editTodo(id) {
      try {
        const res = await fetch(`http://localhost:5000/todos/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "complete" }),
        });
    
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
    
        return res.json();
      } catch (error) {
        console.error("Failed to update todo:", error);
        throw error;
      }
    }
    