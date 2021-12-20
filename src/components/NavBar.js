import CardWidget from "./CardWidget";

function NavBar () {
    return (
        <>
         <CardWidget/>
    <h1>Despierta Que Amanece</h1>
            <nav className="navbar__st">
                <ul>
                <li>
                <a href="#">INICIO </a>
                </li>
                <li>
                <a href="#"> COLECCIONES</a>
                </li>
                </ul>
            </nav>
            <div className="container d-flex">
		<div id="carouselExampleFade" class="carousel mt-5 mb-5" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active" >
					<img src="/media/foto1.png" class="d-flex" alt="imgg1"/>
				</div>
				<div className="carousel-item">
					<img src="/media/foto2.png" class="d-flex" alt="imgg2"/>
				</div>
				<div className="carousel-item">
					<img src="/media/foto3.png" class="d-flex" alt="imgg3"/>
				</div>
			</div>
		</div>
	</div>
            <div class="sabiasQue">
		<p>¿Sabías qué?... 
		🌈 El algodón es una fibra textil vegetal que crece alrededor de las semillas de la planta del algodón, que es un arbusto!!…👉 El algodón es la fibra natural más importante que se produce en el mundo!!….
		✔️ Todo ésto, para contarte que.. Nuestras prendas están hechas de algodón y lycra!!🌼</p>
	</div>
        </>
    )
}
 export default NavBar