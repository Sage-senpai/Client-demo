import { useState } from 'react';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { claims } from '../data/insuranceData';

function statusClass(status: string): string {
  switch (status) {
    case 'Approved':
      return 'ins-claims__status--approved';
    case 'Processing':
      return 'ins-claims__status--processing';
    case 'Under Review':
      return 'ins-claims__status--under-review';
    case 'Denied':
      return 'ins-claims__status--denied';
    default:
      return '';
  }
}

export default function Claims() {
  const [searchId, setSearchId] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [claimType, setClaimType] = useState('Health');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const filteredClaims = searchId.trim()
    ? claims.filter(
        (c) =>
          c.id.toLowerCase().includes(searchId.toLowerCase()) ||
          c.policyNumber.toLowerCase().includes(searchId.toLowerCase())
      )
    : claims;

  const handleFileClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!policyNumber.trim() || !description.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success(
      'Claim filed successfully! You will receive a confirmation email shortly.',
      { duration: 5000 }
    );
    setPolicyNumber('');
    setClaimType('Health');
    setDescription('');
    setAmount('');
  };

  return (
    <div className="ins-claims">
      <div className="ins-claims__inner">
        <AnimatedSection>
          <p className="ins-section-label">Claims Center</p>
          <h1 className="ins-claims__heading">Track Your Claims</h1>
          <p className="ins-claims__subtitle">
            Search by claim ID or policy number to view your claim status in
            real time.
          </p>

          {/* ── Search ── */}
          <div className="ins-claims__search">
            <input
              type="text"
              placeholder="Search by Claim ID or Policy Number..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button type="button">Search</button>
          </div>

          {/* ── Claims Table ── */}
          <div className="ins-claims__table-wrap">
            <table className="ins-claims__table">
              <thead>
                <tr>
                  <th>Claim ID</th>
                  <th>Policy No.</th>
                  <th>Type</th>
                  <th>Date Filed</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredClaims.length > 0 ? (
                  filteredClaims.map((claim) => (
                    <tr key={claim.id}>
                      <td>{claim.id}</td>
                      <td>{claim.policyNumber}</td>
                      <td>{claim.type}</td>
                      <td>{claim.date}</td>
                      <td>{claim.amount}</td>
                      <td>
                        <span
                          className={`ins-claims__status ${statusClass(
                            claim.status
                          )}`}
                        >
                          {claim.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', color: '#64748B' }}>
                      No claims found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ── File New Claim ── */}
          <div className="ins-claims__file-claim">
            <h3>File a New Claim</h3>
            <p>
              Submit your claim details below. Our team reviews claims within
              24 hours on business days.
            </p>

            <form onSubmit={handleFileClaim}>
              <div className="ins-claims__form-grid">
                <div className="ins-claims__field">
                  <label htmlFor="claim-policy">Policy Number *</label>
                  <input
                    id="claim-policy"
                    type="text"
                    placeholder="e.g. POL-HLT-90234"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                </div>

                <div className="ins-claims__field">
                  <label htmlFor="claim-type">Claim Type</label>
                  <select
                    id="claim-type"
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value)}
                  >
                    <option>Health</option>
                    <option>Life</option>
                    <option>Auto</option>
                    <option>Home</option>
                    <option>Travel</option>
                    <option>Business</option>
                  </select>
                </div>

                <div className="ins-claims__field ins-claims__field--full">
                  <label htmlFor="claim-desc">Description *</label>
                  <textarea
                    id="claim-desc"
                    placeholder="Describe the incident or claim details..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="ins-claims__field">
                  <label htmlFor="claim-amount">Estimated Amount (USD)</label>
                  <input
                    id="claim-amount"
                    type="number"
                    placeholder="e.g. 5000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="ins-claims__field">
                  <label>Supporting Documents</label>
                  <div className="ins-claims__upload">
                    <span className="ins-claims__upload-icon">&#128206;</span>
                    <p className="ins-claims__upload-text">
                      Click to upload or drag files here
                    </p>
                    <p className="ins-claims__upload-hint">
                      PDF, JPG, PNG up to 10MB each
                    </p>
                  </div>
                </div>
              </div>

              <button type="submit" className="ins-claims__submit">
                Submit Claim
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
