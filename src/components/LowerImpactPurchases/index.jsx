/* eslint-disable react/button-has-type */
import './styles.scss';
import { useState } from 'react';
import { oneMonth, oneYear } from './data';

const neutralEmoji = (
  <svg style={{ marginTop: '9px' }} width='31' height='31' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path fillRule='evenodd' clipRule='evenodd' d='M5 15.4465C5 9.78561 9.58908 5.19653 15.25 5.19653C20.9109 5.19653 25.5 9.78561 25.5 15.4465C25.5 21.1075 20.9109 25.6965 15.25 25.6965C9.58908 25.6965 5 21.1075 5 15.4465ZM15.25 3.19653C8.48451 3.19653 3 8.68105 3 15.4465C3 22.212 8.48451 27.6965 15.25 27.6965C22.0155 27.6965 27.5 22.212 27.5 15.4465C27.5 8.68105 22.0155 3.19653 15.25 3.19653ZM11.6153 20.1899C11.0667 20.2536 10.5704 19.8605 10.5067 19.3119C10.443 18.7633 10.8361 18.2669 11.3847 18.2032C12.2054 18.1079 13.4377 18.0403 15.25 18.0403C17.0622 18.0403 18.2945 18.1079 19.1153 18.2032C19.6639 18.2669 20.057 18.7633 19.9933 19.3119C19.9296 19.8605 19.4332 20.2536 18.8846 20.1899C18.1702 20.1069 17.0225 20.0403 15.25 20.0403C13.4775 20.0403 12.3297 20.1069 11.6153 20.1899ZM10.5 12.9465C10.5 12.3942 10.9477 11.9465 11.5 11.9465H11.5112C12.0634 11.9465 12.5112 12.3942 12.5112 12.9465C12.5112 13.4988 12.0634 13.9465 11.5112 13.9465H11.5C10.9477 13.9465 10.5 13.4988 10.5 12.9465ZM19 11.9465C18.4477 11.9465 18 12.3942 18 12.9465C18 13.4988 18.4477 13.9465 19 13.9465H19.0112C19.5634 13.9465 20.0112 13.4988 20.0112 12.9465C20.0112 12.3942 19.5634 11.9465 19.0112 11.9465H19Z' fill='#FF9800' />
  </svg>

);

const negativeEmoji = (
  <svg style={{ marginTop: '9px' }} width='31' height='31' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path fillRule='evenodd' clipRule='evenodd' d='M5 15.3896C5 9.72873 9.58908 5.13965 15.25 5.13965C20.9109 5.13965 25.5 9.72873 25.5 15.3896C25.5 21.0506 20.9109 25.6396 15.25 25.6396C9.58908 25.6396 5 21.0506 5 15.3896ZM15.25 3.13965C8.48451 3.13965 3 8.62416 3 15.3896C3 22.1551 8.48451 27.6396 15.25 27.6396C22.0155 27.6396 27.5 22.1551 27.5 15.3896C27.5 8.62416 22.0155 3.13965 15.25 3.13965ZM12.2568 19.7933C11.8958 20.2113 11.2643 20.2574 10.8464 19.8965C10.4284 19.5355 10.3822 18.904 10.7432 18.486C11.7061 17.3711 13.1753 16.5816 15.25 16.5816C17.3247 16.5816 18.7939 17.3711 19.7568 18.486C20.1178 18.904 20.0716 19.5355 19.6536 19.8965C19.2356 20.2574 18.6042 20.2113 18.2432 19.7933C17.6709 19.1307 16.76 18.5816 15.25 18.5816C13.7399 18.5816 12.8291 19.1307 12.2568 19.7933ZM10.5 12.8896C10.5 12.3374 10.9477 11.8896 11.5 11.8896H11.5112C12.0634 11.8896 12.5112 12.3374 12.5112 12.8896C12.5112 13.4419 12.0634 13.8896 11.5112 13.8896H11.5C10.9477 13.8896 10.5 13.4419 10.5 12.8896ZM19 11.8896C18.4477 11.8896 18 12.3374 18 12.8896C18 13.4419 18.4477 13.8896 19 13.8896H19.0112C19.5634 13.8896 20.0112 13.4419 20.0112 12.8896C20.0112 12.3374 19.5634 11.8896 19.0112 11.8896H19Z' fill='#FF0D25' />
  </svg>
);

const displayData = purchase => (
  <div className='list-container ' key={purchase._id}>
    {(() => { if (purchase.company.rating === 'neutral') { return neutralEmoji; } if (purchase.company.rating === 'negative') { return negativeEmoji; } })() }
    <p className='list-item'>
      {purchase.company.companyName}
    </p>
    <p className='total-spent'>
      $
      {(Math.round(purchase.totalSpent * 100) / 100).toFixed(2)}
    </p>
    <button id='go-to' onClick={() => window.open(purchase.company.url)}> &gt;</button>
  </div>
);

export const LowerImpactPurchases = () => {
  const [switchMonthToYear, setSwitchMonthToYear] = useState(true);
  return (
    <div className='lower-impact-purchases section'>
      <h2>Lower Impact Purchases</h2>
      <p>
        {`There are ${oneMonth.length} lower impact companies in the las month and ${oneYear.length} lower impact companies in the past 12 months.`}
      </p>
      <div className='time-period'>
        <button onClick={() => setSwitchMonthToYear(true)} className={switchMonthToYear ? 'month-year-selected' : 'month-year'}>One Month</button>
        <button onClick={() => setSwitchMonthToYear(false)} className={switchMonthToYear ? 'month-year' : 'month-year-selected'}>One Year</button>

      </div>

      {switchMonthToYear ? oneMonth.map(displayData) : oneYear.map(displayData)}
    </div>
  );
};
