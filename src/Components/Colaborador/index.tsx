import { IColaborador } from "../../Shared/Interfaces/IColaborador";
import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps {
	colaborador: IColaborador;
	cor: string;
	aoDeletar: (id: string) => void;
	aoFavoritar: (favorito: string) => void;
}

const Colaborador = ({
	colaborador,
	cor,
	aoDeletar,
	aoFavoritar,
}: ColaboradorProps) => {
	function favoritar() {
		aoFavoritar(colaborador.id);
	}
	const propsFavorito = {
		size: 25,
		onClick: favoritar,
	};

	return (
		<div className="colaborador">
			<AiFillCloseCircle
				size={25}
				className="deletar"
				onClick={() => aoDeletar(colaborador.id)}
			/>
			<div className="cabecalho" style={{ backgroundColor: cor }}>
				<img src={colaborador.image} alt={colaborador.nome} />
			</div>
			<div className="card-rodape">
				<h4>{colaborador.nome}</h4>
				<h5>{colaborador.cargo}</h5>
				<h5>{colaborador.data}</h5>
				<div className="favoritar">
					{colaborador.favorito ? (
						<AiFillHeart {...propsFavorito} color="#FF0000" />
					) : (
						<AiOutlineHeart {...propsFavorito} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Colaborador;
