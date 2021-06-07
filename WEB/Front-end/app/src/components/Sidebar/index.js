import React, { Component } from 'react'
import './Sidebar.scss'

class Sidebar extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const history = this.props.history;
        return (
        <div id="Sidebar">
            <ul>
                <li className="SidebarBtn" onClick={() => history.push("/home")}>Home</li>
                <li className="SidebarBtn" onClick={() => history.push("/notice")}>Notification</li>
                <li className="SidebarBtn" onClick={() => history.push("/dashboard")}>Dashboard</li>
                <li className="SidebarBtn" onClick={() => history.push("/control")}>Control</li>
                <li className="SidebarBtn" onClick={() => history.push("/analysis")}>Analysis</li>
            </ul>
        </div>
        );
    }
}

export default Sidebar;