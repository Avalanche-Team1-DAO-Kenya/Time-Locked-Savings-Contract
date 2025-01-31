import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';
import { formatDate } from '../utils/formatDate';
import { ethers } from 'ethers';

import PropTypes from 'prop-types';

SavingsGraph.propTypes = {
  deposits: PropTypes.array.isRequired,
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export default function SavingsGraph({ deposits }) {
  const data = {
    labels: deposits.map(d => formatDate(d.maturityDate)),
    datasets: [{
      label: 'Deposit Amount (ETH)',
      data: deposits.map(d => ethers.formatEther(d.amount)),
      borderColor: '#3b82f6',
      tension: 0.1
    }]
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Savings Timeline</h3>
      <div className="h-64">
        <Line data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}