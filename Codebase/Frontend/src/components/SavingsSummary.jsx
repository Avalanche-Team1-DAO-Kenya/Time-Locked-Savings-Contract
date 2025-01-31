import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/formatCurrency';

export default function SavingsSummary({ balance, penalties }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="text-center">
        <p className="text-gray-500 dark:text-gray-400">Total Savings</p>
        <p className="text-2xl font-bold">{formatCurrency(balance)}</p>
      </div>
      <div className="text-center">
        <p className="text-gray-500 dark:text-gray-400">Total Penalties</p>
        <p className="text-2xl font-bold text-red-600">{formatCurrency(penalties)}</p>
      </div>
    </div>
  );
}

SavingsSummary.propTypes = {
  balance: PropTypes.bigint.isRequired,
  penalties: PropTypes.bigint.isRequired
};