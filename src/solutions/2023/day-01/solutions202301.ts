export class Solutions202301 {
  private DAY_MAP = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5, 
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
  } as { [key: string]: number };

  constructor(private readonly calibrationArray: string[]) {}

  private replaceTextInNumber(text: string) {
    let replaceText = text;

    Object.keys(this.DAY_MAP).forEach(key => { 
      const value = this.DAY_MAP[key];
      replaceText = `${replaceText.replace(new RegExp(key, 'g'), `${key[0]}${value.toString()}${key[key.length - 1]}`)}`;
    });

    return replaceText;
  }

  calibration() {
    return this.calibrationArray.reduce((prev, currentValue) => {
      const currentValueSubstituted = this.replaceTextInNumber(currentValue.toUpperCase());
      const currentValueFilter = currentValueSubstituted.split('').filter((value) => Number(value));

      if(currentValueFilter.length === 0) return prev;

      const value = `${Number(currentValueFilter[0])}${Number(currentValueFilter[currentValueFilter.length - 1])}`;

      return { sum: prev.sum + Number(value)};
    }, { sum: 0 });
  }
}