import React, { useMemo, useState } from 'react';
import { ArrowRight, FolderKanban } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../cards/ProjectCard';
import { projectsData } from '../../data/projects';
import { cn } from '../../utils/cn';

const filters = ['All', 'Residential', 'Commercial', 'Installation', 'Maintenance'] as const;

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const visible = useMemo(() => {
    if (filter === 'All') return projectsData.slice(0, 4);
    return projectsData
      .filter((project) => project.category === filter || project.tags.includes(filter))
      .slice(0, 4);
  }, [filter]);

  return (
    <section id="projects" className="relative bg-navy-deep py-16 lg:py-20 text-cream">
      <div className="shell relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-bright">
              Our Recent Work
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-cream">
              Real Projects. Real Impact.
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-cream-300/80">
              We've completed a wide range of solar installations for homes, businesses, churches and industries. Here are some of our recent projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200',
                    active
                      ? 'bg-moss text-white shadow-sm'
                      : 'bg-navy-800/80 text-cream-300/80 hover:text-cream hover:bg-navy-700 border border-navy-line'
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5-Column Grid (4 Project Cards + 1 Explore More Card) */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* 5th Card: View More Projects */}
          <div className="flex flex-col justify-center items-center text-center rounded-xl border border-navy-line bg-navy/60 p-6 backdrop-blur-sm min-h-[300px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-moss-bright border border-navy-line">
              <FolderKanban className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-base font-bold text-cream">View More Projects</h3>
            <p className="mt-2 text-xs text-cream-300/70 max-w-[160px]">
              See our full portfolio of completed projects.
            </p>
            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-navy-line bg-navy-800 hover:bg-navy-700 px-4 py-2 text-xs font-semibold text-cream transition-colors"
            >
              Explore Projects
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

