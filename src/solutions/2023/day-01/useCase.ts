import fs from 'fs';
import { Solutions202301 } from './solutions202301';

export const useCase202301 = async () => {
  const calibrationArray: string[] = [];

  const file =  fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

  if(!file) return console.log('File not found');

  file.split(/\r?\n/).forEach(line =>  {
    calibrationArray.push(line);
  });

  const calibration = new Solutions202301(calibrationArray).calibration();
  console.log(`The calibration value is: ${calibration.sum}`);

  fs.writeFileSync(`${__dirname}/output.txt`, calibration.sum.toString());
};

