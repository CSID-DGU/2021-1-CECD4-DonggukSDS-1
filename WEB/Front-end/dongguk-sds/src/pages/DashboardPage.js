import Graph from "../components/Graph";
import Graph2 from "../components/Graph2";
import Graph3 from "../components/Graph3";

function DashboardPage() {
  return (
    <div className="w-full px-7 py-3 flex-col flex flex-1">
      <div className="flex flex-row items-center mb-3 h-10 justify-end">
        <button type="button" className="w-60 h-full text-sm text-white font-semibold mr-1.5 shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE GRAPH</button>
        <button type="button" className="w-60 h-full text-sm text-white font-semibold ml-1.5 shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD GRAPH</button>
      </div>
      <div className="relative flex-1">
        <Graph />
        <Graph2 />
        <Graph3 />
      </div>
    </div>
  );
}

export default DashboardPage;
