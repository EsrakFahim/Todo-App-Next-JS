export default async function getAllTodos(params) {
      console.log(params);
      const res = await fetch(`http://localhost:5000/todos/${params}`, {
            // next: {
            //       revalidate: 1, // Revalidate the data every 1 second
            // },
            cache: "no-cache",
      });
      if (!res.ok) {
            throw new Error(res.statusText);
      }
      return res.json();
}
