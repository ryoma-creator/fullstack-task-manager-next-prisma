
export default async function TasksPage() {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });
  
    const tasks = await res.json();
  
    return (
      <main style={{ padding: 20 }}>
        <h1>Tasks</h1>
        <ul>
          {tasks.map((task: any) => (
            <li key={task.id}>
              {task.title} — {task.status}
            </li>
          ))}
        </ul>
      </main>
    );
  }
  