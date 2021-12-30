import CardWidget from "./CardWidget";

function NavBar () {
    return (
        <>
         <CardWidget/>
    <h1>Despierta Que Amanece</h1>
	<nav class="navbar navbar-expand-lg container align-self-center navbar-expand-md navbar-light">
		<a class="align-self-start m-4" href="index.html" target=""><img src="media/logo.gif" width="200px" height="120px"/></a>
		<img src="media/three-dots-vertical.svg" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"/>
		<div class="flexContainer__nav m-5 collapse navbar-collapse align-self-center" id="navbarNav">						
			<ul class="flexContainer__nav navbar-nav">
				<li class="nav-item ">
					<a class="nav-link active" href="colecciones.html">COLECCIONES</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="como_comprar.html">COMO COMPRAR</a>
				</li>
        <li class="nav-item">
					<a class="nav-link" href="talles.html">TALLES</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="contacto.html">CONTACTO</a>
				</li>
			</ul>
    </div>
    <div class="header__icon">
      <a href= "colecciones.html#carroDeCompras"><img src="media/carrito_2.svg" width="65px" height="65px"/></a>
    </div>
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