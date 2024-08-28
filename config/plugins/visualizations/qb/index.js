require("./index.css");
var $9hWyW$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $9hWyW$reactdomclient = require("react-dom/client");
var $9hWyW$h5webapp = require("@h5web/app");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $0102d920810385a3$export$2e2bcd8739ae039);
/**
 * Visualizer interface for h5web (https://github.com/silx-kit/h5web)
 *
 * This relies on Galaxy being able to serve files using the
 * h5grove protocol (https://silx-kit.github.io/h5grove/).
 * This provides efficient access to the contents of the
 * HDF5 file and avoids having to read the whole file at any
 * point.
 */ 




/* This will be part of the charts/viz standard lib in 23.1 */ const $0102d920810385a3$var$slashCleanup = /(\/)+/g;
function $0102d920810385a3$var$prefixedDownloadUrl(root, path) {
    return `${root}/${path}`.replace($0102d920810385a3$var$slashCleanup, "/");
}
function $0102d920810385a3$var$MyApp(props) {
    return /*#__PURE__*/ (0, $9hWyW$reactjsxruntime.jsx)((0, $9hWyW$h5webapp.H5GroveProvider), {
        url: props.url,
        filepath: props.name,
        axiosConfig: {
            params: {
                file: props.name
            }
        },
        children: /*#__PURE__*/ (0, $9hWyW$reactjsxruntime.jsx)((0, $9hWyW$h5webapp.App), {
            explorerOpen: props.explorer
        })
    });
}
window.bundleEntries = window.bundleEntries || {};
window.bundleEntries.load = function(options) {
    const dataset = options.dataset;
    const settings = options.chart.settings;
    const explorer = settings.get("explorer");
    const url = window.location.origin + $0102d920810385a3$var$prefixedDownloadUrl(options.root, "/api/datasets/" + dataset.id + "/content");
    const root = (0, $9hWyW$reactdomclient.createRoot)(document.getElementById(options.target));
    root.render(/*#__PURE__*/ (0, $9hWyW$reactjsxruntime.jsx)($0102d920810385a3$var$MyApp, {
        url: url,
        name: dataset.name,
        filepath: dataset.file_name,
        explorer: explorer
    }));
    options.chart.state("ok", "Chart drawn.");
    options.process.resolve();
};
var $0102d920810385a3$export$2e2bcd8739ae039 = $0102d920810385a3$var$MyApp;


//# sourceMappingURL=index.js.map
