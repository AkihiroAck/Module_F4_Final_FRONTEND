import React, {Component} from "react";
import {Routes, Route} from "react-router";

import Home from '../Home/Home'
import Categories from '../Category/Categories';
import Category from '../Category/Category';
import Recipe from "../Recipe/Recipe";
import ApiDocs from "../ApiDocs/ApiDocs";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header>Header</header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="category" element={<Categories />} />
                    <Route path="category/:categoryId" element={<Category />} />
                    <Route path="recipe/:recipeId" element={<Recipe />} />
                    <Route path="api-docs" element={<ApiDocs />} />
                </Routes>
            </>
        )
    }
}

export default App;