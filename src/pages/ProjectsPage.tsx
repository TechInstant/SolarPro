import React, { useMemo, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ProjectCard } from '../components/cards/ProjectCard';
import { FilterTabs } from '../components/ui/FilterTabs';
import { EmptyState } from '../components/ui/States';
import { Button } from '../components/ui/Button';
import { Stats } from '../components/ui/Stats';
import { projectsData, projectFilters } from '../data/projects';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  useSeo({
    title: 'Solar Project Portfolio — Case Studies',
    description:
      'Completed solar installations for homes, businesses, churches and institutions across Nigeria, documented as full engineering case studies.',
  });

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projectsData.length };
    projectFilters.slice(1).forEach((key) => {
      result[key] = projectsData.filter((p) => p.category === key || p.tags.includes(key)).length;
    });
    return result;
  }, []);

  const visible = useMemo(() => {
    if (filter === 'All') return projectsData;
    return projectsData.filter((p) => p.category === filter || p.tags.includes(filter));
  }, [filter]);

  const totals = useMemo(() => {
    const capacity = projectsData.reduce((sum, project) => {
      const match = project.capacity.match(/([\d.]+)kVA/i);
      return sum + (match ? parseFloat(match[1]) : 0);
    }, 0);
    return [
      { value: `${projectsData.length}`, label: 'Documented case studies' },
      { value: `${Math.round(capacity)}kVA`, label: 'Installed capacity shown' },
      { value: '5', label: 'States covered' },
      { value: '0', label: 'Systems handed over untested' },
    ];
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Real Projects. Real Impact."
        subtitle="We've completed a wide range of solar installations for homes, businesses, churches and institutions. Each one is written up as a case study: the problem, the system designed, the equipment used and what changed afterwards."
        breadcrumbItems={[{ label: 'Projects' }]}
        bgImage={projectsData[0].coverImage}
      >
        <Stats items={totals} tone="dark" columns={4} className="max-w-3xl" />
      </PageHero>

      <section className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-col gap-5 border-b border-cream-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Filter</p>
              <p className="mt-2 text-[15px] text-ink-soft">
                Showing{' '}
                <span className="font-medium text-navy">
                  {visible.length} {visible.length === 1 ? 'project' : 'projects'}
                </span>
                {filter !== 'All' && <> in {filter}</>}
              </p>
            </div>
            <FilterTabs
              options={projectFilters}
              value={filter}
              onChange={setFilter}
              counts={counts}
              label="Filter projects by category"
              className="sm:justify-end"
            />
          </div>

          {visible.length === 0 ? (
            <EmptyState
              className="mt-10"
              title="No projects in this category yet"
              description="We have not published a case study in this category. Tell us what you are planning and we will talk you through something comparable."
              actionLabel="Show all projects"
              onAction={() => setFilter('All')}
            />
          ) : (
            <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  size={index === 0 && filter === 'All' ? 'feature' : 'default'}
                  className={index === 0 && filter === 'All' ? 'sm:col-span-2' : undefined}
                />
              ))}
            </div>
          )}

          <div className="mt-14 border border-cream-300 bg-white p-6 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <h2 className="font-display text-[22px] font-semibold text-navy sm:text-[26px]">
                  Need a similar system?
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  Send the closest project to what you have in mind. We will tell you what it would
                  take on your property — honestly, including where it would differ.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Button
                  to="/quote"
                  trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Request a quote
                </Button>
                <Button
                  href={getWhatsAppUrl(whatsappMessages.general)}
                  variant="outline"
                  leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Ask on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
