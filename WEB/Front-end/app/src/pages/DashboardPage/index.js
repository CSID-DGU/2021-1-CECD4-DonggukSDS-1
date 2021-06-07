import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"
import './DashboardPage.scss'

class DashboardPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Sidebar history={this.props.history}/>
                <div className="search-buttons">
                    <button>DELETE GRAPH</button>
                    <button>ADD GRAPH</button>
                </div>
            </>
        );
    }
}

export default DashboardPage;