import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"

class AnalysisPage extends Component {
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

export default AnalysisPage;