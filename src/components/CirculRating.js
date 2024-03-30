import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ rating }) => {
    // Determine color based on rating
    let colorClass;
    if (rating < 5) {
      colorClass = 'text-red-600';
    } else if (rating >= 5 && rating < 7) {
      colorClass = 'text-orange-400';
    } else {
      colorClass = 'text-green-500';
    }
  
    // Calculate progress percentage
    const progress = (rating / 10) * 100;
  
    return (
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 36 36" className="absolute w-full h-full">
          <path
            className="text-gray-200 stroke-current"
            fill="none"
            strokeWidth="3"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`${colorClass} stroke-current`}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          {rating}
        </div>
      </div>
    );
  };
  
  export default CircularProgress;
