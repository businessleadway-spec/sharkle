import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
  cta,
  gradient = "from-primary/20 to-accent/10",
}: {
  name: string;
  className?: string;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  href?: string;
  cta?: string;
  gradient?: string;
}) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl",
      "bg-card border border-border/50",
      "transform-gpu transition-all duration-500",
      "hover:border-primary/30 hover:shadow-soft-lg",
      className
    )}
  >
    {/* Gradient background */}
    <div className={cn(
      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
      gradient
    )} />
    
    {/* Decorative circles */}
    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
    <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
    
    {/* Content */}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent flex items-center justify-center mb-4 transition-all duration-500">
        <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-bold text-foreground">
        {name}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>

    {cta && href && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-primary hover:text-primary hover:bg-primary/10">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
  </div>
);

export { BentoCard, BentoGrid };
