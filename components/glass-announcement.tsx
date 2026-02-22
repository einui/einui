"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, X } from "lucide-react";

const glassAnnouncementVariants = cva(
  cn(
    "relative overflow-hidden rounded-full",
    "backdrop-blur-xl border",
    "transition-all duration-300"
  ),
  {
    variants: {
      variant: {
        default: "bg-white/10 border-white/20 hover:bg-white/15",
        primary: cn(
          "bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
          "border-cyan-400/30 hover:border-cyan-400/50"
        ),
        purple: cn(
          "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
          "border-purple-400/30 hover:border-purple-400/50"
        ),
        success: cn(
          "bg-gradient-to-r from-emerald-500/20 to-green-500/20",
          "border-emerald-400/30 hover:border-emerald-400/50"
        ),
        warning: cn(
          "bg-gradient-to-r from-amber-500/20 to-orange-500/20",
          "border-amber-400/30 hover:border-amber-400/50"
        ),
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface GlassAnnouncementProps
  extends Omit<HTMLMotionProps<"div">, "children">,
  VariantProps<typeof glassAnnouncementVariants> {
  /** The label/tag shown at the start (e.g., "New", "Update") */
  label?: string;
  /** Main announcement text */
  children: React.ReactNode;
  /** Optional link to navigate to */
  href?: string;
  /** Show arrow icon */
  showArrow?: boolean;
  /** Show sparkle icon */
  showSparkle?: boolean;
  /** Dismissible announcement */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Pulse animation on the label */
  pulse?: boolean;
}

const announcementVariants: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.3,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      duration: 0.2,
      bounce: 0.5,
    },
  },
  tap: { scale: 0.98 },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

function GlassAnnouncement({
  className,
  variant,
  size,
  label = "New",
  children,
  href,
  showArrow = true,
  showSparkle = true,
  dismissible = false,
  onDismiss,
  pulse = true,
  ...props
}: GlassAnnouncementProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);

  if (isDismissed) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    onDismiss?.();
  };

  const content = (
    <motion.div
      className={cn(glassAnnouncementVariants({ variant, size }), "group max-w-[90vw]", className)}
      variants={announcementVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      exit="exit"
      {...props}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          variant === "primary" && "bg-cyan-500/10",
          variant === "purple" && "bg-purple-500/10",
          variant === "success" && "bg-emerald-500/10",
          variant === "warning" && "bg-amber-500/10",
          variant === "default" && "bg-white/5"
        )}
      />

      <div className="relative flex items-center gap-2">
        {/* Label badge */}
        <span
          className={cn(
            "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold",
            variant === "primary" && "bg-cyan-500/30 text-cyan-200",
            variant === "purple" && "bg-purple-500/30 text-purple-200",
            variant === "success" && "bg-emerald-500/30 text-emerald-200",
            variant === "warning" && "bg-amber-500/30 text-amber-200",
            variant === "default" && "bg-white/20 text-white"
          )}
        >
          {showSparkle && <Sparkles className="w-3 h-3" />}
          {pulse && (
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-current"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          )}
          {label}
        </span>

        {/* Main text */}
        <span className="text-white/90 font-medium line-clamp-1">{children}</span>

        {/* Arrow */}
        {showArrow && (
          <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white/90 group-hover:translate-x-0.5 transition-all" />
        )}

        {/* Dismiss button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="ml-1 p-0.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

// Full-width banner variant
export interface GlassAnnouncementBannerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /** The label/tag shown at the start */
  label?: string;
  /** Main announcement text */
  children: React.ReactNode;
  /** Optional link */
  href?: string;
  /** Dismissible */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Background gradient colors */
  gradient?: "cyan" | "purple" | "emerald" | "amber" | "rainbow";
}

function GlassAnnouncementBanner({
  className,
  label = "New",
  children,
  href,
  dismissible = true,
  onDismiss,
  gradient = "cyan",
  ...props
}: GlassAnnouncementBannerProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);

  if (isDismissed) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    onDismiss?.();
  };

  const gradientStyles = {
    cyan: "from-cyan-500/20 via-blue-500/20 to-cyan-500/20",
    purple: "from-purple-500/20 via-pink-500/20 to-purple-500/20",
    emerald: "from-emerald-500/20 via-green-500/20 to-emerald-500/20",
    amber: "from-amber-500/20 via-orange-500/20 to-amber-500/20",
    rainbow: "from-cyan-500/20 via-purple-500/20 to-pink-500/20",
  };

  const content = (
    <motion.div
      className={cn(
        "relative w-full py-2.5 px-4",
        "bg-linear-to-r",
        gradientStyles[gradient],
        "border-b border-white/10",
        "backdrop-blur-xl",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      {...props}
    >
      <div className="flex items-center justify-center gap-3 text-sm">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold",
            gradient === "cyan" && "bg-cyan-500/30 text-cyan-200",
            gradient === "purple" && "bg-purple-500/30 text-purple-200",
            gradient === "emerald" && "bg-emerald-500/30 text-emerald-200",
            gradient === "amber" && "bg-amber-500/30 text-amber-200",
            gradient === "rainbow" && "bg-purple-500/30 text-purple-200"
          )}
        >
          <Sparkles className="w-3 h-3" />
          {label}
        </span>

        <span className="text-white/90">{children}</span>

        {href && (
          <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
        )}

        {dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute right-4 p-1 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {content}
      </Link>
    );
  }

  return content;
}

export { GlassAnnouncement, GlassAnnouncementBanner };
