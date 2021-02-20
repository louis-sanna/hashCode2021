import * as fs from 'fs';

export const fileReader = {
  readLines(path: string) {
    return this.read(path).split("\n");
  },
  read(path: string) {
    return fs
      .readFileSync(`${__dirname}/../${path}`, { encoding: "utf-8" })
      .trim();
  },
};
