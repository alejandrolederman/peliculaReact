import { useState } from 'react';
import PageWrapper from './PagePageWrapper';
import Paginacion from './paginacion';
import Pelicula from './pelicula';
import peliculasJson from '../peliculas.json';

function ListadoPeliculas() {

	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_PAGUINAS = 7;
	let peliculas = peliculasJson;

	const getTotalPaginas = () => {
		let cantitdadTotalDePeliculas = peliculasJson.length;
		return Math.ceil(cantitdadTotalDePeliculas / TOTAL_PAGUINAS);
	};

	let peliculasPorPagina = peliculas.slice(
		(paginaActual - 1) * TOTAL_PAGUINAS,
		paginaActual * TOTAL_PAGUINAS
	);	
	
	return (

		<PageWrapper>

			{peliculasPorPagina.map(pelicula =>

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

export default ListadoPeliculas;