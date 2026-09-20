import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'dark' | 'outline' | 'outlineLight' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Icon rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon rendered after the label — nudges right on hover. */
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    /** Internal route. */
    to: string;
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    /** External link, tel: or mailto:. */
    href: string;
    to?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variants: Record<Variant, string> = {
  primary:
    'bg-moss text-white border border-moss hover:bg-moss-dark hover:border-moss-dark active:bg-moss-dark',
  dark: 'bg-navy text-cream border border-navy hover:bg-navy-deep hover:border-navy-deep',
  outline:
    'bg-transparent text-navy border border-cream-300 hover:border-navy hover:bg-navy hover:text-cream',
  outlineLight:
    'bg-transparent text-cream border border-white/25 hover:border-cream hover:bg-cream hover:text-navy',
  ghost: 'bg-transparent text-navy border border-transparent hover:text-moss-dark',
  whatsapp: 'bg-[#1FA855] text-white border border-[#1FA855] hover:bg-[#178443] hover:border-[#178443]',
};

const sizes: Record<Size, string> = {
  sm: 'min-h-[40px] px-4 text-[13px] gap-1.5',
  md: 'min-h-[48px] px-5 text-[15px] gap-2',
  lg: 'min-h-[54px] px-7 text-[15px] gap-2.5',
};

/**
 * The one button in the system. Renders as <button>, <Link> or <a>
 * depending on the props given, so no CTA is ever a dead element.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  leadingIcon,
  trailingIcon,
  fullWidth,
  ...rest
}) => {
  const classes = cn(
    'group inline-flex items-center justify-center rounded-sm font-medium tracking-[-0.005em]',
    'transition-colors duration-200 ease-engineered',
    'disabled:cursor-not-allowed disabled:opacity-55',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && (
        <span className="shrink-0 transition-transform duration-200 ease-engineered group-hover:translate-x-0.5">
          {trailingIcon}
        </span>
      )}
    </>
  );

  if ('to' in rest && rest.to) {
    const { to, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, target, rel, ...anchorProps } = rest as ButtonAsAnchor;
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noreferrer noopener' : undefined)}
        className={classes}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {content}
    </button>
  );
};
