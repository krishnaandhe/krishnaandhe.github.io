"use client";
import { useState, useEffect } from "react";
import { FiSearch, FiCheckCircle, FiXCircle, FiArrowLeft } from "react-icons/fi";
import registry from "@/data/certificates.json";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Verify() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (id) { setQuery(id); check(id); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const check = (raw) => {
    const id = (raw ?? query).trim().toUpperCase();
    setTouched(true);
    if (!id) { setResult(null); return; }
    const cert = registry.find((c) => c.id.toUpperCase() === id);
    setResult({ found: !!cert, cert });
  };

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <section id="verify" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-accent2/15 blur-3xl" />
        </div>

        <div className="container max-w-xl">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-accent/30">KA</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-5">Verify a <span className="text-gradient">Certificate</span></h1>
            <p className="text-muted mt-3">Enter the Certificate ID printed on the certificate to confirm its authenticity.</p>
          </div>

          <div className="glass rounded-2xl p-6 mt-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
                <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && check()}
                  placeholder="e.g. KA-M365-2026-0001"
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-line bg-bg text-text font-mono text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <button data-hover onClick={() => check()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-accent to-accent2 text-white font-semibold hover:opacity-90 transition">Verify</button>
            </div>

            {result && result.found && (
              <div className="mt-6 rounded-xl border p-5" style={{ borderColor: "rgba(18,138,75,0.4)", background: "rgba(18,138,75,0.08)" }}>
                <div className="flex items-center gap-2 font-bold" style={{ color: "#12a24b" }}><FiCheckCircle size={20} /> Valid Certificate</div>
                <dl className="mt-4 text-sm">
                  <Row k="Recipient" v={result.cert.recipient} />
                  <Row k="Course" v={result.cert.course} />
                  <Row k="Date" v={result.cert.date} />
                  <Row k="Certificate ID" v={result.cert.id} mono />
                </dl>
              </div>
            )}
            {result && !result.found && (
              <div className="mt-6 rounded-xl border p-5" style={{ borderColor: "rgba(192,57,43,0.4)", background: "rgba(192,57,43,0.08)" }}>
                <div className="flex items-center gap-2 font-bold" style={{ color: "#c0392b" }}><FiXCircle size={20} /> Not Found</div>
                <p className="text-muted text-sm mt-2">No certificate matches that ID. Please check the ID and try again, or contact the trainer.</p>
              </div>
            )}
            {!result && touched && <p className="text-muted text-xs mt-4">Enter a Certificate ID above.</p>}
          </div>

          {/* button-styled back link (matches training page) */}
          <div className="text-center mt-8">
            <a href="/" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-accent text-bg hover:opacity-90 transition">
              <FiArrowLeft size={16} /> Back to Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v, mono }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-dashed border-line last:border-0">
      <dt className="text-muted shrink-0">{k}</dt>
      <dd className={`font-semibold text-right ${mono ? "font-mono" : ""}`}>{v}</dd>
    </div>
  );
}
