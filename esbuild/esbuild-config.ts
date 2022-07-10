// Vendor
import { BuildOptions } from "esbuild";

// Methods
import { resolveRoot } from "./methods";

// Plugins
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
      console.clear();
      console.log("Generating build...");
      if (error) console.error("Generating build failed:", error);
      else {
        result?.warnings.map((msg) => console.warn(msg));
        result?.errors.map((msg) => console.error(msg));
        console.log(`Finished re-build!`);
      }
    },
  },
};

export default config;
