// @ts-nocheck
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { ReactFlowProvider } from "@xyflow/react";
import "./tailwind.css";
import "./global.scss";
import axios from "axios";


/* This will be part of the charts/viz standard lib in 23.1 */
const slashCleanup = /(\/)+/g;
function prefixedDownloadUrl(root, path) {
  return `${root}/${path}`.replace(slashCleanup, "/");
}

window.bundleEntries = window.bundleEntries || {};
window.bundleEntries.load = async function (options) {
  const dataset = options.dataset;
  const settings = options.chart.settings;
  const explorer = settings.get("explorer");

// get dataset from url
  async function load(URL){
    const response = await axios.get(URL);
    let temp = {};
    temp["query"] = (response.data);
    return temp;
  }

  const url =
    window.location.origin +
    prefixedDownloadUrl(options.root,dataset.download_url);

  const temp = await load(url)
  
  const root = createRoot(document.getElementById(options.target));
    root.render(
      <React.StrictMode>
        <ReactFlowProvider>
          <App template={temp}  />
        </ReactFlowProvider>
      </React.StrictMode>
    );
  options.chart.state("ok", "Chart drawn.");
  options.process.resolve();
};
