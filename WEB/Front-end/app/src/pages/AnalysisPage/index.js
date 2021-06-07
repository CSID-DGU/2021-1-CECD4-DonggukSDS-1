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
                <div className="menu-group">
                    <div className="model-div" onClick={() => this.handleClick1()} >
                        model
                    </div>
                    <div className="scenario-div" onClick={() => this.handleClick2()}>
                        scenario
                    </div>
                </div>
                <div className="model-group" style={{display: this.state.showModel ? '' : 'none'}}>
                    <div className="search-buttons" >
                        <input type="text" name="element"  />

                        <button>DELETE MODEL</button>
                        <button>ADD NEW MODEL</button>
                    </div>
                    <table className="common-table" width="500">
                        <thead>
                            <tr>
                                <th width="400">Name</th>
                                <th width="100">Setting</th>
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

                <div className="scenario-group" style={{display: this.state.showModel ? 'none' : ''}}>
                    <div className="search-buttons">
                        <input type="text" name="element"  />
                        <button>DELETE SCENARIO</button>
                        <button>ADD NEW SCENARIO</button>
                    </div>
                    <table className="common-table" width="500">
                    <thead>
                            <tr>
                                <th width="400">Name</th>
                                <th width="100">Setting</th>
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
                
            </>
        );
    }
}

export default AnalysisPage;