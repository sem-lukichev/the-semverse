import React from 'react';
import './Header.css'; // Import the CSS file for styling

interface HeaderProps {
  onNavButtonClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavButtonClick }) => {
  return (
    <header>
      <nav className="horizontal-nav"> {/* Add CSS class for horizontal layout */}
        <ul className="header-buttons">
          <li>
            <button onClick={() => onNavButtonClick('about')}>About Me</button>
          </li>
          <li>
            <button onClick={() => onNavButtonClick('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => onNavButtonClick('other')}>Other</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
