import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export function ButtonLink({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      className={cn(
        "relative cursor-pointer text-base font-proto text-accent inline-block shadow-[0_0_0_0_#000] transition-[color_0.175s_ease,background-color_0.15s_ease,box-shadow_0.15s_cubic-bezier(0.175,0.885,0.32,1.275),transform_0.175s_cubic-bezier(0.175,0.885,0.32,1.275)] before:content-[''] before:bg-transparent before:w-full before:h-full before:absolute before:bottom-[-0.65em] before:left-0 after:content-[''] after:bg-current after:w-full after:h-0.5 after:absolute after:bottom-0 after:left-0 after:opacity-35 after:transition-[all_0.2s_cubic-bezier(0.175,0.885,0.32,1.275)] hover:outline-none hover:text-foreground hover:bg-background hover:shadow-[0_0_0_4px_#000] hover:transform-[skewX(-6deg)_scaleX(.98)] hover:after:transform-[translateY(6px)_scaleX(.65)] hover:after:bg-accent hover:after:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
