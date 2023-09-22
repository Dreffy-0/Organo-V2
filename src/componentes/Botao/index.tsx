import "./Botao.css";
import { ReactElement } from "react";

interface BotaoProps {
	children: ReactElement | string;
}

const Botao = (props: BotaoProps) => {
	return <button className="botao">{props.children}</button>;
};

export default Botao;
