import { BuildOptions } from "esbuild";
import { resolveRoot } from "./methods";
import { CleanPlugin, HTMLPlugin } from "./plugins";

const isProd: boolean = process.env.MODE === "prod";
const title = "Твой проект";

const config: BuildOptions = {
  outdir: resolveRoot("build"),
  entryPoints: [resolveRoot("src", "index.tsx")],
  entryNames: "[dir]/bundle-[hash]",
  allowOverwrite: true,
  bundle: true,
  metafile: true,
  tsconfig: resolveRoot("tsconfig.json"),
  minify: isProd,
  sourcemap: !isProd,
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".jpeg": "file",
    ".svg": "file",
  },
  plugins: [CleanPlugin, HTMLPlugin({ title: title })],
  watch: !isProd && {
    onRebuild(error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log("Generating build...");
        if (result) {
          console.clear();
          console.log("Finished re-build!");
        }
      }
    },
  },
};

export default config;
