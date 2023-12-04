export class Solutions202301 {
  constructor(private readonly calibrationArray: string[]) {}

  calibration() {
    return this.calibrationArray.reduce((prev, currentValue) => {
      const currentValueFilter = currentValue.split('').filter((value) => Number(value));

      if(currentValueFilter.length === 0) return prev;

      const value = `${Number(currentValueFilter[0])}${Number(currentValueFilter[currentValueFilter.length - 1])}`;

      return { sum: prev.sum + Number(value)};
    }, { sum: 0 });
  }
}