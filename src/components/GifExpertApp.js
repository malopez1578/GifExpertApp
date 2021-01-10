import React, { useState } from 'react';

export const GifExpertApp = () => {
    const [Categories, SetCategories] = useState(['One Punch', 'Samurai X', 'Inuyasha'])


    function handleClick() {
        SetCategories([...Categories, 'Naruto'])
        console.log(Categories)
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <button onClick={handleClick}>Add Categorie</button>
            <ul>
                {
                    Categories.map((categorie, idx) => {
                       return <li key={categorie}>{categorie}</li>
                    })
                }
            </ul>
        </>
    )
}