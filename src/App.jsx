import React, { useState } from 'react';
import Header from './components/Header';
import OptionsPanel from './components/OptionsPanel';
import SortOptions from './components/SortOptions';
import DealList from './components/DealList';

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [showResults, setShowResults] = useState(false);
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
    setShowResults(true);
    setShowOptions(false);
  };

  const handleSaveSettings = (newSettings) => {
    setSettings(newSettings);
    setShowOptions(false);
  };

  const sortedDeals = [...deals].sort((a, b) => {
    return sortBy === "sales" ? b.sales - a.sales : a.price - b.price;
  });

  return (
    <div style={{ width: 300, padding: 15, fontFamily: 'Arial, sans-serif' }}>
      <Header />
      
      {!showResults && (
        <>
          <button onClick={handleFindDeals}>Find Deal</button>
          <button onClick={() => setShowOptions(!showOptions)} style={{ marginTop: 10, fontSize: '12px' }}>
            Options
          </button>
          {showOptions && (
            <OptionsPanel
              currentSettings={settings}
              onSave={handleSaveSettings}
            />
          )}
        </>
      )}

      {showResults && (
        <>
          <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
          <DealList deals={sortedDeals} />
        </>
      )}
    </div>
  );
}

export default App;
