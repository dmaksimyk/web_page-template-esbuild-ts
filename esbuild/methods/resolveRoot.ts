import path from "path";

const resolveRoot = (...segments: string[]): string => {
  return path.resolve(__dirname, "..", "..", ...segments);
};

export default resolveRoot;
