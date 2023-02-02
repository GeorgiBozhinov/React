import React, { Component } from 'react'

import IndexService from "../../services/IndexService";
import Home from "../../pages/Home";
import {Route} from "react-router-dom";

class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus:[]
        };
    }

    componentDidMount() {
        IndexService.getMessage().then(res => {
            this.setState({ menus: res.data });
        })
    }

    render() {
        return (
            // <div>
            //     <div> {this.state.message}</div>
            // </div>

                this.state.menus.map (
                    m =>
                        <Route path='/{m.path}'  exact component={m.menu}/>
                )

        )
    }
}

export default IndexComponent