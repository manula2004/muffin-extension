import DealCard from './DealCard';

function DealList({ deals }) {
  return (
    <div>
      {deals.map((deal, index) => (
        <DealCard key={index} deal={deal} />
      ))}
    </div>
  );
}

export default DealList;
