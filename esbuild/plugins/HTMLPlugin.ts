import { Plugin } from "esbuild";
import { writeFile } from "fs/promises";
import path from "path";
import layout from "../layout";
import { preparePaths } from "../methods";
import { THTMLPluginOptions } from "../types";

const HTMLPlugin = (options?: THTMLPluginOptions): Plugin => {
  return {
    name: "HTMLPlugin",
    setup(build) {
      const dir = build.initialOptions.outdir;
      build.onEnd(async (result) => {
        const outputs = result.metafile?.outputs;
        const [jsPath, cssPath] = preparePaths(Object.keys(outputs || []));

        if (dir)
          await writeFile(
            path.resolve(dir, "index.html"),
            layout({ ...options, jsPath: jsPath, cssPath: cssPath })
          );
      });
    },
  };
};

export default HTMLPlugin;
