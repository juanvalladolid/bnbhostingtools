import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<
  Omit<HTMLAttributes<HTMLDivElement>, "className">
> & {
  className?: string;
};

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("container mx-auto w-full px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
