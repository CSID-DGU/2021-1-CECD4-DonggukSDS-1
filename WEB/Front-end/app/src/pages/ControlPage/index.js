import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"
import './ControlPage.scss'

class ControlPage extends Component {
    constructor(props){
        super(props);
        this.state = {showSensor:true}
    }
    handleClick1() {

        this.setState({showSensor:true})
    }
    handleClick2() {
        console.log('hi')
        this.setState({showSensor:false})
    }

    render(){
        return (
            <>
                <Sidebar history={this.props.history}/>
                <div className="menu-group">
                    <div className="sensor-div"onClick={() => this.handleClick1()} >
                        sensor
                    </div>
                    <div className="device-div" onClick={() => this.handleClick2()}>
                        device
                    </div>
                </div>
                <div className="sensor-group" style={{display: this.state.showSensor ? '' : 'none'}}>
                    <div className="search-buttons" >
                        <input type="text" name="element"  />
                        <select>
                            <option value="Location" name="Location">Location</option>
                            <option value="op1" name="신공학관 3층 3106">신공학관 3층 3106</option>
                        </select>
                        <select>
                            <option value="Status" name="Status">Status</option>
                            <option value="op1" name="정상">정상</option>
                            <option value="op2" name="오류 발생">오류 발생</option>
                            <option value="op3" name="확인 불가">확인 불가</option>
                        </select>
                        <button>DELETE SENSOR</button>
                        <button>ADD SENSOR</button>
                    </div>
                    <table className="common-table" width="740">
                        <thead>
                            <tr>
                                <th width="150">Name</th>
                                <th width="200">Location</th>
                                <th width="70">Status</th>
                                <th width="70">Cycle</th>
                                <th width="200">Column</th>
                                <th width="50">Setting</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>스마트콘센트</td>
                                <td>신공학관 3층 3106</td>
                                <td>정상</td>
                                <td>10분</td>
                                <td>3106_power_socket</td>
                                <td><button>setting</button></td>
                            </tr>
                            <tr>
                                <td>스마트레이더센서</td>
                                <td>신공학관 3층 3107</td>
                                <td>정상</td>
                                <td>5분</td>
                                <td>3107_radar</td>
                                <td><button>setting</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="device-group" style={{display: this.state.showSensor ? 'none' : ''}}>
                    <div className="search-buttons">
                        <input type="text" name="element"  />
                        <select>
                            <option value="Location" name="Location">Location</option>
                            <option value="op1" name="신공학관 3층 3106">신공학관 3층 3106</option>
                        </select>
                        <select>
                            <option value="Status" name="Status">Status</option>
                            <option value="op1" name="정상">정상</option>
                            <option value="op2" name="오류 발생">오류 발생</option>
                            <option value="op3" name="확인 불가">확인 불가</option>
                        </select>
                        <button>DELETE DEVICE</button>
                        <button>ADD NEW DEVICE</button>
                    </div>
                    <table className="common-table" width="740">
                        <thead>
                            <tr>
                            <th width="150">Name</th>
                                <th width="200">Location</th>
                                <th width="70">Status</th>
                                <th width="70">Cycle</th>
                                <th width="200">Column</th>
                                <th width="50">Setting</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>에어컨/히터</td>
                                <td>신공학관 3층 3106</td>
                                <td>정상</td>
                                <td>10분</td>
                                <td>3106_power_socket</td>
                                <td><button>setting</button></td>
                            </tr>
                            <tr>
                                <td>에어컨/히터</td>
                                <td>신공학관 3층 3107</td>
                                <td>정상</td>
                                <td>5분</td>
                                <td>3107_radar</td>
                                <td><button>setting</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </>
        );
    }
}

export default ControlPage;