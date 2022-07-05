import ESBuild from "esbuild";
import config from "./esbuild-config";

const type = "creating a product build:";

ESBuild.build(config).catch(console.log);
