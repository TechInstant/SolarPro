import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle, Check, MapPin, Calendar, Clock, Building2 } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ProjectGallery } from '../components/gallery/ProjectGallery';
import { ProjectCard } from '../components/cards/ProjectCard';
import { Button } from '../components/ui/Button';
import { Stats } from '../components/ui/Stats';
import { getProjectBySlug, getRelatedProjects } from '../data/projects';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

/** Case-study section wrapper: numbered, ruled, consistent rhythm. */
const Chapter: React.FC<{
  index: number;
  title: string;
  children: React.ReactNode;
  id?: string;
}> = ({ index, title, children, id }) => (
  <section id={id} className="border-t border-cream-300 pt-8">
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[11px] tracking-[0.14em] text-bronze">
        {String(index).padStart(2, '0')}
      </span>
      <h2 className="font-display text-[20px] font-semibold text-navy sm:text-[23px]">{title}</h2>
    </div>
    <div className="mt-5">{children}</div>
  </section>
);

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  useSeo({
    title: project ? `${project.title} — ${project.location}` : 'Project',
    description:
      project?.summary ??
      'A documented solar installation case study by SolarPro Engineering.',
    image: project?.coverImage,
    type: 'article',
  });

  if (!project) return <Navigate to="/projects" replace />;

  const related = getRelatedProjects(project);

  const facts = [
    { Icon: Building2, label: 'Client', value: project.clientType },
    { Icon: MapPin, label: 'Location', value: project.location },
    { Icon: Calendar, label: 'Completed', value: project.completionDate },
    { Icon: Clock, label: 'Time on site', value: project.durationOnSite },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${project.category} · ${project.capacity}`}
        title={project.title}
        subtitle={project.summary}
        breadcrumbItems={[{ label: 'Projects', path: '/projects' }, { label: project.title }]}
        bgImage={project.coverImage}
      >
        <Stats items={project.metrics} tone="dark" columns={3} className="max-w-2xl" />
        {project.isExample && (
          <p className="mt-6 inline-block border border-bronze/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-bronze-light">
            Example project — demonstration photography and figures
          </p>
        )}
      </PageHero>

      <div className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-14">
            <div>
              <ProjectGallery images={project.gallery} title={project.title} />

              <div className="mt-12 space-y-10">
                <Chapter index={1} title="The problem">
                  <p className="text-[15.5px] leading-relaxed text-ink-soft">{project.challenge}</p>
                  <div className="mt-5 border-l-2 border-bronze bg-white p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                      What the client asked for
                    </p>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-navy">
                      {project.clientRequirement}
                    </p>
                  </div>
                </Chapter>

                <Chapter index={2} title="The system we designed">
                  <p className="text-[15.5px] leading-relaxed text-ink-soft">
                    {project.solutionProvided}
                  </p>
                  <dl className="mt-6 divide-y divide-cream-200 border border-cream-300 bg-white">
                    {project.systemDesign.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                          {row.label}
                        </dt>
                        <dd className="text-[14.5px] font-medium text-navy sm:text-right">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Chapter>

                <Chapter index={3} title="Equipment used">
                  <ul className="grid gap-px bg-cream-300 sm:grid-cols-2">
                    {project.equipmentUsed.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 bg-white px-4 py-3.5 text-[14px] leading-snug text-ink-soft"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-dark" strokeWidth={2} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Chapter>

                <Chapter index={4} title="How it was installed">
                  <ol className="space-y-5">
                    {project.installationProcess.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-cream-300 bg-white font-mono text-[11px] text-bronze">
                          {index + 1}
                        </span>
                        <span>
                          <span className="block text-[15px] font-medium text-navy">
                            {step.title}
                          </span>
                          <span className="mt-1.5 block text-[14.5px] leading-relaxed text-ink-soft">
                            {step.detail}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </Chapter>

                <Chapter index={5} title="The result">
                  <ul className="grid gap-px bg-navy-line border border-navy-line sm:grid-cols-2">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2.5 bg-navy px-4 py-4 text-[14.5px] leading-snug text-cream-300/90"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-bright" strokeWidth={2} aria-hidden />
                        {result}
                      </li>
                    ))}
                  </ul>
                </Chapter>
              </div>
            </div>

            {/* Sticky summary rail */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-cream-300 bg-white">
                <div className="border-b border-cream-200 px-5 py-4">
                  <p className="eyebrow">Project summary</p>
                  <p className="mt-2 font-display text-[19px] font-semibold text-navy">
                    {project.capacity}
                  </p>
                </div>

                <dl className="divide-y divide-cream-200">
                  {facts.map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 px-5 py-3.5">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.5} aria-hidden />
                      <div className="min-w-0">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                          {label}
                        </dt>
                        <dd className="mt-1 text-[14.5px] text-navy">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <div className="space-y-2.5 border-t border-cream-200 p-5">
                  <Button
                    href={getWhatsAppUrl(whatsappMessages.project(project.title, project.location))}
                    variant="whatsapp"
                    fullWidth
                    leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Need a similar system?
                  </Button>
                  <Button
                    to="/quote"
                    variant="outline"
                    fullWidth
                    trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Request a custom quote
                  </Button>
                </div>
              </div>

              <Link
                to="/projects"
                className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-navy"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                All projects
              </Link>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-cream-300 pt-10">
              <h2 className="font-display text-[20px] font-semibold text-navy">Other projects</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <ProjectCard key={item.id} project={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
