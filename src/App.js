import './App.css';
import { useState } from 'react';
import PageWrapper from './PagePageWrapper';
import Paginacion from './paginacion';
import Pelicula from './pelicula';
import peliculasJson from './peliculas.json';

function App() {

	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_PAGUINAS = 7;


	let peliculas = peliculasJson;

	// const buscarPeliculas = async () => {
	// 	let url = "https://lucasmoy.dev/data/react/peliculas.json";

	// 	let respuesta = await fetch(url, {
	// 		"method": "GET",
	// 		"mode": "no-cors",
	// 		"headers": {
	// 			"Accept": "application/json",
	// 			"contet-Type": "aplication/json"
	// 		}
	// 	});

	// 	let json = await respuesta.json();

	// 	alert(json)
	// };

	// buscarPeliculas();

	const getTotalPaginas = () => {
		let cantitdadTotalDePeliculas = peliculasJson.length;
		return Math.ceil(cantitdadTotalDePeliculas / TOTAL_PAGUINAS);
	};

	const cargaPelicula = () => {

		peliculas = peliculas.slice(
			(paginaActual - 1) * TOTAL_PAGUINAS,
			paginaActual * TOTAL_PAGUINAS
		);
	};

	cargaPelicula();

	return (

		<PageWrapper>

			{peliculas.map(pelicula =>

				<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director}
					actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}	>

					{pelicula.descripcion}

				</Pelicula>

			)}

			<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
				setPaginaActual(pagina)

			}} />

		</PageWrapper>

	);
}

export default App;
