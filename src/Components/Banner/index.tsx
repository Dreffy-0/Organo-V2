import "./Banner.css";

interface BannerProps {
	image: string
	textoAlternativo?: string
}

const Banner = ({image, textoAlternativo} : BannerProps) => {
	// JSX
	return (
		<header className="banner">
			<img
				src={image}
				alt={textoAlternativo}
			/>
		</header>
	);
};

export default Banner;
