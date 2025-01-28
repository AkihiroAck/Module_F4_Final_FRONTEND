import React, {Component} from "react";

import Categories from '../Category/Categories'
import {Link} from "react-router";


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                /Home/
                <Categories />
                <Link to='api-docs'>API Documentation</Link>
            </>
        )
    }
}

export default Home;