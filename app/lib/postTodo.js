export default async function postTodo({ title, details }) {
      try {
            const res = await fetch("http://localhost:5000/todos", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                        task: title,
                        description: details,
                        status: "pending",
                        date: new Date(),
                  }),
            });

            if (!res.ok) {
                  console.log(`Server error: ${res.statusText}`);
                  throw new Error(`Error: ${res.statusText}`);
            }

            const data = await res.json();
            console.log("Success:", data);
            return data;
      } catch (error) {
            console.error("Fetch error:", error);
            throw error;
      }
}
