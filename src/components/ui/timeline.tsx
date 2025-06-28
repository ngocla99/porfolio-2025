import * as React from "react";

import { cn } from "@/lib/utils";

type TimelineContext = {
  orientation: "horizontal" | "vertical";
};

const TimelineContext = React.createContext<TimelineContext | null>(null);

function useTimeline() {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a <Timeline />.");
  }

  return context;
}

function Timeline({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"ol"> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <TimelineContext.Provider value={{ orientation }}>
      <ol
        role='list'
        data-orientation={orientation}
        className={cn("flex", orientation === "vertical" && "flex-col", className)}
        {...props}
      />
    </TimelineContext.Provider>
  );
}

function TimelineItem({ className, ...props }: React.ComponentProps<"li">) {
  const { orientation } = useTimeline();

  return (
    <li
      data-orientation={orientation}
      className={cn("flex gap-4", orientation === "horizontal" && "flex-col", className)}
      {...props}
    />
  );
}

function TimelineSeparator({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useTimeline();

  return (
    <div
      data-orientation={orientation}
      className={cn("flex items-center", orientation === "vertical" && "flex-col", className)}
      {...props}
    />
  );
}

function TimelineDot({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "outline";
}) {
  const { orientation } = useTimeline();

  return (
    <div
      data-orientation={orientation}
      className={cn(
        "flex size-4 items-center justify-center empty:after:block empty:after:rounded-full empty:after:outline-current [&_svg]:size-4",
        orientation === "vertical" && "mt-1",
        variant === "default" && "empty:after:size-2.5 empty:after:bg-current",
        variant === "outline" && "empty:after:size-2 empty:after:outline",
        className
      )}
      {...props}
    />
  );
}

function TimelineConnector({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useTimeline();

  return (
    <div
      data-orientation={orientation}
      className={cn(
        "flex-1 bg-border",
        orientation === "vertical" && "my-2 w-0.5",
        orientation === "horizontal" && "mx-2 h-0.5",
        className
      )}
      {...props}
    />
  );
}

function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useTimeline();

  return (
    <div
      data-orientation={orientation}
      className={cn(
        "flex-1",
        orientation === "vertical" && "pb-7 first:text-right last:text-left",
        orientation === "horizontal" && "pr-7",
        className
      )}
      {...props}
    />
  );
}

function TimelineTitle({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useTimeline();

  return <div data-orientation={orientation} className={className} {...props} />;
}

function TimelineDescription({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useTimeline();

  return (
    <div data-orientation={orientation} className={cn("text-[0.8em] text-muted-foreground", className)} {...props} />
  );
}

export {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
};
