export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">

      <h1 className="text-2xl font-bold text-indigo-400">
        Focus OS
      </h1>

      <div className="flex gap-6 text-sm text-slate-300">
        <a href="#dashboard">Dashboard</a>
        <a href="#tasks">Tasks</a>
        <a href="#notes">Notes</a>
        <a href="#timer">Focus</a>
      </div>

    </nav>
  );
}