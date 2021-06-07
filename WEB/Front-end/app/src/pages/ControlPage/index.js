import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"
import './ControlPage.scss'

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