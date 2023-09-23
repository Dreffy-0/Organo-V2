import ListaRedesSociais from "./ListaRedesSociais";
import TextoRodape from "./TextoRodape";
import "./Rodape.css";

const Rodape = () => {
	return (
		<footer className="rodape">
			<ListaRedesSociais />
			<img src="/images/logo.png" alt="Logo do Organo" />
			<TextoRodape />
		</footer>
	);
};

export default Rodape;
