import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, className, children, ...props }) => {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={cn(
        'font-semibold tracking-tight',
        level === 1 && 'text-3xl',
        level === 2 && 'text-2xl',
        level === 3 && 'text-xl',
        level === 4 && 'text-lg',
        level === 5 && 'text-base',
        level === 6 && 'text-sm',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children, ...props }) => {
  return (
    <p
      className={cn('text-sm leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
};

const Lead: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children, ...props }) => {
  return (
    <p
      className={cn('text-lg text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  );
};

const Small: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, children, ...props }) => {
  return (
    <small
      className={cn('text-sm font-medium text-muted-foreground', className)}
      {...props}
    >
      {children}
    </small>
  );
};

export { Heading, Text, Lead, Small };
