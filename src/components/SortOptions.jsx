function SortOptions({ sortBy, setSortBy }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label>Sort by: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="sales">Number of Sales</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}

export default SortOptions;
