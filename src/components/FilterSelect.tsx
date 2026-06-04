import { useEffect, useId, useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type FilterSelectProps = {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
};

export default function FilterSelect({
  label,
  value,
  options,
  onChange,
  className = "",
}: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </span>

      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        className={`flex min-h-[4.5rem] w-full items-center justify-between gap-4 rounded-2xl border px-6 py-4 text-left text-base font-medium transition-all duration-300 outline-none ${
          open
            ? "border-orange-500/50 bg-orange-500/10 text-white shadow-[0_0_40px_rgba(249,115,22,0.2)]"
            : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/[0.07]"
        }`}
      >
        <span>{selected?.label ?? "Select"}</span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
            open
              ? "rotate-180 border-orange-500/40 bg-orange-500/20 text-orange-300"
              : "border-white/10 bg-black/40 text-zinc-400"
          }`}
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="absolute top-[calc(100%+0.5rem)] right-0 left-0 z-50 overflow-hidden rounded-2xl border border-orange-500/30 bg-zinc-950/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(249,115,22,0.15)] backdrop-blur-xl animate-dropdown-in"
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;

            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  style={{ animationDelay: `${index * 40}ms` }}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-200 animate-dropdown-item outline-none ${
                    isSelected
                      ? "bg-orange-500/20 text-orange-200"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <span className="text-orange-400" aria-hidden>
                      ✓
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
