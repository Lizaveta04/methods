import Bowman from '../bowman';

test('should create new character Bowman', () => {
  const result = new Bowman('Лучник', 'bowman');
  const expected = {
    name: 'Лучник',
    type: 'bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expected);
});

test('should up level', () => {
  const result = new Bowman('Лучник', 'bowman');
  result.health = 80;
  result.level = 3;
  result.levelUp();
  const expected = {
    name: 'Лучник',
    type: 'bowman',
    health: 100,
    level: 4,
    attack: 30,
    defence: 30,
  };

  expect(result).toEqual(expected);
});

test('should make damage', () => {
  const result = new Bowman('Лучник', 'bowman');
  result.health = 80;
  result.damage(3);
  const expected = 77.75;

  expect(result.health).toBeCloseTo(expected);
});
