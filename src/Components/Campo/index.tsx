import "./Campo.css";

interface CampoProps {
	aoAlterado: (valor: string) => void;
	label: string;
	placeholder: string;
	valor: string;
	obrigatorio?: boolean;
	type?: "text" | "password" | "date" | "number" | "color";
}

const Campo = ({
	type = "text",
	label,
	placeholder,
	valor,
	aoAlterado,
	obrigatorio = false,
}: CampoProps) => {
	const placeholderModidificada = `${placeholder}...`;

	const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
		aoAlterado(evento.target.value);
	};

	return (
		<div className={`campo campo-${type}`}>
			<label>{label}</label>
			<input
				type={type}
				value={valor}
				onChange={aoDigitado}
				required={obrigatorio}
				placeholder={placeholderModidificada}
			/>
		</div>
	);
};

export default Campo;
