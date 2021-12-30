import ItemCount from "./ItemCount" 
import ItemList from "./ItemList" 
import ItemDetail from "./ItemDetail" 

function ItemlistContainer () {
    return (
        <>
        <h2 className="text-center">CATALOGO DE PRODUCTOS</h2>
        <ItemList/>
        <ItemCount initial = {0} stock = {10} />
        <ItemDetail/>
        </>
    )
}


 export default ItemlistContainer
