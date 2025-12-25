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
        "grid w-full auto-rows-[14rem] sm:auto-rows-[16rem] md:auto-rows-[18rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
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
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl",
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
    <div className="absolute -right-6 sm:-right-8 -top-6 sm:-top-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
    <div className="absolute -right-3 sm:-right-4 -top-3 sm:-top-4 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
    
    {/* Content */}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1.5 sm:gap-2 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-6 sm:group-hover:-translate-y-10">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent flex items-center justify-center mb-2 sm:mb-4 transition-all duration-500">
        <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-base sm:text-xl font-bold text-foreground">
        {name}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">{description}</p>
    </div>

    {cta && href && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-8 sm:translate-y-10 transform-gpu flex-row items-center p-4 sm:p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-primary hover:text-primary hover:bg-primary/10 text-sm">
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
