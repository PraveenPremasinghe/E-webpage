import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dotColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({
     children,
     className,
     dotColor = "bg-primary",
     textColor = "text-primary",
     hoverTextColor = "text-primary-foreground",
     backgroundColor = "bg-white",
     borderColor = "border",
     ...props
   }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        `group relative w-auto cursor-pointer overflow-hidden rounded-full ${borderColor} ${backgroundColor} p-2 px-6 text-center font-medium`,
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${dotColor} transition-all duration-300 group-hover:scale-[100.8]`}></div>
        <span className={`inline-block ${textColor} transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0`}>
          {children}
        </span>
      </div>
      <div className={`absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 ${hoverTextColor} opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100`}>
        <span>{children}</span>
        <ArrowRight className={hoverTextColor} />
      </div>
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";
