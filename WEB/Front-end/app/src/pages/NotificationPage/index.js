import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"
import './NotificationPage.scss'

class NotificationPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Sidebar history={this.props.history}/>
                <div className="search-buttons">
                    <input type="text" name="element"  />
                    <button>DELETE POST</button>
                    <button>WRITE NEW POST</button>
                </div>
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Writer</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>본 시스템에 대한 설명</td>
                            <td>홍길동</td>
                            <td>2021-05-15-01:50:00</td>
                        </tr>
                        <tr>
                            <td>자주묻는 질문 Q&A</td>
                            <td>홍길동</td>
                            <td>2021-05-15-01:50:00</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default NotificationPage;