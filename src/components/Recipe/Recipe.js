import React, {Component, useEffect, useState} from "react";
import {useParams} from "react-router";


const Recipe = () => {
    const { recipeId } = useParams(); // Извлекаем параметр из URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/recipe/${recipeId}`)
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data)
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    }, [recipeId]);


    return (
        <>
            recipe/
            {
                recipe ?
                    <>
                        <h4>Название: {recipe.title}</h4>
                        <p><b>Рецепт:</b><br/>{recipe.description}</p>
                        <span>Создано: {recipe.created_at}</span>
                    </>
                    : <h1>loading...</h1>
            }
        </>
    )
}

export default Recipe;