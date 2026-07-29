"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiGitBranch, FiExternalLink } from "react-icons/fi";
import { featuredProjects, github } from "@/data/portfolio";
import { getIcon } from "./icons";

function FeaturedCard({ p, i }) {
  const Icon = getIcon(p.icon);
  return (
    <motion.article
      data-hover
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl p-6 hover:border-accent/60 transition-colors"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
            <Icon size={20} />
          </span>
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{p.title}</h3>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent">{p.badge}</span>
      </div>
      <p className="text-sm text-accent2 mb-2">{p.subtitle}</p>
      <p className="text-muted text-sm leading-relaxed">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-md border border-line text-muted">{t}</span>
        ))}
      </div>
      {p.link && (
        <a href={p.link} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-1 mt-4 text-sm text-accent hover:underline">
          View project <FiExternalLink size={14} />
        </a>
      )}
    </motion.article>
  );
}

function RepoCard({ repo, i }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      data-hover
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl p-6 hover:border-accent/60 transition-colors flex flex-col"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
          <FiGitBranch size={18} />
        </span>
        <h3 className="font-semibold group-hover:text-accent transition-colors truncate">{repo.name}</h3>
      </div>
      <p className="text-muted text-sm leading-relaxed flex-1">
        {repo.description || "No description provided."}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />{repo.language}
          </span>
        )}
        <span className="flex items-center gap-1"><FiStar size={13} /> {repo.stargazers_count}</span>
        <span className="flex items-center gap-1"><FiGitBranch size={13} /> {repo.forks_count}</span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!github.enabled || !github.username) return;
    setStatus("loading");
    fetch(`https://api.github.com/users/${github.username}/repos?per_page=100&sort=updated`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        let list = Array.isArray(data) ? data : [];
        list = list.filter((r) => {
          if (!github.includeForks && r.fork) return false;
          if (r.archived) return false;
          if (github.exclude.includes(r.name)) return false;
          if (github.onlyTopic && !(r.topics || []).includes(github.onlyTopic)) return false;
          return true;
        });
        list.sort((a, b) =>
          github.sort === "stars"
            ? b.stargazers_count - a.stargazers_count
            : new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(list.slice(0, github.max));
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="projects" className="py-10 border-t border-line">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
        <p className="text-muted mb-12">Featured work plus my latest public repositories.</p>

        {featuredProjects.length > 0 && (
          <>
            <h3 className="text-sm font-mono text-accent mb-4">★ FEATURED</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-14">
              {featuredProjects.map((p, i) => (
                <FeaturedCard key={p.title} p={p} i={i} />
              ))}
            </div>
          </>
        )}

        {github.enabled && (
          <>
            <h3 className="text-sm font-mono text-accent mb-4">⬡ FROM GITHUB</h3>
            {status === "loading" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="glass rounded-2xl p-6 animate-pulse h-40" />
                ))}
              </div>
            )}
            {status === "done" && repos.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} i={i} />
                ))}
              </div>
            )}
            {status === "done" && repos.length === 0 && (
              <p className="text-muted text-sm">No public repositories to show yet.</p>
            )}
            {status === "error" && (
              <p className="text-muted text-sm">
                Couldn&apos;t load repositories right now. View them on{" "}
                <a href={`https://github.com/${github.username}`} target="_blank"
                   rel="noopener noreferrer" className="text-accent hover:underline">GitHub ↗</a>.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
