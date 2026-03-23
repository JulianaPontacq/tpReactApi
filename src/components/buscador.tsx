type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

function Buscador({ setSearchTerm }: Props) {
  return (
    <input
      type="text"
      placeholder="buscar..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Buscador;