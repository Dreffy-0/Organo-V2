import { useState } from "react";
import Banner from "./Components/Banner";
import Formulario from "./Components/Formulario";
import Time from "./Components/Time";
import Rodape from "./Components/Rodape";

import { v4 as uuidv4 } from "uuid";
import { IColaborador } from "./Shared/Interfaces/IColaborador";

function App() {
	const [times, setTimes] = useState([
		{
			id: uuidv4(),
			nome: "Programação",
			cor: "#57C278",
		},
		{
			id: uuidv4(),
			nome: "Front-end",
			cor: "#82CFFA",
		},
		{
			id: uuidv4(),
			nome: "Data Science",
			cor: "#A6D157",
		},
		{
			id: uuidv4(),
			nome: "DevOps",
			cor: "#E06B69",
		},
		{
			id: uuidv4(),
			nome: "UX e Design",
			cor: "#DB6EBF",
		},
		{
			id: uuidv4(),
			nome: "Mobile",
			cor: "#FFBA05",
		},
		{
			id: uuidv4(),
			nome: "Inovação e Gestão",
			cor: "#FF8A29",
		},
	]);

	const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

	const NovoColaboradorCadastrado = (colaborador: IColaborador) => {
		setColaboradores([...colaboradores, colaborador]);
	};

	function cadastrarTime(novoTime: {
		id: string | undefined;
		nome: string;
		cor: string;
	}) {
		setTimes([...times, { ...novoTime, id: uuidv4() }]);
	}

	function deletarColaborador(id: string) {
		setColaboradores(
			colaboradores.filter(colaborador => colaborador.id !== id),
		);
	}

	function mudarCorTime(cor: string, id: string) {
		setTimes(
			times.map(time => {
				if (time.id === id) {
					time.cor = cor;
				}
				return time;
			}),
		);
	}

	function alternarFavorito(id: string) {
		setColaboradores(
			colaboradores.map(colaborador => {
				if (colaborador.id === id)
					colaborador.favorito = !colaborador.favorito;
				return colaborador;
			}),
		);
	}

	return (
		<div className="App">
			<Banner
				image="/images/banner.png"
				textoAlternativo="O banner principal da página do Organo"
			/>
			<Formulario
				times={times.map(time => time.nome)}
				aoCadastrar={colaborador =>
					NovoColaboradorCadastrado(colaborador)
				}
				cadastrarTime={cadastrarTime}
			/>

			<section className="times">
				<h1>Minha organização.</h1>
				{times.map((time, indice) => (
					<Time
						key={indice}
						time={time}
						mudarCor={mudarCorTime}
						colaboradores={colaboradores.filter(
							colaborador => colaborador.time === time.nome,
						)}
						aoDeletar={deletarColaborador}
						aoFavoritar={alternarFavorito}
					/>
				))}
			</section>
			<Rodape />
		</div>
	);
}

export default App;
