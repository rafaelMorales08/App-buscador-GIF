import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (categoires) => {
  
 const [imagenes, setimagenes] = useState([])
 const [isLoading, setisLoading] = useState(true)

    const getImagenes = async () => {

        const newImagenes = await getGifs(categoires);
        setimagenes(newImagenes);
        setisLoading(false);

    }


    useEffect(() => {
        getImagenes();

    }, [])

    return {
        imagenes:imagenes,
        isLoading: isLoading
    }
}
