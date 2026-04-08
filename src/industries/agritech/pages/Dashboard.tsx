import { useState } from 'react';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { orders, weatherData } from '../data/agritechData';

const periods = ['This Week', 'This Month', 'This Year'];

const metrics = [
  { icon: '\u{1F33E}', value: '24.5 tonnes', label: 'Total Harvest', trend: '+12%', up: true },
  { icon: '\u{1F4B5}', value: '\u20A63.2M', label: 'Revenue', trend: '+18%', up: true },
  { icon: '\u{1F4E6}', value: '12', label: 'Active Orders', trend: '+5%', up: true },
  { icon: '\u{1F33F}', value: '92%', label: 'Farm Health', trend: '-3%', up: false },
];

const revenueData = [
  { month: 'Jan', value: 420, pct: 52 },
  { month: 'Feb', value: 580, pct: 72 },
  { month: 'Mar', value: 340, pct: 42 },
  { month: 'Apr', value: 720, pct: 90 },
  { month: 'May', value: 650, pct: 81 },
  { month: 'Jun', value: 490, pct: 61 },
];

const cropDistribution = [
  { name: 'Rice', pct: 35 },
  { name: 'Cassava', pct: 25 },
  { name: 'Maize', pct: 20 },
  { name: 'Yam', pct: 15 },
  { name: 'Others', pct: 5 },
];

function getWeatherIcon(condition: string) {
  if (condition === 'Sunny') return '\u2600\uFE0F';
  if (condition === 'Cloudy') return '\u2601\uFE0F';
  if (condition === 'Rain') return '\u{1F327}\uFE0F';
  return '\u{1F324}\uFE0F';
}

export default function Dashboard() {
  const [period, setPeriod] = useState('This Month');

  return (
    <div className="ag-dashboard">
      <AnimatedSection className="ag-dashboard__header">
        <span className="ag-section-label">Farm Management</span>
        <h1 className="ag-section-heading">Farm Dashboard</h1>
        <p className="ag-section-subtitle">
          Monitor your farm performance, track orders, and view weather forecasts.
        </p>
        <div className="ag-dashboard__period-toggle">
          {periods.map((p) => (
            <button
              key={p}
              className={`ag-dashboard__period-btn ${
                period === p ? 'ag-dashboard__period-btn--active' : ''
              }`}
              onClick={() => setPeriod(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <div className="ag-dashboard__body">
        {/* ── Metrics ── */}
        <AnimatedSection className="ag-dashboard__metrics">
          {metrics.map((m, i) => (
            <div className="ag-metric-card" key={i}>
              <span className="ag-metric-card__icon">{m.icon}</span>
              <span className="ag-metric-card__value">{m.value}</span>
              <span className="ag-metric-card__label">{m.label}</span>
              <span
                className={`ag-metric-card__trend ${
                  m.up ? 'ag-metric-card__trend--up' : 'ag-metric-card__trend--down'
                }`}
              >
                {m.trend}
              </span>
            </div>
          ))}
        </AnimatedSection>

        {/* ── Charts ── */}
        <AnimatedSection className="ag-dashboard__charts">
          {/* Bar Chart */}
          <div className="ag-chart-card">
            <h3 className="ag-chart-card__title">Monthly Revenue (\u20A6&apos;000)</h3>
            <div className="ag-bar-chart">
              {revenueData.map((d) => (
                <div className="ag-bar-chart__bar-wrapper" key={d.month}>
                  <div
                    className="ag-bar-chart__bar"
                    data-value={`\u20A6${d.value}K`}
                    style={{ height: `${d.pct}%` }}
                  />
                  <span className="ag-bar-chart__label">{d.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Bar Chart */}
          <div className="ag-chart-card">
            <h3 className="ag-chart-card__title">Crop Distribution</h3>
            <div className="ag-h-bars">
              {cropDistribution.map((crop) => (
                <div className="ag-h-bar" key={crop.name}>
                  <div className="ag-h-bar__header">
                    <span className="ag-h-bar__name">{crop.name}</span>
                    <span className="ag-h-bar__pct">{crop.pct}%</span>
                  </div>
                  <div className="ag-h-bar__track">
                    <div className="ag-h-bar__fill" style={{ width: `${crop.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Bottom Row ── */}
        <AnimatedSection className="ag-dashboard__bottom">
          {/* Orders Table */}
          <div className="ag-orders-card">
            <h3 className="ag-orders-card__title">Recent Orders</h3>
            <div className="ag-table-scroll">
              <table className="ag-orders-card__table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Buyer</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.buyer}</td>
                      <td>{order.quantity}</td>
                      <td>{order.amount}</td>
                      <td>
                        <span
                          className={`ag-orders-card__status ag-orders-card__status--${order.status.toLowerCase()}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weather */}
          <div className="ag-weather-card">
            <h3 className="ag-weather-card__title">Weather Forecast</h3>
            <div className="ag-weather-card__grid">
              {weatherData.map((day) => (
                <div className="ag-weather-day" key={day.day}>
                  <span className="ag-weather-day__name">{day.day}</span>
                  <span className="ag-weather-day__icon">{getWeatherIcon(day.condition)}</span>
                  <span className="ag-weather-day__temp">{day.temp}&deg;C</span>
                  <span className="ag-weather-day__condition">{day.condition}</span>
                  <span className="ag-weather-day__wind">{day.wind}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
