import { THTMLPluginOptions } from "../types";

const layout = (options?: THTMLPluginOptions) =>
  `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover">
    <meta content="IE=Edge" http-equiv="X-UA-Compatible">
    <title>${options?.title || "Template VKMA"}</title>
    ${options?.cssPath?.map(
      (path, index) =>
        `<link href="${path}" rel="stylesheet"/>${
          options.cssPath?.length !== index + 1 ? "\n" : ""
        }`
    )}
  </head>
  <body>
    <div id="root"></div>
    ${options?.jsPath?.map(
      (path, index) =>
        `<script src=${path}></script>${
          options.jsPath?.length !== index + 1 ? "\n" : ""
        }`
    )}
  </body>
</html>
`;
export default layout;
