export default function TaskCard({
  title,
  subject,
  completed,
  onComplete,
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">

      <div>
        <p
          className={`font-medium ${
            completed
              ? "text-slate-500 line-through"
              : "text-white"
          }`}
        >
          {title}
        </p>

        <p className="text-xs text-slate-500">
          {subject}
        </p>
      </div>

      <button
        onClick={onComplete}
        className={`rounded-lg px-3 py-2 text-xs ${
          completed
            ? "bg-slate-700 text-slate-400"
            : "bg-green-600 text-white"
        }`}
      >
        {completed ? "Completed" : "Complete"}
      </button>

    </div>
  );
}