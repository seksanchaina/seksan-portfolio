import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:-translate-y-0.5 hover:bg-[#112766]"
      : "border border-brand bg-white text-brand hover:-translate-y-0.5 hover:bg-blue-50";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
