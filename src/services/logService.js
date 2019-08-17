import Raven from "raven-js";

function init() {
    Raven.config("https://34d81846b978437885cd43891ef1aea8@sentry.io/1532699", {
        release: "0-0-0",
        enviroment: "development-test"
    }).install();
}

function log(error) {
    Raven.captureException(error);
}

export default { init, log };
