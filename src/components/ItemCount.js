import {useEffect, useState} from "react"


function ItemCount ({ stock,initial}) {    
    const [contador,setContador] = useState(initial)
    
    useEffect(() =>{
        console.log("useeffect")
    })

    const contadorIncrease = () =>{
        if (contador < stock){
        setContador (contador + 1);
    }
}
    const contadorDecrease = () =>{
        if (contador > 0){
        setContador (contador - 1);}
    }

    const onnAdd = () =>{
        setContador (initial);
    } 

    return (
    <>
    <div className="contador">
    <p>Stock Disponible = {stock}</p>
    <p>Contador = {contador}</p>
    <button onClick = {contadorIncrease} type="button" className="btn btn-outline-success">+</button>
    <button onClick = {contadorDecrease} type="button" className="btn btn-outline-danger">-</button>
    <button onClick = {onnAdd} type="button" class="btn btn-outline-dark">Confirmar</button>
    </div>
    </>
    )
}
 export default ItemCount