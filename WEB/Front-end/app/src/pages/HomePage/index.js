import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"
import './HomePage.scss'

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Sidebar history={this.props.history}/>
                <div className="bg">
                <div id="title">Home</div>
                <div id="home">
                    <div className="dash">
                        <p>주요 대시보드</p>
                    </div>
                    <div className="notice">
                        <p>주요 공지사항</p>
                    </div>
                    <div className="emergency">
                        <p>이벤트 발생 경고</p>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default HomePage;