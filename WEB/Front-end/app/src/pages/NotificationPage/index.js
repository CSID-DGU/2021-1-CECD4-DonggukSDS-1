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
                <a className="title-sidebar-name">Notification</a>
                <div className="search-buttons">
                    <input type="text" name="element" className="noti-search" placeholder="Search Title" />
                    <button className="btn-delete">DELETE POST</button>
                    <button className="btn-add">WRITE NEW POST</button>
                </div>
                <table className="common-table" width="1000">
                    <thead>
                        <tr>
                            <th width="150">Title</th>
                            <th width="100">Writer</th>
                            <th width="250">Date</th>
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