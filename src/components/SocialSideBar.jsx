import React from 'react';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a 
        href="https://github.com/yashchaudhary29" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a 
        href="https://www.linkedin.com/in/yash-chaudhary-1a633233b/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a 
        href="https://x.com/yash___2404" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Twitter"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a 
        href="https://fiverr.com/users/dev_yash24" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Fiverr"
      >
        <i class="fa-brands fa-fonticons-fi"></i>
      </a>

      {/* Connecting Vertical Line */}
      <div className="sidebar-line"></div>
    </div>
  );
};

export default SocialSidebar;