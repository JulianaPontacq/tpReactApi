import type { SimpsonsCharacter } from "../types/simpsons";

type Props = {
  items: SimpsonsCharacter[];
};

function Listaitems({ items }: Props) {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.character} />
          <h3>{item.character}</h3>
          <p>"{item.quote}"</p>
        </div>
      ))}
    </div>
  );
}

export default Listaitems;