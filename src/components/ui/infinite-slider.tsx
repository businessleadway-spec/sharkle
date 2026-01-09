import { cn } from '@/lib/utils';
import { memo, useMemo } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
};

export const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  reverse = false,
  className,
  pauseOnHover = true,
}: InfiniteSliderProps) {
  const style = useMemo(() => ({
    gap: `${gap}px`,
    animationDuration: `${duration}s`,
  }), [gap, duration]);

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max',
          reverse ? 'animate-scroll-reverse' : 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={style}
      >
        {children}
        {children}
      </div>
    </div>
  );
});
