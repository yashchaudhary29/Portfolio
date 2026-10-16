import React from 'react';
import "./Stats.css";

const Stats = () => {
  return (
    <section id="stats">
      <h2>Coding Excellence</h2>
      <div className="stats-container">
        <div className="stat-card codeforces-api">
            <a href="https://codeforces.com/profile/yash2404/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://codeforces-readme-stats.vercel.app/api/card?username=yash2404&theme=dark" 
              alt="Yash Codeforces Stats" 
            />
          </a>
        </div>

        <div className="stat-card leetcode-api">
          <a href="https://leetcode.com/u/yash2404/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://leetcard.jacoblin.cool/yash2404?theme=dark&font=Inter" 
              alt="Yash LeetCode Stats" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;