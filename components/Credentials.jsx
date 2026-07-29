"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiEye } from "react-icons/fi";
import { certifications, education } from "@/data/portfolio";
import { getIcon } from "./icons";

/* compact card — smaller padding, smaller icon, single-line title, no hover-expand */
function Card({ item, i, onOpen }) {
  const Icon = getIcon(item.icon);
  const hasProof = Boolean(item.image || item.verifyUrl);
  return (
    <motion.button
      type="button"
      data-hover
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
      whileHover={{ y: -3 }}
      onClick={() => hasProof && onOpen(item)}
      className={`glass rounded-xl p-3 flex items-center gap-3 text-left transition-colors ${hasProof ? "cursor-pointer hover:border-accent/60" : ""}`}
    >
      <span className="w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
        <Icon size={16} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-semibold leading-tight truncate">{item.title}</span>
        <span className="block text-[11px] text-muted truncate">
          {item.issuer}{item.year ? ` · ${item.year}` : ""}
        </span>
      </span>
      {hasProof && <FiEye size={13} className="text-accent shrink-0" />}
    </motion.button>
  );
}

function Modal({ item, onClose }) {
  const isPdf = item?.image?.toLowerCase().endsWith(".pdf");
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.95, y: 10, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 10, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl glass rounded-2xl border border-line overflow-hidden">
        <div className="flex items-start justify-between gap-4 p-5 border-b border-line">
          <div className="min-w-0"><h3 className="font-bold truncate">{item.title}</h3>
            <p className="text-xs text-muted truncate">{item.issuer}{item.year ? ` · ${item.year}` : ""}</p></div>
          <button data-hover onClick={onClose} className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center hover:border-accent hover:text-accent transition-colors"><FiX size={18} /></button>
        </div>
        <div className="p-5">
          {item.image
            ? (isPdf
              ? <object data={item.image} type="application/pdf" className="w-full h-[60vh] rounded-lg bg-white"><p className="text-muted text-sm">Preview unavailable. <a href={item.image} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open ↗</a></p></object>
              : /* eslint-disable-next-line @next/next/no-img-element */ <img src={item.image} alt={item.title} className="w-full max-h-[60vh] object-contain rounded-lg bg-white" />)
            : <p className="text-muted text-sm text-center py-8">{item.detail}</p>}
        </div>
        <div className="flex items-center justify-end gap-3 p-5 border-t border-line">
          {item.image && <a href={item.image} target="_blank" rel="noopener noreferrer" data-hover className="text-sm px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors flex items-center gap-2"><FiEye size={15} /> Open full</a>}
          {item.verifyUrl && <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer" data-hover className="text-sm px-4 py-2 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition flex items-center gap-2"><FiExternalLink size={15} /> Verify</a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Credentials() {
  const [active, setActive] = useState(null);

  // group by category
  const groups = [];
  const seen = {};
  (certifications || []).forEach((c) => {
    const k = c.category || "Certifications";
    if (!(k in seen)) { seen[k] = groups.length; groups.push({ category: k, items: [] }); }
    groups[seen[k]].items.push(c);
  });

  return (
    <section id="credentials" className="py-10 border-t border-line">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-1">Certifications &amp; Education</h2>
        <p className="text-muted mb-8 text-sm">Click any certificate to preview or verify it.</p>

        {/* compact: 2 → 3 columns, small gaps, tight category spacing */}
        {groups.map((g) => (
          <div key={g.category} className="mb-7">
            <h3 className="text-xs font-mono text-accent mb-3">★ {g.category.toUpperCase()}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.items.map((c, i) => <Card key={c.title} item={c} i={i} onOpen={setActive} />)}
            </div>
          </div>
        ))}

        {education?.length > 0 && (
          <>
            <h3 className="text-xs font-mono text-accent mb-3">🎓 EDUCATION</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {education.map((e, i) => <Card key={e.title} item={e} i={i} onOpen={setActive} />)}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>{active && <Modal item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
