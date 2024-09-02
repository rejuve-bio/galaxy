import { CloudCog } from "lucide-react";
import QueryBuilder from "./components/query-builder/QueryBuilder";
import { EDGE_TYPES } from "./schema/schema";

export default function App({URL}:any) {
  console.log({URL})
  fetch(URL).then((data)=>{
    // console.log("hello", data)
    alert(JSON.stringify(data))
  })
  const runQuery = async (graph: any) => {
    const requestJSON = {
      requests: {
        nodes: graph.nodes.map((n: any) => {
          return {
            node_id: n.id,
            id: n.data.id || "",
            type: n.data.type,
            properties: Object.keys(n.data)
              .filter((k) => k != "id" && k != "type" && n.data[k])
              .reduce((acc, k) => ({ ...acc, [k]: n.data[k] }), {}),
          };
        }),
        predicates: graph.edges.map((e: any) => {
          return {
            type: EDGE_TYPES.find((t) => t.label === e.data.edgeType)?.type,
            source: e.source,
            target: e.target,
          };
        }),
      },
    };

    alert(JSON.stringify(requestJSON))

    // const response = await fetch("http://localhost:5000/query", {
    //   method: "POST",
    //   body: JSON.stringify(requestJSON),
    //   headers: new Headers({ "content-type": "application/json" }),
    // });
    // const resultGraph = await response.json();
    // if (!resultGraph?.nodes?.length) {
    //   return alert("No matching result for the query.");
    // }
  };

  return (
    <div className="h-full w-full">
      <div className="flex h-screen flex-col">
        <header className="border-b px-12 py-4">
          <h1 className="text-xl font-medium text-red-600">Query Builder</h1>
          <p>jd</p>
          <p>{URL}</p>
        </header>
        <div className="relative flex-grow">
          <QueryBuilder onSubmit={runQuery} />
        </div>
      </div>
    </div>
  );
}
