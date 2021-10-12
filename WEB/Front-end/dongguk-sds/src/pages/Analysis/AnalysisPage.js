import AnalysisModelContainer from './AnalysisModelContainer'
import AnalysisScenarioContainer from './AnalysisScenarioContainer'
import { HiDatabase, HiDocumentText } from 'react-icons/hi'
import { useState } from 'react'


function AnalysisPage() {
  const [page, setPage] = useState("model") // or device
  const activeClassName = "flex flex-col w-1/2 pb-3 pt-3 rounded-lg border-2 border-blue-500 ring-2 ring-blue-300 items-center text-blue-500"
  const inActiveClassName = "flex flex-col w-1/2 pb-3 pt-3 rounded-lg border border-gray-300 items-center text-gray-400"

  return (
    <div className="w-full px-7 py-3">
      <div className="flex justify-between mb-3">
        <button className={ page === "model" ? activeClassName+" mr-3" : inActiveClassName+" mr-3" } onClick={ ()=> setPage("model") }>
          <HiDatabase size="48"/>
          <span className="text-lg font-medium">Data Analysis Model</span>
        </button>
        <button className={ page === "scenario" ? activeClassName : inActiveClassName } onClick={ ()=> setPage("scenario") }>
          <HiDocumentText size="48"/>
          <span className="text-lg font-medium">Scenario</span>
        </button>
      </div>
      { page === "model" ? <AnalysisModelContainer/> : <AnalysisScenarioContainer/>}
      
    </div>
  );
}

export default AnalysisPage;
