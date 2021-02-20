import * as fs from 'fs';

export const fileWriter = {
    writeFile(file: string, data: string): void {    
        fs.writeFileSync(`${__dirname}/${file}`, data);
    }
};
