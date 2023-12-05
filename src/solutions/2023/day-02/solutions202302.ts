export class solutions202302 {
  private MAX_PARAMETERS_COLORS = {
    RED: 12,
    GREEN: 13,
    BLUE: 14,
  } as { [key: string]: number };

  constructor(private readonly array: string[]) {}
  
  calculate() {
    const games: { game: string, values: { [key: string]: number }[], possible: boolean }[] = [];

    this.array.forEach(line => {
      let possible = true;
      const [game, values] = line.split(':');

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
        });
      });

      games.push({ game, values: valuesFormated, possible });
    });

    let sum = 0;
    games.filter(game => game.possible).map(item => {
      if(Number(item.game.split(' ')[1])) {
        sum += Number(item.game.split(' ')[1]);
      }
    });
    
    return { sum };
  }
}