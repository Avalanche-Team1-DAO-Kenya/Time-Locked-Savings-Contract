import { formatCurrency } from '../utils/formatCurrency';
import { formatDate } from '../utils/formatDate';
import PropTypes from 'prop-types';

TransactionHistory.propTypes = {
  deposits: PropTypes.array.isRequired,
};

export default function TransactionHistory({ deposits }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
      <div className="space-y-2">
        {deposits.map((deposit, index) => (
          <div 
            key={index}
            className="p-3 border rounded dark:border-gray-700"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{deposit.reason}</p>
                <p className="text-sm text-gray-500">{formatDate(deposit.maturityDate)}</p>
              </div>
              <div className={`text-right ${deposit.withdrawn ? 'text-green-600' : ''}`}>
                <p>{formatCurrency(deposit.amount)} ETH</p>
                {deposit.withdrawn && (
                  <span className="text-xs text-green-500">Withdrawn</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}