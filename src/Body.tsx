import React from 'react';

interface BodyProps {
  section: string;
}

const Body: React.FC<BodyProps> = ({ section }) => {
  const getBackgroundColor = (section: string) => {
    switch (section) {
      case 'about':
        return '#f1c40f'; // Yellow
      case 'projects':
        return '#3498db'; // Blue
      case 'other':
        return '#e74c3c'; // Red
      default:
        return '#ffffff'; // Default white
    }
  };

  const getSectionText = (section: string) => {
    switch (section) {
      case 'about':
        return 'About Me';
      case 'projects':
        return 'Projects';
      case 'other':
        return 'Other';
      default:
        return 'Unknown';
    }
  };

  return (
    <div
      className="body"
      style={{ backgroundColor: getBackgroundColor(section) }}
    >
      <h1>{getSectionText(section)}</h1>
      {/* Content of the body component */}
    </div>
  );
};

export default Body;
