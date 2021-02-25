import * as fs from 'fs';

export const fileWriter = {
    writeFile(path: string, data: string): void {
        fs.writeFileSync(`${__dirname}/../${path}`, data);
    }
};
