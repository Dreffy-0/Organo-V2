import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import { IColaborador } from "../../Shared/Interfaces/IColaborador";

interface TimeProps {
	time: { id: string; nome: string; cor: string };
	colaboradores: IColaborador[];
	aoDeletar: (id: string) => void;
	mudarCor: (cor: string, id: string) => void;
	aoFavoritar: (id: string) => void;
}

const Time = ({
	time,
	colaboradores,
	aoDeletar,
	mudarCor,
	aoFavoritar,
}: TimeProps) => {
	return (
		colaboradores.length > 0 && (
			<section
				className="time"
				style={{
					backgroundImage: "url(/images/fundo.png)",
					backgroundColor: hexToRgba(time.cor, "0.4"),
				}}
			>
				<input
					onChange={evento => mudarCor(evento.target.value, time.id)}
					type="color"
					value={time.cor}
					className="input-color"
				/>
				<h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
				<div className="colaboradores">
					{colaboradores.map((colaborador, indece) => (
						<Colaborador
							key={indece}
							colaborador={colaborador}
							cor={time.cor}
							aoDeletar={aoDeletar}
							aoFavoritar={aoFavoritar}
						/>
					))}
				</div>
			</section>
		)
	);
};

export default Time;
