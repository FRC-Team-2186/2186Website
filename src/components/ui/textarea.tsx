import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-steel-500/40 bg-steel-850 px-3 py-2 text-sm text-steel-100 placeholder:text-steel-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:border-electric/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
