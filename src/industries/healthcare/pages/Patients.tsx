import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const mockAppointments = [
  {
    id: 1,
    doctor: 'Dr. Adaeze Okafor',
    department: 'General Practice',
    date: 'Mon, 14 Apr 2025',
    time: '09:00 AM',
    status: 'confirmed' as const,
  },
  {
    id: 2,
    doctor: 'Dr. Chukwuemeka Nwosu',
    department: 'Cardiology',
    date: 'Wed, 16 Apr 2025',
    time: '11:30 AM',
    status: 'pending' as const,
  },
  {
    id: 3,
    doctor: 'Dr. Folake Adeyemi',
    department: 'Pediatrics',
    date: 'Fri, 4 Apr 2025',
    time: '02:00 PM',
    status: 'completed' as const,
  },
];

const mockResults = [
  {
    id: 1,
    test: 'Complete Blood Count (CBC)',
    date: '28 Mar 2025',
    status: 'Normal',
    file: 'cbc_results.pdf',
  },
  {
    id: 2,
    test: 'Lipid Panel',
    date: '28 Mar 2025',
    status: 'Borderline High',
    file: 'lipid_panel.pdf',
  },
  {
    id: 3,
    test: 'Thyroid Function (TSH)',
    date: '20 Mar 2025',
    status: 'Normal',
    file: 'thyroid_tsh.pdf',
  },
  {
    id: 4,
    test: 'Chest X-Ray',
    date: '15 Mar 2025',
    status: 'Clear',
    file: 'chest_xray.pdf',
  },
  {
    id: 5,
    test: 'Urinalysis',
    date: '10 Mar 2025',
    status: 'Normal',
    file: 'urinalysis.pdf',
  },
];

export default function Patients() {
  const handleDownload = (filename: string) => {
    alert(`Download initiated for: ${filename}\n\nThis is a demo — in production, this would download your actual test results securely.`);
  };

  return (
    <div className="med-portal-page">
      {/* ── Page Header ── */}
      <section className="med-page-header">
        <AnimatedSection className="med-page-header__inner">
          <motion.h1
            className="med-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Patient Portal
          </motion.h1>
          <motion.p
            className="med-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            View your appointments, test results, and manage your health records in one place.
          </motion.p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="med-portal">
        {/* ── Upcoming Appointments ── */}
        <div className="med-portal__section">
          <h2 className="med-portal__section-title">Your Appointments</h2>
          <div className="med-portal__appointments">
            {mockAppointments.map((appt) => (
              <div className="med-portal__appointment-card" key={appt.id}>
                <div className="med-portal__appt-info">
                  <h4>{appt.doctor}</h4>
                  <p>
                    {appt.department} &middot; {appt.date} at {appt.time}
                  </p>
                </div>
                <span
                  className={`med-portal__appt-status med-portal__appt-status--${appt.status}`}
                >
                  {appt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Test Results ── */}
        <div className="med-portal__section">
          <h2 className="med-portal__section-title">Test Results</h2>
          <div className="med-portal__table-wrapper">
            <table className="med-portal__table">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Report</th>
                </tr>
              </thead>
              <tbody>
                {mockResults.map((result) => (
                  <tr key={result.id}>
                    <td>{result.test}</td>
                    <td>{result.date}</td>
                    <td>{result.status}</td>
                    <td>
                      <motion.button
                        className="med-portal__download-btn"
                        onClick={() => handleDownload(result.file)}
                        {...buttonHover}
                      >
                        Download
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
