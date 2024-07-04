// lib/getTodo.js
export async function getTodo(id) {
      const res = await fetch(`http://localhost:5000/todos/${id}`);
      if (!res.ok) {
            throw new Error("Failed to fetch the todo");
      }
      return res.json();
}
