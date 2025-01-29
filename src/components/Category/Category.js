import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router";


const Category = () => {
    const { categoryId } = useParams(); // Извлекаем параметр из URL
    const [category, setCategory] = useState(null);
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/category/${categoryId}`)
            .then((response) => response.json())
            .then((data) => {
                setCategory(data)
            })
            .catch((error) => console.error("Error fetching recipes:", error));

        fetch(`http://localhost:8000/api/recipe/?category=${categoryId}`)
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data)
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    }, [categoryId]);

    return (
        <>
            Category/
            {
                category ?
                    <b>{category.name}</b>
                    : <b>loading...</b>
            }
            {
                recipes ?
                    recipes.map(recipe => <div key={recipe.id}><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></div>)

                    : <h1>loading...</h1>
            }
        </>
    )
}

export default Category;
