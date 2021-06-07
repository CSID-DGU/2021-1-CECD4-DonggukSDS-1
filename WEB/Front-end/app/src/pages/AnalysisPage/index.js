import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar"
import './AnalysisPage.scss'

class AnalysisPage extends Component {
    constructor(props){
        super(props);
        this.state = {showModel:true}
    }
    handleClick1() {

        this.setState({showModel:true})
    }
    handleClick2() {
        this.setState({showModel:false})
    }

    render(){
        return (
            <>
                <Sidebar history={this.props.history}/>
                <div className="bg">
                <div id="title">Analysis</div>
                <div className="menu-group">
                    <div className="model-div" onClick={() => this.handleClick1()} style={{color: this.state.showModel ? '#109CF1' : '#71717A'}} >
                        model
                    </div>
                    <div className="scenario-div" onClick={() => this.handleClick2()} style={{color: this.state.showModel ? '#71717A' : '#109CF1'}}>
                        scenario
                    </div>
                </div>
                <div className="model-group" style={{display: this.state.showModel ? '' : 'none'}}>
                    <div className="search-buttons" >
                        <input type="text" className="search-text" name="element" placeholder="Search Name" />

                        <button className="deleteBtn">DELETE MODEL</button>
                        <button className="addBtn">ADD NEW MODEL</button>
                    </div>
                    <div className="body">
                    <table className="anal-table">
                        <thead>
                            <tr>
                                <th width="1040" align="left">Name</th>
                                <th width="50">Setting</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>강의 종료 모델</td>
                                <td><button>setting</button></td>
                            </tr>
                            <tr>
                                <td>인물 존재 감지</td>
                                <td><button>setting</button></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="scenario-group" style={{display: this.state.showModel ? 'none' : ''}}>
                    <div className="search-buttons">
                        <input type="text" className="search-text" name="element" placeholder="Search Name" />
                        <button className="deleteBtn">DELETE SCENARIO</button>
                        <button className="addBtn">ADD NEW SCENARIO</button>
                    </div>
                    <div className="body">
                    <table className="anal-table">
                    <thead>
                            <tr>
                                <th width="1040" align="left">Name</th>
                                <th width="50">Setting</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>화재 시 시나리오</td>
                                <td><button>setting</button></td>
                            </tr>
                            <tr>
                                <td>강의 시작 10분 전 시나리오</td>
                                <td><button>setting</button></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default AnalysisPage;