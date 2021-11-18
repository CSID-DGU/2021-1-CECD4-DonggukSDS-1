import AnalysisScenarioContainer from './AnalysisScenarioContainer'
import AnalysisScenarioReadPage from './AnalysisScenarioReadPage'
import AnalysisScenarioEditPage from './AnalysisScenarioEditPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'

function AnalysisPage({ match }) {
  const [page, setPage] = useState("model") // or device
  const activeClassName = "flex flex-col w-1/2 pb-3 pt-3 rounded-lg border-2 border-blue-500 ring-2 ring-blue-300 items-center text-blue-500"
  const inActiveClassName = "flex flex-col w-1/2 pb-3 pt-3 rounded-lg border border-gray-300 items-center text-gray-400"

  return (
    
    <Router>
    <Switch>
      <Route exact path={match.path} component={AnalysisScenarioContainer} />
      <Route exact path={`${match.path}/:no`} component={AnalysisScenarioReadPage} />
      <Route exact path={`${match.path}/edit/:no`} component={AnalysisScenarioEditPage} />
    </Switch>
  </Router>


  );
}

export default AnalysisPage;
