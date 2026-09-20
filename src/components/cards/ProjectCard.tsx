import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import type { Project } from '../../types';
import { cn } from '../../utils/cn';

interface ProjectCardProps {
  project: Project;
  tone?: 'light' | 'dark';
  /** 'feature' gives the card a taller image — used for the first item in a grid. */
  size?: 'default' | 'feature';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  tone = 'light',
  size = 'default',
  className,
}) => {
  const dark = tone === 'dark';

  return (
    <article
      className={cn(
        'group flex h-full flex-col border transition-colors duration-300 ease-engineered',
        dark
          ? 'border-navy-line bg-navy hover:border-moss/60'
          : 'border-cream-300 bg-white hover:border-navy/35',
        className
      )}
    >
      <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
        <div className="relative">
          <SmartImage
            src={project.coverImage}
            alt={project.coverAlt}
            ratio={size === 'feature' ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3]'}
            className="transition-transform duration-[600ms] ease-engineered group-hover:scale-[1.035]"
          />
          <span
            className={cn(
              'absolute left-0 top-0 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em]',
              dark ? 'bg-navy-deep/90 text-cream-300' : 'bg-navy/90 text-cream'
            )}
          >
            {project.category}
          </span>
          {project.isExample && (
            <span className="absolute right-0 top-0 bg-bronze/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
              Example project
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p
          className={cn(
            'flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em]',
            dark ? 'text-cream-300/55' : 'text-ink-muted'
          )}
        >
          <span className={dark ? 'text-moss-bright' : 'text-moss-dark'}>{project.capacity}</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3" strokeWidth={1.75} />
            {project.location}
          </span>
        </p>

        <h3
          className={cn(
            'mt-3 font-display text-lg font-semibold leading-snug sm:text-xl',
            dark ? 'text-cream' : 'text-navy'
          )}
        >
          <Link to={`/projects/${project.slug}`} className="hover:underline underline-offset-4">
            {project.title}
          </Link>
        </h3>

        <p
          className={cn(
            'mt-3 flex-1 text-[14.5px] leading-relaxed',
            dark ? 'text-cream-300/70' : 'text-ink-soft'
          )}
        >
          {project.summary}
        </p>

        <div
          className={cn(
            'mt-5 flex items-center justify-between border-t pt-4',
            dark ? 'border-navy-line' : 'border-cream-200'
          )}
        >
          <Link
            to={`/projects/${project.slug}`}
            className={cn(
              'inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors',
              dark ? 'text-cream hover:text-moss-bright' : 'text-navy hover:text-moss-dark'
            )}
          >
            View case study
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 ease-engineered group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
          <span
            className={cn(
              'font-mono text-[11px] uppercase tracking-[0.12em]',
              dark ? 'text-cream-300/40' : 'text-ink-muted'
            )}
          >
            {project.completionDate}
          </span>
        </div>
      </div>
    </article>
  );
};
