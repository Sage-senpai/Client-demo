import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

interface Role {
  title: string;
  department: string;
  type: 'Remote' | 'Hybrid';
  location: string;
  description: string;
  responsibilities: string[];
}

const openings: Role[] = [
  {
    title: 'Senior Backend Engineer (Go)',
    department: 'Engineering',
    type: 'Remote',
    location: 'Anywhere in Africa',
    description:
      'We are looking for a senior Go engineer to join our backend platform team. You will design and build the core services that power our clients\u2019 most critical systems \u2014 payment pipelines, real-time data feeds, and high-throughput APIs.',
    responsibilities: [
      'Design and implement microservices in Go with a focus on performance and reliability',
      'Own the architecture of backend systems handling millions of daily requests',
      'Write comprehensive tests and participate in code reviews',
      'Mentor mid-level engineers and contribute to hiring decisions',
      'Collaborate with product and design teams to define technical requirements',
    ],
  },
  {
    title: 'Full-Stack Engineer (React + Node.js)',
    department: 'Engineering',
    type: 'Hybrid',
    location: 'Lagos, Nigeria',
    description:
      'Join our product engineering team to build end-to-end web applications for clients across fintech, healthtech, and e-commerce. You will work closely with designers and product managers to ship features that users love.',
    responsibilities: [
      'Build responsive, accessible front-end interfaces with React and TypeScript',
      'Develop RESTful and GraphQL APIs with Node.js',
      'Integrate third-party services and APIs',
      'Write unit, integration, and end-to-end tests',
      'Participate in sprint planning, estimation, and retrospectives',
    ],
  },
  {
    title: 'ML / AI Engineer',
    department: 'AI Lab',
    type: 'Remote',
    location: 'Anywhere',
    description:
      'We are building an AI practice that solves real problems for African businesses. As an ML engineer, you will develop, train, and deploy machine learning models that power intelligent features in our client products.',
    responsibilities: [
      'Design and train ML models for NLP, computer vision, and recommendation systems',
      'Build and maintain data pipelines for model training and inference',
      'Deploy models to production with monitoring and versioning',
      'Research and prototype new approaches to client-specific challenges',
      'Collaborate with backend engineers to integrate ML into existing systems',
    ],
  },
  {
    title: 'DevOps / Platform Engineer',
    department: 'Infrastructure',
    type: 'Remote',
    location: 'Anywhere in Africa',
    description:
      'Own our cloud infrastructure and developer experience. You will build the platforms and tools that enable our engineering teams to ship faster and more reliably.',
    responsibilities: [
      'Manage multi-cloud infrastructure on AWS and GCP using Terraform',
      'Build and maintain CI/CD pipelines with GitHub Actions and ArgoCD',
      'Implement observability with Prometheus, Grafana, and distributed tracing',
      'Manage Kubernetes clusters and container orchestration',
      'Automate security scanning and compliance checks in the deployment pipeline',
    ],
  },
  {
    title: 'Product Designer',
    department: 'Design',
    type: 'Hybrid',
    location: 'Lagos, Nigeria',
    description:
      'We need a product designer who can turn complex technical requirements into simple, beautiful interfaces. You will work across multiple client projects, from fintech dashboards to mobile health apps.',
    responsibilities: [
      'Conduct user research and translate findings into design decisions',
      'Create wireframes, prototypes, and high-fidelity designs in Figma',
      'Build and maintain design systems for client projects',
      'Collaborate closely with engineers during implementation',
      'Present design rationale to clients and incorporate feedback',
    ],
  },
  {
    title: 'Technical Project Manager',
    department: 'Operations',
    type: 'Hybrid',
    location: 'Lagos, Nigeria',
    description:
      'Manage the delivery of complex software projects from kickoff to launch. You will be the bridge between our clients and engineering teams, ensuring projects ship on time, on scope, and on budget.',
    responsibilities: [
      'Define project scope, timelines, and milestones with clients',
      'Run daily standups and weekly status reviews',
      'Identify and mitigate risks before they become blockers',
      'Track budgets, resource allocation, and team velocity',
      'Maintain clear documentation and communication channels',
    ],
  },
];

export default function Careers() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleApply = (e: FormEvent<HTMLFormElement>, roleTitle: string) => {
    e.preventDefault();
    toast.success(`Application for "${roleTitle}" submitted successfully! We will be in touch.`);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="tech-careers-page">
      <div className="tech-careers-page__inner">
        <AnimatedSection className="tech-careers-page__header">
          <p className="section-label">Join Us</p>
          <h1 className="tech-careers-page__title">Careers at Axiom Labs</h1>
          <p className="tech-careers-page__subtitle">
            We are always looking for talented engineers, designers, and strategists who want
            to build world-class software from Africa.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <img
            className="tech-page-image"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
            alt="Modern office space"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="tech-careers-page__title">Current Openings</h2>

          {openings.map((role, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`tech-role-card ${isOpen ? 'tech-role-card--open' : ''}`}
                key={index}
              >
                <button
                  className="tech-role-card__header"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <div className="tech-role-card__info">
                    <span className="tech-role-card__role-name">{role.title}</span>
                    <div className="tech-role-card__meta">
                      <span className="tech-role-card__meta-tag">{role.department}</span>
                      <span className="tech-role-card__meta-tag">{role.type}</span>
                      <span className="tech-role-card__meta-tag">{role.location}</span>
                    </div>
                  </div>
                  <span className={`tech-role-card__toggle ${isOpen ? 'tech-role-card__toggle--open' : ''}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="tech-role-card__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p className="tech-role-card__description">{role.description}</p>

                      <ul className="tech-role-card__responsibilities">
                        {role.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>

                      <h4 className="tech-role-card__apply-title">Apply for this Role</h4>

                      <form
                        className="tech-apply-form"
                        onSubmit={(e) => handleApply(e, role.title)}
                      >
                        <div className="tech-apply-form__field">
                          <label className="tech-apply-form__label">Full Name</label>
                          <input
                            className="tech-apply-form__input"
                            type="text"
                            placeholder="Your full name"
                            required
                          />
                        </div>

                        <div className="tech-apply-form__field">
                          <label className="tech-apply-form__label">Email Address</label>
                          <input
                            className="tech-apply-form__input"
                            type="email"
                            placeholder="you@example.com"
                            required
                          />
                        </div>

                        <div className="tech-apply-form__field">
                          <label className="tech-apply-form__label">Portfolio / GitHub URL</label>
                          <input
                            className="tech-apply-form__input"
                            type="url"
                            placeholder="https://github.com/your-profile"
                          />
                        </div>

                        <div className="tech-apply-form__field">
                          <label className="tech-apply-form__label">Resume</label>
                          <input
                            className="tech-apply-form__file-input"
                            type="file"
                            id={`resume-${index}`}
                            accept=".pdf,.doc,.docx"
                          />
                          <label
                            className="tech-apply-form__file-label"
                            htmlFor={`resume-${index}`}
                          >
                            Click to upload your resume (PDF, DOC)
                          </label>
                        </div>

                        <motion.button
                          className="tech-apply-form__submit"
                          type="submit"
                          {...buttonHover}
                        >
                          Submit Application
                        </motion.button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </div>
  );
}
