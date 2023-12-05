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
  console.log(`The calculate value is: ${calculate.sumOfPossibleGames}`);
  console.log(`The sum of power is: ${calculate.sumPower}`);


  fs.writeFileSync(`${__dirname}/output.txt`, JSON.stringify({
    sumOfPossibleGames: calculate.sumOfPossibleGames,
    totalPower: calculate.sumPower
  }));
};