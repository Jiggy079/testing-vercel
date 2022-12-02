function Figure({imgUrl, currentFigureIndex}) {
	return (
		<div className="Figure">
			<img src={imgUrl} alt={"Figure"}/>
			<p id={"figure-label"}>Figure {currentFigureIndex + 1}</p>
		</div>
	);
}

export default Figure;