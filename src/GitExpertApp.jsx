
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {


    const [categoires, setCategories] = useState(['Goku']);

    const onAddCategory = (newCategory) => {

        if (categoires.includes(newCategory)) return;
        // console.log(newCategory)
        setCategories([newCategory, ...categoires]);
    }


    return (
        <>

            {/* titulo */}
            <h1>GifExpert APP</h1>

            {/* input */}
            <AddCategory
                onNewBusqueda={onAddCategory}
            />

            {/* listado de gif */}

            {
                categoires.map((categoires) =>
                (
                    <GifGrid
                        key={categoires}
                        categoires={categoires} />
                ))
            }

        </>
    )
}
