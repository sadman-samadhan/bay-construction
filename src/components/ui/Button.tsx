import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "white" | "emergency";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] cursor-pointer text-center";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs tracking-wide",
    md: "px-5 py-2.5 text-sm tracking-wide",
    lg: "px-7 py-3.5 text-base tracking-wide shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-[#1B2A4A] text-white hover:bg-[#2C4066] focus:ring-[#1B2A4A] shadow-sm",
    accent:
      "bg-[#F59E0B] text-slate-950 font-bold hover:bg-[#D97706] focus:ring-[#F59E0B] shadow-md hover:shadow-amber-500/20",
    outline:
      "border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white focus:ring-[#1B2A4A]",
    white:
      "bg-white text-[#1B2A4A] hover:bg-slate-100 focus:ring-white shadow-md font-bold",
    emergency:
      "bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500 shadow-md animate-pulse",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
