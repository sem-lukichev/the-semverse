import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('about');

  const handleNavButtonClick = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <Header onNavButtonClick={handleNavButtonClick} />
      <Body section={currentSection} />
      {/* Your other content */}
    </div>
  );
};

export default App;
