import React from 'react';

import 'Button.scss';

const Button = ({ text }) => {
	return (
		<button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 60">
            <defs>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#3E0713", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#7D0000", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <image width="236" height="70" href="1-1.png" />
            <text
              x="50%"
              y="55%"
              dominant-baseline="middle"
              fill="url(#textGradient) white"
              text-anchor="middle"
              font-size="20"
            >
              { text }
            </text>
          </svg>
        </button>
	);
};

export default Button;