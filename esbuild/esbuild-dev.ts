import ESBuild from "esbuild";
import config from "./esbuild-config";
import express from "express";
import { resolveRoot } from "./methods";

const port = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.static(resolveRoot("build")));
app.listen(port, () => {
  console.clear();
  console.log(`Server started on http://localhost:${port}`);
});

ESBuild.build(config)
  .then((result) => {
    result.errors.map((item) => console.error(item));
    result.warnings.map((item) => console.warn(item));
  })
  .catch((err) => console.log(`received errors. \n${err}`));
