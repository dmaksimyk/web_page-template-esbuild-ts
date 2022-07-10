// Vendor
import ESBuild from "esbuild";
import express from "express";

// Config
import config from "./esbuild-config";

// Methods
import { resolveRoot } from "./methods";

const app = express();
const port = Number(process.env.PORT) || 3000;

ESBuild.build(config)
  .then((result) => {
    result?.errors.map((item) => console.error(item));
    result?.warnings.map((item) => console.warn(item));

    // Run dev server
    app.use(express.static(resolveRoot("build")));
    app.listen(port, () => {
      console.clear();
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(`ESBuild - received errors: \n${err}`));
