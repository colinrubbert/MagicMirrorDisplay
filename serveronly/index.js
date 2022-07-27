const app = require("../js/app.js");
const Log = require("logger").createLogger();

app.start((config) => {
	const bindAddress = config.address ? config.address : "localhost";
	const httpType = config.useHttps ? "https" : "http";
	Log.info("\nReady to go! Please point your browser to: " + httpType + "://" + bindAddress + ":" + config.port);
});
