const preparePaths = (outputs: string[]) =>
  outputs.reduce<Array<string[]>>(
    (acc, path) => {
      const [js, css] = acc;
      const splittedFileName = path.split("/").pop();

      if (splittedFileName?.endsWith(".js")) {
        js.push(splittedFileName);
      } else if (splittedFileName?.endsWith(".css")) {
        css.push(splittedFileName);
      }

      return acc;
    },
    [[], []]
  );

export default preparePaths;
