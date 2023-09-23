import { useState } from "react";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { IColaborador } from "../../Shared/Interfaces/IColaborador";

interface FormularioProps {
	aoCadastrar: (colaborar: IColaborador) => void;
	times: string[];
	cadastrarTime: (time: { id: string; nome: string; cor: string }) => void;
}

const Formulario = ({ aoCadastrar, times, cadastrarTime }: FormularioProps) => {
	const id = uuidv4();
	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [image, setImage] = useState("");
	const [data, setData] = useState("");
	const [time, setTime] = useState("");
	const [nomeTime, setNomeTime] = useState("");
	const [corTime, setCorTime] = useState("#000000");

	const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		aoCadastrar({
			id,
			favorito: false,
			nome,
			cargo,
			image,
			time,
			data,
		});
		setNome("");
		setCargo("");
		setImage("");
		setData("");
		setTime("");
	};

	return (
		<section className="formulario-container">
			<form className="formulario" onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar um card do colaborador.</h2>
				<Campo
					obrigatorio={true}
					label="Nome"
					placeholder="Digite o seu nome"
					valor={nome}
					aoAlterado={valor => setNome(valor)}
				/>

				<Campo
					obrigatorio={true}
					label="Cargo"
					placeholder="Digite o seu cargo"
					valor={cargo}
					aoAlterado={valor => setCargo(valor)}
				/>

				<Campo
					label="Imagem"
					placeholder="Informe o endereço da imagem"
					valor={image}
					aoAlterado={valor => setImage(valor)}
				/>
				<Campo
					label="Data de entrada no time"
					placeholder=""
					valor={data}
					aoAlterado={valor => setData(valor)}
					type="date"
				/>

				<ListaSuspensa
					obrigatorio={true}
					label="Times"
					itens={times}
					valor={time}
					aoAlterado={valor => setTime(valor)}
				/>

				<Botao>Criar Card</Botao>
			</form>
			<form
				className="formulario"
				onSubmit={evento => {
					evento.preventDefault();
					cadastrarTime({ id: id, nome: nomeTime, cor: corTime });
				}}
			>
				<h2>Preencha os dados para criar um time.</h2>

				<Campo
					obrigatorio
					label="Nome"
					placeholder="Digite o nome do time"
					valor={nomeTime}
					aoAlterado={valor => setNomeTime(valor)}
				/>

				<Campo
					obrigatorio
					label="Cor"
					type="color"
					placeholder="Escolha a cor do time"
					valor={corTime}
					aoAlterado={valor => setCorTime(valor)}
				/>

				<Botao>Criar um novo time</Botao>
			</form>
		</section>
	);
};

export default Formulario;
