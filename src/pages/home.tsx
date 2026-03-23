import { useEffect, useState } from "react";

// Defino el tipo de datos que voy a usar
type Character = {
  name: string;
  gender?: string; // opcional (puede no venir)
  occupation?: string; // opcional
};

function Home() {
  // Estado donde guardo los datos de la API
  const [data, setData] = useState<Character[]>([]);

  // Estado para saber si está cargando
  const [loading, setLoading] = useState(false);

  // Estado del buscador
  const [searchTerm, setSearchTerm] = useState("");

  // Se ejecuta cuando el componente se carga
  useEffect(() => {
    setLoading(true); // activa "cargando..."

    fetch("https://api.sampleapis.com/simpsons/characters")
      .then((res) => res.json())
      .then((data) => {
        // Lista de personajes válidos (para evitar que aparezcan nombres raros)
        const nombresValidos = [
          "Homer Simpson",
          "Marge Simpson",
          "Bart Simpson",
          "Lisa Simpson",
          "Maggie Simpson",
          "Ned Flanders",
          "Mr. Burns",
          "Milhouse Van Houten",
          "Chief Wiggum",
          "Ralph Wiggum"
        ];

        // Filtra solo los personajes conocidos
        const filtrados = data.filter((item: Character) =>
          nombresValidos.includes(item.name)
        );

        setData(filtrados); // guarda los datos
        setLoading(false); // deja de cargar
      })
      .catch(() => {
        setLoading(false); // si hay error, igual deja de cargar
      });
  }, []);

  // Filtra los resultados según lo que escribe el usuario
  const resultados = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>personajes</h1>

      {/* Input del buscador */}
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // actualiza el estado
      />

      {/* Si está cargando, muestra el mensaje */}
      {loading ? (
        <p>cargando...</p>
      ) : (
        // Si no, muestra los resultados filtrados
        resultados.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>

            {/* Muestra datos adicionales */}
            <p>Género: {item.gender || "No disponible"}</p>
            <p>Ocupación: {item.occupation || "No disponible"}</p>

            {/* Imagen fija para evitar errores de la API */}
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
              width="120"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;