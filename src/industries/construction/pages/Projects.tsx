import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import projectsData, { type Project } from '../data/projectsData';

type Sector = 'All' | Project['sector'];

const sectors: Sector[] = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Institutional'];

export default function Projects() {
  const [activeSector, setActiveSector] = useState<Sector>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeSector === 'All'
    ? projectsData
    : projectsData.filter((p) => p.sector === activeSector);

  return (
    <div className="con-projects-page">
      {/* ── Page Header ── */}
      <div className="con-page-header">
        <h1 className="con-page-header__title">Our Projects</h1>
        <p className="con-page-header__subtitle">
          Over 200 projects delivered across Nigeria — from high-rise towers to
          national infrastructure.
        </p>
      </div>

      <AnimatedSection className="con-section">
        {/* ── Filters ── */}
        <div className="con-filter-bar">
          {sectors.map((sector) => (
            <button
              key={sector}
              className={`con-filter-bar__btn ${
                activeSector === sector ? 'con-filter-bar__btn--active' : ''
              }`}
              onClick={() => setActiveSector(sector)}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <motion.div className="con-projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="con-project-card"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="con-project-card__image"
                />
                <span
                  className={`con-project-card__status con-project-card__status--${project.status.toLowerCase()}`}
                >
                  {project.status}
                </span>
                <div className="con-project-card__overlay">
                  <span className="con-project-card__sector">{project.sector}</span>
                  <h3 className="con-project-card__name">{project.name}</h3>
                  <p className="con-project-card__location">{project.location}</p>
                  <p className="con-project-card__value">{project.value}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="con-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="con-modal"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="con-modal__image"
              />
              <div className="con-modal__body">
                <div className="con-modal__header">
                  <div>
                    <h2 className="con-modal__title">{selectedProject.name}</h2>
                    <p className="con-modal__meta">{selectedProject.location}</p>
                  </div>
                  <motion.button
                    className="con-modal__close"
                    onClick={() => setSelectedProject(null)}
                    {...buttonHover}
                  >
                    ✕
                  </motion.button>
                </div>

                <div className="con-modal__badges">
                  <span className="con-modal__badge con-modal__badge--sector">
                    {selectedProject.sector}
                  </span>
                  <span
                    className={`con-modal__badge ${
                      selectedProject.status === 'Completed'
                        ? 'con-modal__badge--status'
                        : 'con-modal__badge--ongoing'
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                  <span className="con-modal__badge con-modal__badge--value">
                    {selectedProject.value}
                  </span>
                </div>

                <div className="con-modal__section">
                  <h4>Project Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="con-modal__section">
                  <h4>The Challenge</h4>
                  <p>{selectedProject.challenge}</p>
                </div>

                <div className="con-modal__section">
                  <h4>Our Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>

                <div className="con-modal__section">
                  <h4>Technologies &amp; Methods</h4>
                  <div className="con-modal__tags">
                    {selectedProject.techTags.map((tag) => (
                      <span key={tag} className="con-modal__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
