export default async function getTodos() {
      const res = await fetch("http://localhost:5000/todos",{
            next:{
                  revalidate:1
            }
      });
      if (!res.ok) {
            throw new Error("Failed to fetch the todos");
      }
      return res.json();
}