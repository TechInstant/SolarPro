import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FilterTabs } from '../ui/FilterTabs';
import { ProjectCard } from '../cards/ProjectCard';
import { Button } from '../ui/Button';
import { EmptyState } from '../ui/States';
import { projectsData } from '../../data/projects';
import { useReveal } from '../../hooks/useReveal';

const filters = ['All', 'Residential', 'Commercial', 'Installation', 'Maintenance'] as const;

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const ref = useReveal<HTMLDivElement>();

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projectsData.length };
    filters.slice(1).forEach((key) => {
      result[key] = projectsData.filter(
        (project) => project.category === key || project.tags.includes(key)
      ).length;
    });
    return result;
  }, []);

  const visible = useMemo(() => {
    if (filter === 'All') return projectsData.slice(0, 4);
    return projectsData
      .filter((project) => project.category === filter || project.tags.includes(filter))
      .slice(0, 4);
  }, [filter]);

  return (
    <section id="projects" className="relative bg-navy py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 blueprint opacity-60" aria-hidden />

      <div className="shell relative">
        <SectionHeader
          tone="dark"
          eyebrow="Recent work"
          title="Real Projects. Real Impact."
          description="We've completed a wide range of solar installations for homes, businesses, churches and institutions."
          action={
            <Button
              to="/projects"
              variant="outlineLight"
              size="sm"
              trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
              className="hidden md:inline-flex"
            >
              Full portfolio
            </Button>
          }
        />

        <FilterTabs
          options={filters}
          value={filter}
          onChange={setFilter}
          counts={counts}
          tone="dark"
          label="Filter projects by type"
          className="mt-9"
        />

        {visible.length === 0 ? (
          <EmptyState
            title="Nothing here yet"
            description="No project in this category has been published yet. The full portfolio has everything we have documented so far."
            actionLabel="Clear filter"
            onAction={() => setFilter('All')}
            className="mt-8 border-navy-line bg-navy-deep"
          />
        ) : (
          <div ref={ref} className="reveal mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} tone="dark" />
            ))}
          </div>
        )}

        <Button
          to="/projects"
          variant="outlineLight"
          fullWidth
          className="mt-8 md:hidden"
          trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
        >
          View the full portfolio
        </Button>
      </div>
    </section>
  );
};
