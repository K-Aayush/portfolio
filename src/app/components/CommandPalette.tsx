"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiDownload,
  FiSearch,
  FiArrowUpRight,
} from "react-icons/fi";
type Command = {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  group: string;
  action: () => void;
  keywords: string;
};

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "home",
        label: "Go to Home",
        hint: "Top of page",
        icon: <FiHome />,
        group: "Navigation",
        keywords: "home hero top landing",
        action: () => scrollToId("home"),
      },
      {
        id: "resume",
        label: "Go to About / Resume",
        hint: "Profile section",
        icon: <FiUser />,
        group: "Navigation",
        keywords: "about resume skills experience education profile hire",
        action: () => scrollToId("resume"),
      },
      {
        id: "projects",
        label: "Go to Projects",
        hint: "Portfolio work",
        icon: <FiCode />,
        group: "Navigation",
        keywords: "projects work portfolio case studies",
        action: () => scrollToId("projects"),
      },
      {
        id: "contact",
        label: "Go to Contact",
        hint: "Get in touch",
        icon: <FiMail />,
        group: "Navigation",
        keywords: "contact email hire message reach",
        action: () => scrollToId("contact"),
      },
      {
        id: "resume-download",
        label: "Download Resume",
        hint: "PDF",
        icon: <FiDownload />,
        group: "Actions",
        keywords: "resume cv download pdf",
        action: () => {
          const a = document.createElement("a");
          a.href = "/resume/Aayush_Karki_Resume.pdf";
          a.download = "Aayush_Karki_Resume.pdf";
          a.click();
        },
      },
      {
        id: "email",
        label: "Email Aayush",
        hint: "ayushkarkee6@gmail.com",
        icon: <FiArrowUpRight />,
        group: "Actions",
        keywords: "email contact mail send",
        action: () => {
          window.location.href = "mailto:ayushkarkee6@gmail.com";
        },
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) => {
      return (
        c.label.toLowerCase().includes(q) ||
        c.keywords.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
      );
    });
  }, [query, commands]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const onOpen = () => setOpen(true);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[activeIndex];
        if (cmd) {
          cmd.action();
          setOpen(false);
          setQuery("");
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, activeIndex]);

  const grouped = useMemo(() => {
    const map = new Map<string, Command[]>();
    filtered.forEach((c) => {
      if (!map.has(c.group)) map.set(c.group, []);
      map.get(c.group)!.push(c);
    });
    return Array.from(map.entries());
  }, [filtered]);

  let runningIndex = -1;

  return (
    <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[18vh] px-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl border border-white/[0.08] bg-[#16161a] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 border-b border-white/[0.06]">
                <FiSearch className="w-4 h-4 text-white/40 shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent py-4 text-sm text-white placeholder:text-white/30 outline-none"
                />
                <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] text-white/40 shrink-0">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <div className="py-10 text-center text-sm text-white/30">
                    No results for "{query}"
                  </div>
                )}

                {grouped.map(([group, items]) => (
                  <div key={group} className="mb-1">
                    <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/30">
                      {group}
                    </div>
                    {items.map((cmd) => {
                      runningIndex++;
                      const isActive = runningIndex === activeIndex;
                      return (
                        <button
                          key={cmd.id}
                          onMouseEnter={() =>
                            setActiveIndex(
                              filtered.findIndex((c) => c.id === cmd.id)
                            )
                          }
                          onClick={() => {
                            cmd.action();
                            setOpen(false);
                            setQuery("");
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-100 ${
                            isActive
                              ? "bg-green-400/10 text-white"
                              : "text-white/70 hover:bg-white/[0.03]"
                          }`}
                        >
                          <span
                            className={`w-7 h-7 grid place-items-center rounded-md shrink-0 ${
                              isActive
                                ? "bg-green-400 text-black"
                                : "bg-white/[0.04] text-white/60"
                            }`}
                          >
                            {cmd.icon}
                          </span>
                          <span className="flex-1 text-sm">{cmd.label}</span>
                          <span className="text-xs text-white/30">
                            {cmd.hint}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.06] text-[10px] text-white/30">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">
                      ↑↓
                    </kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">
                      ↵
                    </kbd>
                    select
                  </span>
                </div>
                <span>Aayush Karki</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  );
};

export default CommandPalette;
