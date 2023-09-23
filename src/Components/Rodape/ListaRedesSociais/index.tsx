import "./ListaRedesSociais.css";

const ListaRedesSociais = () => {
	return (
		<ul className="lista-redes-sociais">
			<li>
				<a href="#">
					<img src="./images/fb.png" alt="facebook" />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="./images/tw.png" alt="twitter" />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="./images/ig.png" alt="instagram" />
				</a>
			</li>
		</ul>
	);
};

export default ListaRedesSociais;
