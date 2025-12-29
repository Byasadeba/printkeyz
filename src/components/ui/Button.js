'use client';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ButtonVariants = {
  default: 'bg-wood-DEFAULT hover:bg-wood-dark text-white border-wood-DEFAULT shadow-wood',
  outline: 'bg-white/95 border border-wood-accent hover:bg-wood-light hover:border-wood-DEFAULT text-text-primary backdrop-blur-sm',
  ghost: 'hover:bg-wood-light/50 text-text-primary hover:text-wood-DEFAULT',
  destructive: 'bg-red-500 hover:bg-red-600 text-white border-red-500',
};

const ButtonSizes = {
  sm: 'h-9 px-3 rounded-xl text-sm',
  md: 'h-10 px-4 py-2 rounded-2xl text-base',
  lg: 'h-12 px-6 py-3 rounded-3xl text-lg font-semibold',
};

export function Button({
  children,
  className,
  variant = 'default',
  size = 'md',
  disabled,
  loading = false,
  ...props
}) {
  return (
    <motion.button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-DEFAULT focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg disabled:pointer-events-none disabled:opacity-50',
        ButtonVariants[variant],
        ButtonSizes[size],
        className
      )}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      {...props}
    >
      <span className="flex items-center gap-2">
        {loading && (
          <div className="w-5 h-5 border-2 border-current/30 border-t-current rounded-full animate-spin" />
        )}
        {children}
      </span>
    </motion.button>
  );
}
