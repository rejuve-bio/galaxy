import QueryBuilder from "./components/query-builder/QueryBuilder";
import { EDGE_TYPES } from "./schema/schema";
import { useEffect, useState } from "react";

export default function App({template}:any) {

  // const [template, setTemplate] = useState<any>({
  //   query: {
  //     // nodes: [
  //     //   {
  //     //     id: "8cc0bd89-7f53-4e89-aab4-cbac132be68b",
  //     //     type: "custom",
  //     //     data: {
  //     //       type: "pathway",
  //     //     },
  //     //     position: {
  //     //       x: 101.98156752467406,
  //     //       y: -49.84697884443683,
  //     //     },
  //     //     width: 96,
  //     //     height: 132,
  //     //     selected: false,
  //     //     positionAbsolute: {
  //     //       x: 101.98156752467406,
  //     //       y: -49.84697884443683,
  //     //     },
  //     //     dragging: false,
  //     //   },
  //     //   {
  //     //     id: "57a11576-247c-4aa0-9147-0c61a05b01a5",
  //     //     type: "custom",
  //     //     data: {
  //     //       type: "gene",
  //     //     },
  //     //     position: {
  //     //       x: -221.82220711239705,
  //     //       y: -49.60076902967583,
  //     //     },
  //     //     width: 96,
  //     //     height: 132,
  //     //     selected: false,
  //     //     positionAbsolute: {
  //     //       x: -221.82220711239705,
  //     //       y: -49.60076902967583,
  //     //     },
  //     //     dragging: false,
  //     //   },
  //     //   {
  //     //     id: "745a72cb-6639-4473-8bb9-d70f2acca303",
  //     //     type: "custom",
  //     //     data: {
  //     //       type: "promoter",
  //     //     },
  //     //     position: {
  //     //       x: -566.2411719483079,
  //     //       y: -179.1683301043495,
  //     //     },
  //     //     width: 96,
  //     //     height: 132,
  //     //     selected: false,
  //     //     positionAbsolute: {
  //     //       x: -566.2411719483079,
  //     //       y: -179.1683301043495,
  //     //     },
  //     //     dragging: false,
  //     //   },
  //     //   {
  //     //     id: "8dfe763f-f417-432b-b529-22cd56307d8c",
  //     //     type: "custom",
  //     //     data: {
  //     //       type: "super_enhancer",
  //     //     },
  //     //     position: {
  //     //       x: -568.6443836145361,
  //     //       y: 102.01636778395108,
  //     //     },
  //     //     width: 115,
  //     //     height: 132,
  //     //     selected: false,
  //     //     positionAbsolute: {
  //     //       x: -568.6443836145361,
  //     //       y: 102.01636778395108,
  //     //     },
  //     //     dragging: false,
  //     //   },
  //     // ],
  //     // edges: [
  //     //   {
  //     //     animated: true,
  //     //     label: "relates",
  //     //     markerEnd: {
  //     //       type: "arrowclosed",
  //     //       color: "black",
  //     //     },
  //     //     style: {
  //     //       width: 5,
  //     //       borderWidth: 5,
  //     //       height: 5,
  //     //       strokeWidth: 2,
  //     //       strokeDasharray: "5,5",
  //     //     },
  //     //     id: "8ee4b556-1603-4b75-860a-5d99195937f6",
  //     //     source: "57a11576-247c-4aa0-9147-0c61a05b01a5",
  //     //     target: "8cc0bd89-7f53-4e89-aab4-cbac132be68b",
  //     //     type: "custom",
  //     //     data: {
  //     //       edgeType: "genes_pathways",
  //     //       options: [
  //     //         {
  //     //           type: "gene to pathway association",
  //     //           label: "genes_pathways",
  //     //           source: "gene",
  //     //           target: "pathway",
  //     //         },
  //     //       ],
  //     //     },
  //     //   },
  //     //   {
  //     //     animated: true,
  //     //     label: "relates",
  //     //     markerEnd: {
  //     //       type: "arrowclosed",
  //     //       color: "black",
  //     //     },
  //     //     style: {
  //     //       width: 5,
  //     //       borderWidth: 5,
  //     //       height: 5,
  //     //       strokeWidth: 2,
  //     //       strokeDasharray: "5,5",
  //     //     },
  //     //     id: "03c6d01f-24be-4022-98e6-ef4adbc1dd15",
  //     //     source: "745a72cb-6639-4473-8bb9-d70f2acca303",
  //     //     target: "57a11576-247c-4aa0-9147-0c61a05b01a5",
  //     //     type: "custom",
  //     //     data: {
  //     //       edgeType: "promoter_gene",
  //     //       options: [
  //     //         {
  //     //           type: "promoter to gene association",
  //     //           label: "promoter_gene",
  //     //           source: "promoter",
  //     //           target: "gene",
  //     //         },
  //     //       ],
  //     //     },
  //     //     selected: false,
  //     //   },
  //     //   {
  //     //     animated: true,
  //     //     label: "relates",
  //     //     markerEnd: {
  //     //       type: "arrowclosed",
  //     //       color: "black",
  //     //     },
  //     //     style: {
  //     //       width: 5,
  //     //       borderWidth: 5,
  //     //       height: 5,
  //     //       strokeWidth: 2,
  //     //       strokeDasharray: "5,5",
  //     //     },
  //     //     id: "8a3403bf-a90f-405f-ace1-15f3ec00b130",
  //     //     source: "8dfe763f-f417-432b-b529-22cd56307d8c",
  //     //     target: "57a11576-247c-4aa0-9147-0c61a05b01a5",
  //     //     type: "custom",
  //     //     data: {
  //     //       edgeType: "super_enhancer_gene",
  //     //       options: [
  //     //         {
  //     //           type: "super enhancer to gene association",
  //     //           label: "super_enhancer_gene",
  //     //           source: "super_enhancer",
  //     //           target: "gene",
  //     //         },
  //     //       ],
  //     //     },
  //     //   },
  //     // ],
  //     // viewport: {
  //     //   x: 842.6593217014231,
  //     //   y: 329.7835117829392,
  //     //   zoom: 0.9478893479335839,
  //     // },
  //   },
  // })

  // move this outside to the index.tsx
  // async function load(){
  //   console.log('in load')
  //   const response = await axios.get(URL)
  //   // const response = await fetch(URL);
  //   console.log({response: response});
  //   const temp = (response.data);
  //   console.log({temp});
  //   setTemplate({query:temp});
  //   // console.log({response})
  //   // const temp = JSON.parse(response.data);
  //   // console.log({temp})
  //   // setTemplate(temp)
  //   return;
  // }
  // useEffect(() => {
  //   // console.log('in use effect')
  //   const fetchData = async () => {
  //     console.log('in load')
  //     const response = await axios.get(URL)
  //     // const response = await fetch(URL);
  //     console.log({response: response});
  //     const temp = (response.data);
  //     console.log({temp});
  //     // setTemplate({query:temp});
  //     };
  //   fetchData();
  //   console.log('in use effect ',template)
    
  // },[])


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

    await fetch("http://100.67.47.42:9093/api/tools", {
      method: "POST",
      body: JSON.stringify(requestJSON),
      headers: new Headers({ 
    "content-type": "application/json",
    "Cookie": "galaxysession=b962a7837c22418630d53672e11b482c2ff332717fbae29e82efbc24b972d419922ea2334a4e5b2c"
  }),
    });
    // const resultGraph = await response.json();
    // if (!resultGraph?.nodes?.length) {
    //   return alert("No matching result for the query.");
    // }

    console.log({requestJSON})
  };

  return (
    <div className="h-full w-full">
      <div className="flex h-screen flex-col">
        <header className="border-b px-12 py-4">
          <h1 className="text-xl font-medium">Query Builder</h1>
        </header>
        <div className="relative flex-grow">
          <QueryBuilder onSubmit={runQuery} graph={template?.query} />
        </div>
      </div>
    </div>
  );
}
