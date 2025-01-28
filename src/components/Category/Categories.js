import React, {Component} from "react";

import Category from './Category'
import {Link, Route, Routes} from "react-router";
import Home from "../Home/Home";


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch('http://localhost:8000/api/category')
            .then((response) => response.json())
            .then((data) => this.setState({categories: data}))
            .catch((error) => console.error("Error fetching recipes:", error));
    }

    render() {
        return (
            <>
                Categories/
                {
                    this.state.categories.map(category => (
                        <div key={category.id}>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Categories;