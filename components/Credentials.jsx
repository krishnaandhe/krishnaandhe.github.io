"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiEye, FiCheckCircle } from "react-icons/fi";
import { certifications, education } from "@/data/portfolio";
import { getIcon } from "./icons";

function Card({ item, i, onOpen }) {
  const Icon = getIcon(item.icon);
  const hasProof = Boolean(item.image || item.verifyUrl);
  return (
    <motion.div
      data-hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
      whileHover={{ y: -6 }}
      onClick={() => hasProof && onOpen(item)}
      className={`group relative glass rounded-2xl p-5 overflow-hidden transition-colors ${
        hasProof ? "cursor-pointer hover:border-accent/60" : "hover:border-accent/40"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
          <Icon size={20} />
        </span>
        <div className="min-w-0">
          <h4 className="font-semibold leading-tight">{item.title}</h4>
          <p className="text-xs text-muted truncate">
            {item.issuer}{item.year ? ` · ${item.year}` : ""}
          </p>
        </div>
      </div>
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
        <div className="overflow-hidden">
          <p className="text-muted text-sm mt-3 leading-relaxed">{item.detail}</p>
        </div>
      </div>
      {hasProof && (
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
          <FiEye size={13} /> View certificate
        </span>
      )}
    </motion.div>
  );
}

function CertModal({ item, onClose }) {
  const isPdf = item?.image?.toLowerCase().endsWith(".pdf");
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.94, y: 12, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 12, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass rounded-2xl border border-line overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4 p-5 border-b border-line">
          <div className="min-w-0">
            <h3 className="font-bold truncate">{item.title}</h3>
            <p className="text-xs text-muted truncate">{item.issuer}{item.year ? ` · ${item.year}` : ""}</p>
          </div>
          <button data-hover onClick={onClose} aria-label="Close"
            className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
            <FiX size={18} />
          </button>
        </div>
        <div className="p-5">
          {item.image ? (
            isPdf ? (
              <object data={item.image} type="application/pdf" className="w-full h-[60vh] rounded-lg bg-white">
                <p className="text-muted text-sm">Preview unavailable.{" "}
                  <a href={item.image} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open PDF ↗</a>
                </p>
              </object>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={item.image} alt={item.title} className="w-full max-h-[60vh] object-contain rounded-lg bg-white" />
            )
          ) : (
            <div className="text-center py-10">
              <FiCheckCircle className="mx-auto text-accent mb-3" size={40} />
              <p className="text-muted text-sm">{item.detail}</p>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3 p-5 border-t border-line">
          {item.image && (
            <a href={item.image} target="_blank" rel="noopener noreferrer" data-hover
               className="text-sm px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
              <FiEye size={15} /> Open full
            </a>
          )}
          {item.verifyUrl && (
            <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer" data-hover
               className="text-sm px-4 py-2 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition flex items-center gap-2">
              <FiExternalLink size={15} /> Verify credential
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Credentials() {
  const [active, setActive] = useState(null);
  const groups = [];
  const seen = {};
  (certifications || []).forEach((c) => {
    const key = c.category || "Certifications";
    if (!(key in seen)) { seen[key] = groups.length; groups.push({ category: key, items: [] }); }
    groups[seen[key]].items.push(c);
  });

  return (
    <section id="credentials" className="py-24 border-t border-line">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Certifications &amp; Education</h2>
        <p className="text-muted mb-12">Click a certificate to preview or verify it.</p>

        {groups.map((g) => (
          <div key={g.category} className="mb-12">
            <h3 className="text-sm font-mono text-accent mb-4">★ {g.category.toUpperCase()}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {g.items.map((c, i) => (
                <Card key={c.title} item={c} i={i} onOpen={setActive} />
              ))}
            </div>
          </div>
        ))}

        {education?.length > 0 && (
          <>
            <h3 className="text-sm font-mono text-accent mb-4">🎓 EDUCATION</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {education.map((e, i) => (
                <Card key={e.title} item={e} i={i} onOpen={setActive} />
              ))}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {active && <CertModal item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
