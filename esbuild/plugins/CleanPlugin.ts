import { Plugin } from "esbuild";
import { rm } from "fs/promises";

const CleanPlugin: Plugin = {
  name: "CleanPlugin",
  setup(build) {
    const dir = build.initialOptions.outdir;
    build.onStart(async () => {
      try {
        if (dir) {
          await rm(dir, { recursive: true });
        }
      } catch (err) {
        console.log(err);
      }
    });
  },
};

export default CleanPlugin;
