import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const securityCards = [
  {
    icon: '&#128274;',
    title: 'AES-256 Encryption',
    desc: 'Every transaction, every message, every piece of data is encrypted with military-grade AES-256 encryption — the same standard used by governments and intelligence agencies worldwide.',
  },
  {
    icon: '&#128272;',
    title: 'Two-Factor Authentication (2FA)',
    desc: 'Protect your account with biometric authentication (fingerprint or face ID), one-time passwords, and device-based verification. Unauthorized access is virtually impossible.',
  },
  {
    icon: '&#128737;',
    title: 'PCI DSS Level 1 Compliance',
    desc: 'Kash meets the highest Payment Card Industry Data Security Standard — Level 1. We undergo rigorous annual audits by certified security assessors to maintain this status.',
  },
  {
    icon: '&#128176;',
    title: 'NDIC Deposit Insurance',
    desc: 'All customer deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC) up to ₦500,000. Your money is protected even in the most unlikely scenarios.',
  },
];

const securityFeatures = [
  {
    icon: '&#128270;',
    title: 'Real-Time Fraud Detection',
    desc: 'AI-powered transaction monitoring analyzes every transaction in real-time to detect and block suspicious activity before it affects your account.',
  },
  {
    icon: '&#128241;',
    title: 'Device-Based Security',
    desc: 'Your account is bound to your device. Any login from a new device triggers additional verification steps and instant notifications.',
  },
  {
    icon: '&#128225;',
    title: 'Instant Card Freeze',
    desc: 'Lost your card? Freeze it instantly from the app or web portal. Unfreeze just as quickly when you find it.',
  },
  {
    icon: '&#128232;',
    title: 'Transaction Alerts',
    desc: 'Get instant push notifications and email alerts for every transaction. Know exactly what happens with your money, the moment it happens.',
  },
  {
    icon: '&#128373;',
    title: 'SOC 2 Type II Certified',
    desc: 'Our infrastructure and operational processes are independently audited and certified to meet SOC 2 Type II trust service criteria.',
  },
  {
    icon: '&#128640;',
    title: 'Bug Bounty Program',
    desc: 'We maintain an active bug bounty program with security researchers worldwide. If a vulnerability exists, we want to know about it first.',
  },
  {
    icon: '&#128450;',
    title: 'Data Residency',
    desc: 'Customer data is stored in secure, geographically redundant data centers with ISO 27001 certification. Your data never leaves our secure infrastructure.',
  },
  {
    icon: '&#128679;',
    title: '99.99% Uptime SLA',
    desc: 'Our infrastructure is built for resilience with multi-region failover, ensuring your banking services are available when you need them.',
  },
];

export default function Security() {
  return (
    <div className="kash-security-page">
      {/* ── Hero ── */}
      <section className="kash-security-hero">
        <AnimatedSection className="kash-security-hero__inner">
          <motion.span
            className="kash-security-hero__icon"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            &#128737;
          </motion.span>
          <motion.h1
            className="kash-security-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your Money. <span className="gradient">Our Fortress.</span>
          </motion.h1>
          <motion.p
            className="kash-security-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Bank-grade security is not a feature at Kash — it is the foundation.
            Every layer of our platform is built to protect your money and your data.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Core Security Grid ── */}
      <AnimatedSection className="kash-security-grid">
        <div className="kash-security-grid__inner">
          <h2 className="kash-security-grid__heading">Core Security Infrastructure</h2>
          <div className="kash-security-grid__cards">
            {securityCards.map((card) => (
              <div className="kash-security-card" key={card.title}>
                <span
                  className="kash-security-card__icon"
                  dangerouslySetInnerHTML={{ __html: card.icon }}
                />
                <h3 className="kash-security-card__title">{card.title}</h3>
                <p className="kash-security-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Security Features List ── */}
      <AnimatedSection className="kash-security-features">
        <div className="kash-security-features__inner">
          <h2 className="kash-security-features__heading">Every Layer, Secured</h2>
          <div className="kash-security-features__list">
            {securityFeatures.map((feat) => (
              <div className="kash-security-features__item" key={feat.title}>
                <span
                  className="kash-security-features__item-icon"
                  dangerouslySetInnerHTML={{ __html: feat.icon }}
                />
                <div className="kash-security-features__item-text">
                  <strong>{feat.title}</strong>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection className="kash-security-cta">
        <div className="kash-security-cta__inner">
          <h2 className="kash-security-cta__heading">Bank with confidence</h2>
          <p className="kash-security-cta__text">
            Your security is our top priority. Open an account and experience
            banking protected by world-class security infrastructure.
          </p>
          <Link to="/fintech/pricing">
            <motion.button className="kash-hero__btn-primary" {...buttonHover}>
              Open Secure Account &rarr;
            </motion.button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
