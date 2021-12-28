const productosCargados =[
{ id : 1 , nombre : "REMERA RELAX" , stock : 5 },
{ id : 2 , nombre : "BUSO BASICO CON CIERRE" , stock : 5 },
{ id : 3 , nombre : "CONJUNTO BE POSITIVE" , stock : 5 }
]

function ItemList () { 
    const promesa = new Promise((res,rej)=>{
        res()
        setTimeout(()=>{
            res(productosCargados)
        },2000)
    })
    

    return (
        <>
        </>
    )
}


 export default ItemList