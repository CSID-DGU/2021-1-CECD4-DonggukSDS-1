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
      <AnalysisScenarioContainer/>
    </div>
  );
}

export default AnalysisPage;
