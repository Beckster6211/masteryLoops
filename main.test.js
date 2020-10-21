const { getTaskString } = require('./libs/getTaskString');

const {
  declareForHoneyLoop,
  declareDoWhileHoneyLoop,
  declareWhileHoneyLoop,
  declareHoneyLoopLabel,
  declareHoneyBreakStatement,
  alternateIngredients,
  getKeyNames,
  generateArrayList,
} = require('./main');

const LEVELS = {
  one: 'level_one',
  two: 'level_two',
  three: 'level_three',
};

describe(LEVELS.one, () => {
  it('declareForHoneyLoop should contain a for loop', () => {
    const expected = 'for';
    const actual = getTaskString(declareForHoneyLoop);

    expect(actual).toEqual(expect.stringContaining(expected));
  });

  it('declareForHoneyLoop should return 10', () => {
    const expected = 10;
    const actual = declareForHoneyLoop();

    expect(actual).toBe(expected);
  });

  it('declareDoWhileHoneyLoop should contain a do...while loop', () => {
    const expected = ['do', 'while'];
    const actual = getTaskString(declareDoWhileHoneyLoop).split(' ');

    expect(actual).toEqual(expect.arrayContaining(expected));
  });

  it('declareDoWhileHoneyLoop should return 10', () => {
    const expected = 10;
    const actual = declareDoWhileHoneyLoop();

    expect(actual).toBe(expected);
  });

  it('declareWhileHoneyLoop should contain a while loop', () => {
    const expected = 'while';
    const actual = getTaskString(declareWhileHoneyLoop);

    expect(actual).toEqual(expect.stringContaining(expected));
  });

  it('declareWhileHoneyLoop should return 10', () => {
    const expected = 10;
    const actual = declareWhileHoneyLoop();

    expect(actual).toBe(expected);
  });

  it('declareHoneyLoopLabel should contain a label loop', () => {
    const expected = 'sevenLoopsAtATime';
    const actual = getTaskString(declareHoneyLoopLabel);

    expect(actual).toEqual(expect.stringContaining(expected));
  });

  it('declareHoneyLoopLabel should return 10', () => {
    const expected = 70;
    const actual = declareHoneyLoopLabel();

    expect(actual).toBe(expected);
  });
});
describe(LEVELS.two, () => {
  it('declareHoneyBreakStatement should contain a break clause', () => {
    const expected = 'break';
    const actual = getTaskString(declareHoneyBreakStatement);

    expect(actual).toEqual(expect.stringContaining(expected));
  });

  it('declareHoneyBreakStatement should break the incremental flow of the loop', () => {
    const breakArguments = [[1, 2, 1, 2, 3, 1, 2], 5, 3];
    const expected = [6, 7, 6, 7, 3, 1, 2];
    const actual = declareHoneyBreakStatement(...breakArguments);

    expect(actual).toEqual(expected);
  });

  it('declareHoneyBreakStatement should break the incremental flow of the loop', () => {
    const breakArguments = [[7, 3, 8, 1, 12, 89, 102], 10, 12];
    const expected = [17, 13, 18, 11, 12, 89, 102];
    const actual = declareHoneyBreakStatement(...breakArguments);

    expect(actual).toEqual(expected);
  });

  it('alternateIngredients should contain a while loop', () => {
    const expected = 'while';
    const actual = getTaskString(alternateIngredients);

    expect(actual).toEqual(expect.stringContaining(expected));
  });

  it('alternateIngredients should contain a continue statement', () => {
    const expected = 'continue';
    const actual = getTaskString(alternateIngredients);

    expect(actual).toEqual(expect.stringContaining(expected));
  });

  it('alternateIngredients should return twice as much devilishLoopMix as secretHoneySauce', () => {
    const expected = [30, 60];
    const actual = alternateIngredients(30);

    expect(actual).toEqual(expected);
  });
  it('alternateIngredients should return twice as much devilishLoopMix as secretHoneySauce', () => {
    const expected = [200, 400];
    const actual = alternateIngredients(200);

    expect(actual).toEqual(expected);
  });
});
describe(LEVELS.three, () => {
  it('getKeyNames should contain a for...in loop', () => {
    const expected = ['for', 'in'];
    const actual = getTaskString(getKeyNames).split(' ');

    expect(actual).toEqual(expect.arrayContaining(expected));
  });

  it('getKeyNames should return a string of the key names in the given object', () => {
    const expected = 'lastName, firstName,';
    const actual = getKeyNames({
      lastName: 'Raskolnikof',
      firstName: 'Rodion',
    });

    expect(actual).toBe(expected);
  });

  it('getKeyNames should return a string of the key names in the given object', () => {
    const expected = 'animal, vegetable, mineral,';
    const actual = getKeyNames({
      animal: 'toad',
      vegetable: 'celeriac',
      mineral: 'charcoal',
    });

    expect(actual).toBe(expected);
  });
  it('generateArrayList should contain a for...of loop', () => {
    const expected = ['for', 'of'];
    const actual = getTaskString(generateArrayList).split(' ');

    expect(actual).toEqual(expect.arrayContaining(expected));
  });

  it('generateArrayList should return a string of the key names in the given object', () => {
    const expected = 'apple, pear, peach,';
    const actual = generateArrayList(['apple', 'pear', 'peach']);

    expect(actual).toBe(expected);
  });

  it('generateArrayList should return a string of the key names in the given object', () => {
    const expected = 'animal, vegetable, mineral,';
    const actual = generateArrayList(['animal', 'vegetable', 'mineral']);

    expect(actual).toBe(expected);
  });
});
