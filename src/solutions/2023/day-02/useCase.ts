import fs from 'fs';
import { solutions202302 } from './solutions202302';

export const useCase202302 = async () => {
  const lines: string[] = [];
    
  const file = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

  if(!file) return console.log('File not found');

  file.split(/\r?\n/).map(line => {
    lines.push(line);
  });

  const calculate = new solutions202302(lines).calculate();
  console.log(`The calculate value is: ${calculate.sum}`);

  fs.writeFileSync(`${__dirname}/output.txt`, calculate.sum.toString());
};