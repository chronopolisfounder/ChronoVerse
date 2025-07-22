import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

export default function ResearcherPortal() {
  const [pods, setPods] = useState([]);
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  // Load all pods on mount
  useEffect(() => {
    async function fetchPods() {
      const podsCol = collection(db, "researchPods");
      const podsSnap = await getDocs(podsCol);
      setPods(podsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchPods();
  }, []);

  async function submitPod(e) {
    e.preventDefault();
    setLoading(true);
    await addDoc(collection(db, "researchPods"), {
      name,
      field,
      desc,
      created: Timestamp.now(),
      votes: 0
    });
    setName(""); setField(""); setDesc(""); setLoading(false);

    // Refresh pods list
    const podsCol = collection(db, "researchPods");
    const podsSnap = await getDocs(podsCol);
    setPods(podsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050C18] to-black text-white flex flex-col items-center p-10">
      <div className="w-full max-w-2xl bg-white/5 rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-cyan-400/30">
        <h1 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-glow">
          Researcher Portal
        </h1>
        <form onSubmit={submitPod} className="mb-8 space-y-3">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="p-2 rounded w-full bg-gray-900 bg-opacity-70 border border-cyan-400 text-cyan-100" required />
          <input value={field} onChange={e => setField(e.target.value)} placeholder="Field of Research" className="p-2 rounded w-full bg-gray-900 bg-opacity-70 border border-cyan-400 text-cyan-100" required />
          <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Research Description" className="p-2 rounded w-full bg-gray-900 bg-opacity-70 border border-cyan-400 text-cyan-100" required />
          <button type="submit" className="bg-cyan-500 px-4 py-2 text-black rounded font-bold shadow hover:bg-cyan-400 transition" disabled={loading}>
            {loading ? "Submitting..." : "Submit Pod"}
          </button>
        </form>
        <h2 className="text-xl font-semibold mb-2 text-cyan-400">Research Pods</h2>
        {pods.length === 0 && <p className="text-gray-400">No research pods yet.</p>}
        {pods.map((pod, i) => (
          <div key={pod.id || i} className="mb-3 p-3 rounded bg-white/10 border-l-4 border-cyan-400 shadow-inner">
            <div className="font-bold text-cyan-200">{pod.name} ({pod.field})</div>
            <div className="text-cyan-100">{pod.desc}</div>
            <div className="text-xs text-gray-400">Votes: {pod.votes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
