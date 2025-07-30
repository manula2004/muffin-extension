function DealCard({ deal }) {
  return (
    <div style={{
      background: '#f0f0f0',
      marginBottom: 10,
      padding: 10,
      borderRadius: 5
    }}>
      <strong>{deal.site}</strong>
      <p>Price: Rs. {deal.price}</p>
      <p>Sales: {deal.sales}</p>
      <a href={deal.link} target="_blank" rel="noopener noreferrer">View Deal</a>
    </div>
  );
}

export default DealCard;
