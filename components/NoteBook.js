"use client";

import { useState } from "react";

export default function NoteBox() {
  const [note, setNote] = useState("");

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <p className="text-sm font-medium text-indigo-400">
        SCRATCHPAD
      </p>

      <h3 className="mt-1 text-xl font-bold">
        Quick Notes
      </h3>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="mt-5 min-h-40 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-slate-200 outline-none focus:border-indigo-500"
        placeholder="Write your study notes here..."
      />

      <p className="mt-2 text-xs text-slate-500">
        Write anything you want to remember during your study session.
      </p>

    </section>
  );
}