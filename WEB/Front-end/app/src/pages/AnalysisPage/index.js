import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Sidebar history={this.props.history}/>
            </>
        );
    }
}

export default HomePage;