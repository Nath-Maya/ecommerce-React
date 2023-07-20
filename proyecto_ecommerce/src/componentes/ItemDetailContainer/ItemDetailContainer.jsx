import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

   const [product, setProduct] = useState(null)
   //Obtener el itemId de la URL
   const { productoId } = useParams();

   useEffect(() => {
      getProductById(productoId)
         .then(response => {
            setProduct(response)
         })
         .catch(error => {
            console.error(error)
         })
   }, [productoId])

   return (
      <div className="item-detail-container">
         <ItemDetail {...product}/>
      </div>
   )
}

export default ItemDetailContainer