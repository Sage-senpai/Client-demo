import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';

const complianceCerts = [
  {
    icon: '🛡️',
    title: 'ISO 45001:2018',
    desc: 'Occupational Health and Safety Management System — internationally recognized framework for worker protection and hazard prevention.',
  },
  {
    icon: '🌿',
    title: 'ISO 14001:2015',
    desc: 'Environmental Management System — ensures our construction processes minimize ecological impact and comply with Nigerian environmental regulations.',
  },
  {
    icon: '📜',
    title: 'OSHA Compliance',
    desc: 'All site supervisors hold valid OSHA 30-Hour Construction certifications. We align our safety practices with international best standards.',
  },
];

const trainingPrograms = [
  {
    number: 1,
    title: 'Site Induction Program',
    desc: 'Every worker completes a mandatory 4-hour induction covering site-specific hazards, emergency procedures, PPE requirements, and reporting protocols before entering any Bastion site.',
  },
  {
    number: 2,
    title: 'Working at Heights',
    desc: 'Specialized training for scaffolding teams, steel erectors, and facade installers. Covers harness inspection, anchor points, rescue procedures, and fall arrest systems.',
  },
  {
    number: 3,
    title: 'Excavation & Confined Space',
    desc: 'For ground workers and foundation teams. Covers trench collapse prevention, atmospheric monitoring, permit-to-work systems, and emergency extraction procedures.',
  },
  {
    number: 4,
    title: 'Fire Prevention & Response',
    desc: 'Hot work permit systems, fire watch procedures, extinguisher operation, and evacuation drills. All sites conduct monthly fire drills with documented results.',
  },
  {
    number: 5,
    title: 'First Aid & Emergency Response',
    desc: 'Each site maintains a minimum of 4 certified first aiders. Training covers trauma response, CPR, tourniquet use, and medical evacuation coordination.',
  },
  {
    number: 6,
    title: 'Environmental Awareness',
    desc: 'Waste segregation, spill prevention, noise monitoring, dust suppression, and water management. Workers learn to identify and report environmental non-conformances.',
  },
];

export default function Safety() {
  return (
    <div className="con-safety-page">
      {/* ── Page Header ── */}
      <div className="con-page-header">
        <h1 className="con-page-header__title">Health, Safety &amp; Environment</h1>
        <p className="con-page-header__subtitle">
          Zero compromise on safety. Every worker goes home safe — every day.
        </p>
      </div>

      {/* ── Policy Statement ── */}
      <AnimatedSection className="con-section">
        <div className="con-policy-statement">
          <h3 className="con-policy-statement__title">Our HSE Policy</h3>
          <p className="con-policy-statement__text">
            Bastion Group is committed to providing a safe, healthy, and environmentally
            responsible workplace for all employees, subcontractors, and communities
            affected by our operations. We believe that every incident is preventable, and
            we invest in the training, equipment, and culture necessary to achieve zero
            harm. Safety is not a department — it is a core value embedded in every task,
            every decision, and every level of our organization. Our leadership team is
            personally accountable for HSE performance, and every worker has the authority
            and responsibility to stop work if they identify an unsafe condition.
          </p>
        </div>

        {/* ── Safety Statistics ── */}
        <hr className="con-accent-bar" />
        <h2 className="con-section-title">Safety Performance</h2>
        <p className="con-section-subtitle">
          Our numbers reflect our commitment. Measured across all active and completed
          projects.
        </p>
        <div className="con-safety-stats">
          <div className="con-safety-stat">
            <CounterStat end={2500000} suffix="+" label="Safe Man-Hours" />
          </div>
          <div className="con-safety-stat">
            <CounterStat end={0} suffix="" label="Fatalities (Lifetime)" />
          </div>
          <div className="con-safety-stat">
            <CounterStat end={98} suffix="%" label="Inspection Pass Rate" />
          </div>
          <div className="con-safety-stat">
            <CounterStat end={365} suffix="" label="Days LTI-Free" />
          </div>
        </div>
      </AnimatedSection>

      {/* ── Certifications & Compliance ── */}
      <AnimatedSection className="con-section con-section--warm">
        <div className="con-section__inner">
          <hr className="con-accent-bar" />
          <h2 className="con-section-title">Certifications &amp; Compliance</h2>
          <p className="con-section-subtitle">
            We maintain international safety and environmental certifications across all
            operations.
          </p>
          <div className="con-compliance-grid">
            {complianceCerts.map((cert) => (
              <div className="con-compliance-card" key={cert.title}>
                <div className="con-compliance-card__icon">{cert.icon}</div>
                <h3 className="con-compliance-card__title">{cert.title}</h3>
                <p className="con-compliance-card__desc">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Training Programs ── */}
      <AnimatedSection className="con-section">
        <hr className="con-accent-bar" />
        <h2 className="con-section-title">Training Programs</h2>
        <p className="con-section-subtitle">
          Every Bastion worker is trained, assessed, and certified before starting work on
          any project.
        </p>
        <div className="con-training-list">
          {trainingPrograms.map((program) => (
            <div className="con-training-item" key={program.number}>
              <div className="con-training-item__number">{program.number}</div>
              <div className="con-training-item__content">
                <h4 className="con-training-item__title">{program.title}</h4>
                <p className="con-training-item__desc">{program.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Incident Reporting ── */}
      <AnimatedSection className="con-section">
        <div className="con-incident">
          <div className="con-incident__content">
            <h3 className="con-incident__title">Incident Reporting</h3>
            <p className="con-incident__text">
              Bastion operates a transparent incident reporting system. All near-misses,
              unsafe conditions, and incidents must be reported within 1 hour. Reports are
              investigated by our HSE team within 24 hours, and corrective actions are
              tracked to closure. We maintain an anonymous reporting hotline for workers who
              wish to raise concerns without identification. Every report is treated
              seriously — there are no penalties for reporting in good faith.
            </p>
          </div>
          <div className="con-incident__actions">
            <button className="con-incident__btn">
              Report an Incident
            </button>
            <button className="con-incident__btn con-incident__btn--outline">
              Anonymous Hotline: 0800-BASTION
            </button>
            <button className="con-incident__btn con-incident__btn--outline">
              Download HSE Handbook (PDF)
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
