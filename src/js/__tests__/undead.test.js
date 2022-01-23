import Undead from '../undead';

test('should create new character Undead', () => {
  const result = new Undead('Вампир', 'undead');
  const expected = {
    name: 'Вампир',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expected);
});

test('should up level', () => {
  const result = new Undead('Вампир', 'undead');
  result.health = 50;
  result.level = 1;
  result.levelUp();
  const expected = {
    name: 'Вампир',
    type: 'undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(result).toEqual(expected);
});

test('should make damage', () => {
  const result = new Undead('Вампир', 'undead');
  result.health = 50;
  result.damage(3);
  const expected = 47.75;

  expect(result.health).toBeCloseTo(expected);
});
