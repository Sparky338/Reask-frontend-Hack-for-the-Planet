import { Link } from "react-router-dom";
import "../css/graph.css"

const Graph = () => {

    // const graph = await CSVUploadDisplayRes

    return (
        <div className="graph-main-div">
            {/* display graph when there is one available */}
            {/* {graph ? displayGraph : genericResponse} */}
            <h2>Upload a CSV to get started</h2>
        </div>
    )
}

export default Graph;
