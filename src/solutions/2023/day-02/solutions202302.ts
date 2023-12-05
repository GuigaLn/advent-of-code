export class solutions202302 {
  private MAX_PARAMETERS_COLORS = {
    RED: 12,
    GREEN: 13,
    BLUE: 14,
  } as { [key: string]: number };

  constructor(private readonly array: string[]) {}
  
  calculate() {
    const games: { game: string, values: { [key: string]: number }[], possible: boolean, power: number }[] = [];

    this.array.forEach(line => {
      let possible = true;
      const [game, values] = line.split(':');
      const minValues: { [key: string]: number } = {};

      const valuesFormated = values.split(';').map(value => {
        const valueSplit = value.split(',');
    
        const colorsValue: { [key: string]: number } = valueSplit.reduce((prev: { [key: string]: number }, curr) => {
          const [number, key] = curr.trim().split(' ');

          if(prev[key.toUpperCase()]) { 
            prev[key.toUpperCase()] = prev[key.toUpperCase()] + Number(number);
            return prev;
          }

          prev[key.toUpperCase()] = Number(number);
          return prev;
        }, {});
        
        return colorsValue;
      });

      valuesFormated.map((item) => {
        Object.entries(this.MAX_PARAMETERS_COLORS).map(([key, value]) => {
          if(item[key] > value) {
            possible = false;
          }
          if(!minValues[key] || (minValues[key] < item[key])) {
            minValues[key] = item[key];
          }
        });
      });

      const power = Object.values(minValues).reduce((prev, currentValue,) => prev = prev * currentValue, 1);

      games.push({ game, values: valuesFormated, possible, power });
    });

    let sumOfPossibleGames = 0;
    let sumPower = 0;
    games.map(game => {
      if(game.possible) {
        if(Number(game.game.split(' ')[1])) {
          sumOfPossibleGames += Number(game.game.split(' ')[1]);
        }
      }
      sumPower += game.power || 0;
    });
    
    return { sumOfPossibleGames, sumPower };
  }
}