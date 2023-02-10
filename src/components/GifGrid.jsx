
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categoires }) => {

    const {imagenes, isLoading} = useFetchGifs(categoires);
    return (
        <>
            <h3>{categoires}</h3>
            {
                isLoading && (<h2>cargando...</h2>)
               
            }
            <div className="card-grid">
                {
                    imagenes.map((image) => (
                       <GifItem 
                       key={image.id} 
                       {...image}
                       
                       />
                    ))
                }


            </div>

        </>
    )
}
