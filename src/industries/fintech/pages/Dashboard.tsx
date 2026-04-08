import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { transactions } from '../data/fintechData';

const metrics = [
  { label: 'Income (Jan)', value: '₦1,454,800', change: '+12.3%', direction: 'up' as const },
  { label: 'Expenses (Jan)', value: '₦596,050', change: '-4.1%', direction: 'down' as const },
  { label: 'Vault Savings', value: '₦720,000', change: '+₦42,500', direction: 'up' as const },
  { label: 'Cashback Earned', value: '₦18,750', change: '+₦5,000', direction: 'up' as const },
];

const chartData = [
  { month: 'Jul', income: 65, expense: 40 },
  { month: 'Aug', income: 72, expense: 45 },
  { month: 'Sep', income: 58, expense: 52 },
  { month: 'Oct', income: 80, expense: 38 },
  { month: 'Nov', income: 75, expense: 48 },
  { month: 'Dec', income: 90, expense: 55 },
  { month: 'Jan', income: 85, expense: 42 },
];

const quickActions = [
  { icon: '&#9889;', label: 'Send Money' },
  { icon: '&#128179;', label: 'Card Settings' },
  { icon: '&#128176;', label: 'Kash Vault' },
  { icon: '&#128196;', label: 'Pay Bills' },
  { icon: '&#127760;', label: 'Buy Forex' },
  { icon: '&#128202;', label: 'Analytics' },
  { icon: '&#128274;', label: 'Security' },
  { icon: '&#128172;', label: 'Support' },
];

const filterOptions = ['All', 'Credit', 'Debit', 'Pending', 'Failed'];

export default function Dashboard() {
  const [filter, setFilter] = useState('All');

  const filteredTransactions = transactions.filter((txn) => {
    if (filter === 'All') return true;
    if (filter === 'Credit') return txn.type === 'credit';
    if (filter === 'Debit') return txn.type === 'debit';
    if (filter === 'Pending') return txn.status === 'pending';
    if (filter === 'Failed') return txn.status === 'failed';
    return true;
  });

  const handleAction = (label: string) => {
    toast.success(`${label} — coming soon in the Kash app!`);
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-NG').format(amount);
  };

  return (
    <div className="kash-dashboard-page">
      {/* ── Page Header ── */}
      <section className="kash-page-header">
        <AnimatedSection className="kash-page-header__inner">
          <motion.h1
            className="kash-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Dashboard <span className="gradient">Demo</span>
          </motion.h1>
          <motion.p
            className="kash-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A preview of what your Kash dashboard looks like. Real data, real-time, all in one place.
          </motion.p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="kash-dashboard">
        <div className="kash-dashboard__inner">
          {/* ── Balance Card ── */}
          <div className="kash-balance-card">
            <p className="kash-balance-card__label">Total Balance</p>
            <h2 className="kash-balance-card__amount">&#8358;2,450,000.00</h2>
            <div className="kash-balance-card__actions">
              <motion.button
                className="kash-balance-card__btn"
                {...buttonHover}
                onClick={() => handleAction('Send Money')}
              >
                &#9889; Send
              </motion.button>
              <motion.button
                className="kash-balance-card__btn"
                {...buttonHover}
                onClick={() => handleAction('Request Money')}
              >
                &#128229; Request
              </motion.button>
              <motion.button
                className="kash-balance-card__btn"
                {...buttonHover}
                onClick={() => handleAction('Add Money')}
              >
                &#43; Add Money
              </motion.button>
            </div>
          </div>

          {/* ── Metrics ── */}
          <div className="kash-metrics">
            {metrics.map((m) => (
              <div className="kash-metric-card" key={m.label}>
                <p className="kash-metric-card__label">{m.label}</p>
                <h3 className="kash-metric-card__value">{m.value}</h3>
                <span className={`kash-metric-card__change kash-metric-card__change--${m.direction}`}>
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* ── CSS Bar Chart ── */}
          <div className="kash-chart">
            <div className="kash-chart__header">
              <h3>Income vs Expenses</h3>
              <div className="kash-chart__legend">
                <div className="kash-chart__legend-item">
                  <span className="kash-chart__legend-item-dot kash-chart__legend-item-dot--income" />
                  Income
                </div>
                <div className="kash-chart__legend-item">
                  <span className="kash-chart__legend-item-dot kash-chart__legend-item-dot--expense" />
                  Expenses
                </div>
              </div>
            </div>
            <div className="kash-chart__bars">
              {chartData.map((d) => (
                <div className="kash-chart__bar-group" key={d.month}>
                  <div className="kash-chart__bar-pair">
                    <div
                      className="kash-chart__bar kash-chart__bar--income"
                      style={{ height: `${d.income}%` }}
                    />
                    <div
                      className="kash-chart__bar kash-chart__bar--expense"
                      style={{ height: `${d.expense}%` }}
                    />
                  </div>
                  <span className="kash-chart__bar-label">{d.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Transactions Table ── */}
          <div className="kash-transactions">
            <div className="kash-transactions__header">
              <h3>Recent Transactions</h3>
              <select
                className="kash-transactions__filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {filterOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="kash-transactions__wrapper">
              <table className="kash-transactions__table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((txn) => (
                    <tr key={txn.id}>
                      <td className="kash-transactions__desc">{txn.desc}</td>
                      <td className="kash-transactions__date">{txn.date}</td>
                      <td className={`kash-transactions__amount kash-transactions__amount--${txn.type}`}>
                        {txn.type === 'credit' ? '+' : '-'}&#8358;{formatAmount(txn.amount)}
                      </td>
                      <td>
                        <span className={`kash-transactions__status kash-transactions__status--${txn.status}`}>
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Quick Actions ── */}
          <div className="kash-quick-actions">
            <h3 className="kash-quick-actions__heading">Quick Actions</h3>
            <div className="kash-quick-actions__grid">
              {quickActions.map((action) => (
                <motion.div
                  className="kash-action-card"
                  key={action.label}
                  {...buttonHover}
                  onClick={() => handleAction(action.label)}
                >
                  <span
                    className="kash-action-card__icon"
                    dangerouslySetInnerHTML={{ __html: action.icon }}
                  />
                  <span className="kash-action-card__label">{action.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
