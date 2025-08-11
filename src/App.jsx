import './style.css';
import muffinLogo from './assets/muffin_logo.png';
import React, { useState } from 'react';
import OptionsPanel from './components/OptionsPanel';
import SortOptions from './components/SortOptions';
import DealList from './components/DealList';

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    includeSecondHand: false,
    localOnly: true
  });
  const [sortBy, setSortBy] = useState("sales");

  const [deals, setDeals] = useState([
    { site: "Daraz", price: 3200, sales: 100, link: "#" },
    { site: "MyDeal.lk", price: 2950, sales: 200, link: "#" },
    { site: "AliExpress", price: 2700, sales: 50, link: "#" },
  ]);

  const handleFindDeals = () => {
    setShowOptions(false);
    setIsLoading(true);
    // Simulate backend call with a 2-second delay
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  const handleSaveSettings = (newSettings) => {
    setSettings(newSettings);
    setShowOptions(false);
  };

  const sortedDeals = [...deals].sort((a, b) => {
    return sortBy === "sales" ? b.sales - a.sales : a.price - b.price;
  });

  return (
    <div className="app-container">
      <div className="card">
        <div className="logo-container">
          <img src={muffinLogo} alt="Muffin Logo" className="logo" />
          {isLoading && (
            <svg className="smoke-svg" width="60" height="50" viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg">
              <path
                className="smoke-line smoke1"
                d="M20 40 Q22 30 20 20 Q18 10 20 0"
                fill="none"
                stroke="#6a0dad"
                strokeWidth="1.5"
              />
              <path
                className="smoke-line smoke2"
                d="M30 40 Q32 30 30 20 Q28 10 30 0"
                fill="none"
                stroke="#6a0dad"
                strokeWidth="1.5"
              />
              <path
                className="smoke-line smoke3"
                d="M40 40 Q42 30 40 20 Q38 10 40 0"
                fill="none"
                stroke="#6a0dad"
                strokeWidth="1.5"
              />
            </svg>
          )}
          <h1 className="header-title">Muffins</h1>
        </div>

        {!showResults && !isLoading && (
          <>
            <button className="find-button" onClick={handleFindDeals}>Find Deals</button>
            <button
              className="options-link"
              onClick={() => setShowOptions(!showOptions)}
            >
              More Options
            </button>
            {showOptions && (
              <OptionsPanel
                currentSettings={settings}
                onSave={handleSaveSettings}
              />
            )}
          </>
        )}

        {isLoading && <p className="loading-text">Searching for deals...</p>}

        {showResults && (
          <>
            <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
            <DealList deals={sortedDeals} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;