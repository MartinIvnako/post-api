import React from "react";
import Raven from "raven-js";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config("https://34d81846b978437885cd43891ef1aea8@sentry.io/1532699", {
    release: "0-0-0",
    enviroment: "development-test"
}).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
