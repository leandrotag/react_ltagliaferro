


function Item () {
    return (
        <>
        <h2 className="text-center">PRODUCTOS</h2>
        <div className="colecciones">
        <div class="card items">
            <img src="media/remera_relax.png" class="card-img-top" alt="REMERA RELAX"/>
            <div class="card-body">
              <p class="card-text">REMERA RELAX</p>
              <a href="#" class="boton-carrito btn btn-primary"data-id="1">VER DETALLES</a>
            </div>
          </div>
          <div class="card items" >
            <img src="media/buso_basica_con_cierre.png" class="card-img-top" alt="BUSO BASICO CON CIERRE"/>
            <div class="card-body">
                  <p class="card-text text-center">BUSO BASICO CON CIERRE</p>
              <a href="#" class="boton-carrito btn btn-primary text-align-center" data-id="2">VER DETALLES</a>
            </div>
          </div>
          <div class="card items">
            <img src="media/conjunto_be_positive.png" class="card-img-top" alt="CONJUNTO BE POSITIVE"/>
            <div class="card-body">
              <p class="card-text">CONJUNTO BE POSITIVE</p>
              <a href="#" class="boton-carrito btn btn-primary" data-id="3">VER DETALLES</a>
            </div>
        </div>
        <div class="card items">
            <img src="media/buso_trekking.png" class="card-img-top" alt="BUSO TREKKING"/>
            <div class="card-body">
              <p class="card-text">BUSO TREKKING</p>         
               <a href="#" class="boton-carrito btn btn-primary"data-id="4">VER DETALLES</a>
            </div>
          </div>
          <div class="card items" >
            <img src="media/buso_canguro_basico.png" class="card-img-top" alt="BUSO CANGURO BASICO"/>
            <div class="card-body">
              <p class="card-text">BUSO CANGURO BASICO</p>        
               <a href="#" class="boton-carrito btn btn-primary"data-id="5">VER DETALLES</a>
            </div>
          </div>
          <div class="card items">
            <img src="media/calza_lycra_negra.png" class="card-img-top" alt="CALZA LYCRA NEGRA"/>
            <div class="card-body col mb-4">
              <p class="card-text">CALZA LYCRA NEGRA</p>     
                     <a href="#" class="boton-carrito btn btn-primary" data-id="6">VER DETALLES</a>
            </div>
          </div>
        </div>
        </>
    )}

 export default Item
