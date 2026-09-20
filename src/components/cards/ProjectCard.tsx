import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Home, Building2, Church, Zap } from 'lucide-react';
import type { Project } from '../../types';
import { cn } from '../../utils/cn';

interface ProjectCardProps {
  project: Project;
  size?: 'default' | 'feature' | string;
  tone?: 'light' | 'dark';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const CategoryIcon =
    project.category === 'Residential'
      ? Home
      : project.category === 'Commercial'
      ? Building2
      : project.category === 'Church'
      ? Church
      : Zap;

  return (
    <article
      className={cn(
        'group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-navy-line bg-white shadow-lg transition-all duration-300 hover:border-moss/50 hover:shadow-xl',
        className
      )}
    >
      <div>
        <Link to={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[16/10] bg-navy-800">
          <img
            src={project.coverImage}
            alt={project.coverAlt || project.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-engineered group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        <div className="p-4 sm:p-5">
          <h3 className="text-[15.5px] sm:text-[16px] font-bold text-navy group-hover:text-moss-dark transition-colors line-clamp-1">
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <div className="mt-3 space-y-1.5 text-[12px] text-ink-muted">
            <div className="flex items-center gap-2">
              <CategoryIcon className="h-3.5 w-3.5 text-moss-dark shrink-0" strokeWidth={1.75} />
              <span className="truncate">{project.clientType || `${project.category} Installation`}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-moss-dark shrink-0" strokeWidth={1.75} />
              <span className="truncate">{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-moss-dark shrink-0" strokeWidth={1.75} />
              <span className="truncate">{project.capacity.split('·')[0].trim()} Solar System</span>
            </div>
          </div>

          <p className="mt-3 text-[12.5px] leading-snug text-ink-soft line-clamp-2">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-moss-dark transition-colors hover:text-moss group-hover:text-moss-dark"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
};

