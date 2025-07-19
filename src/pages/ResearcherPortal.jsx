import React, { useState } from "react";

export default function ResearcherPortal() {
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log("Researcher submitted:", { name, field });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white p-10">
      <h1 className="text-4xl font-bold mb-4 text-purple-400">🔬 Researcher Portal</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              className="w-full bg-gray-800 p-3 rounded-lg text-white"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Field of Research</label>
            <input
              className="w-full bg-gray-800 p-3 rounded-lg text-white"
              type="text"
              value={field}
              onChange={(e) => setField(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-purple-700 rounded-xl hover:bg-purple-600"
          >
            Submit Researcher Profile
          </button>
        </form>
      ) : (
        <p className="text-green-400 text-xl mt-4">
          ✅ Research profile submitted. Thank you!
        </p>
      )}
    </div>
  );
}
