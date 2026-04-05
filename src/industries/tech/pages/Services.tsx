import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';

interface ServiceData {
  icon: string;
  name: string;
  description: string;
  techStack: string[];
  timeline: string;
  deliverables: string[];
}

const servicesData: ServiceData[] = [
  {
    icon: '{ }',
    name: 'Web App Development',
    description:
      'We build responsive, high-performance web applications using modern frameworks like React, Next.js, and Vue. Our applications are designed for speed, accessibility, and long-term maintainability, with robust testing and CI/CD pipelines built in from day one.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    timeline: '8 – 16 weeks',
    deliverables: [
      'Full-stack web application',
      'Admin dashboard',
      'API documentation',
      'Automated test suite',
      'Deployment pipeline',
    ],
  },
  {
    icon: '📱',
    name: 'Mobile Apps',
    description:
      'Cross-platform and native mobile experiences built with Flutter and React Native. We handle everything from UX research and prototyping to App Store submission and post-launch analytics, ensuring your app delights users on every device.',
    techStack: ['Flutter', 'React Native', 'Dart', 'Swift', 'Kotlin', 'Firebase'],
    timeline: '10 – 20 weeks',
    deliverables: [
      'iOS and Android applications',
      'Push notification system',
      'Analytics integration',
      'App Store assets & submission',
      'Post-launch monitoring setup',
    ],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    description:
      'We design and implement cloud infrastructure that auto-scales, self-heals, and keeps costs predictable. From containerized microservices on Kubernetes to serverless architectures on AWS Lambda, we match the right tools to your workload.',
    techStack: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    timeline: '4 – 10 weeks',
    deliverables: [
      'Infrastructure as Code (IaC)',
      'CI/CD pipeline configuration',
      'Monitoring & alerting dashboards',
      'Disaster recovery plan',
      'Cost optimization report',
    ],
  },
  {
    icon: '🤖',
    name: 'AI Integration',
    description:
      'We integrate machine learning and AI capabilities into your products — from recommendation engines and natural language processing to computer vision and predictive analytics. We use production-ready ML frameworks and ensure models are explainable and fair.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'LangChain', 'OpenAI API'],
    timeline: '6 – 14 weeks',
    deliverables: [
      'Trained ML model(s)',
      'API endpoint for inference',
      'Model performance report',
      'Data pipeline architecture',
      'Integration documentation',
    ],
  },
  {
    icon: '⚡',
    name: 'API & Backend',
    description:
      'High-throughput REST and GraphQL APIs engineered for reliability and developer experience. We design schema-first, implement with Go or Node.js, and stress-test under production-like conditions before launch.',
    techStack: ['Go', 'Node.js', 'GraphQL', 'gRPC', 'Redis', 'RabbitMQ'],
    timeline: '6 – 12 weeks',
    deliverables: [
      'API server with full endpoints',
      'OpenAPI / GraphQL schema',
      'Authentication & authorization',
      'Rate limiting & caching layer',
      'Load test results',
    ],
  },
  {
    icon: '🔒',
    name: 'Security Audits',
    description:
      'Comprehensive security assessments that identify vulnerabilities before attackers do. We perform manual code reviews, automated scanning, penetration testing, and compliance gap analysis for standards like SOC 2, NDPR, and PCI-DSS.',
    techStack: ['OWASP ZAP', 'Burp Suite', 'Snyk', 'SonarQube', 'Nmap', 'Metasploit'],
    timeline: '2 – 6 weeks',
    deliverables: [
      'Vulnerability assessment report',
      'Penetration test findings',
      'Remediation priority matrix',
      'Compliance readiness scorecard',
      'Executive summary briefing',
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tech-services-page">
      <div className="tech-services-page__inner">
        <AnimatedSection className="tech-services-page__header">
          <p className="section-label">Our Services</p>
          <h1 className="tech-services-page__title">What We Build</h1>
          <p className="tech-services-page__subtitle">
            Six core competencies. One unified team. Every layer of the stack covered.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <img
            className="tech-page-image"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            alt="Code on a screen"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection>
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`tech-accordion__item ${isOpen ? 'tech-accordion__item--open' : ''}`}
                key={index}
              >
                <button
                  className="tech-accordion__header"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <div className="tech-accordion__header-left">
                    <span className="tech-accordion__icon">{service.icon}</span>
                    <span className="tech-accordion__name">{service.name}</span>
                  </div>
                  <span className={`tech-accordion__toggle ${isOpen ? 'tech-accordion__toggle--open' : ''}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="tech-accordion__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p className="tech-accordion__description">{service.description}</p>

                      <div className="tech-accordion__meta">
                        <div>
                          <p className="tech-accordion__meta-label">Tech Stack</p>
                          <div className="tech-accordion__tags">
                            {service.techStack.map((tech) => (
                              <span className="tech-accordion__tag" key={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="tech-accordion__meta-label">Typical Timeline</p>
                          <p className="tech-accordion__timeline">{service.timeline}</p>
                        </div>

                        <div>
                          <p className="tech-accordion__meta-label">Sample Deliverables</p>
                          <ul className="tech-accordion__deliverables">
                            {service.deliverables.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
