
import React, { useState } from 'react';
import Send from "../assest/assest/products/bank/money.png"
import Withdraw from "../assest/assest/products/bank/withdraw.jpg"
import Balance from "../assest/assest/products/bank/balance.png"
import Loan from "../assest/assest/products/bank/loan.png"
import MStatement from "../assest/assest/products/bank/mini stat.png"
import LockSaving from "../assest/assest/products/bank/lock.jpeg"


const categories = [
  { name: 'Send', image: Send },
  { name: 'Withdraw', image: Withdraw },
  { name: 'Balance', image: Balance },
  { name: 'Loan', image: Loan },
  { name: 'M-Statement', image: MStatement },
  { name: 'Lock-Saving', image: LockSaving },
];

const HomeTopSelectors = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  return (
    <div style={{marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '27px' }}>
      {categories.map((category, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <div
            style={{
                width: '80px',
                height: "80px",
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e2e8f0',
                cursor: 'pointer'
                
            }}
          >
            <img className='zoom-image' src={category.image} alt={category.name} style={
                { 
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                    backgroundColor: '#e2e8f0',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out'
                }
                } 
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            />
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeTopSelectors;
