import Character from '../basic';

test('name shouldn`t contain less than 2 symbols', () => {
  expect(() => new Character('F', 'bowman')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('name shouldn`t contain more than 10 symbols', () => {
  expect(() => new Character('slvnsmskjs;mslemfe', 'bowman')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('invalid type', () => {
  expect(() => new Character('Лучник', 'bowerman')).toThrow(new Error('Ошибка! Неверный тип персонажа!'));
});

test('you can`t up level if character is dead', () => {
  const result = new Character('Лучник', 'bowman');
  result.health = 0;
  expect(() => result.levelUp()).toThrow(new Error('Ошибка! Персонаж умер!'));
});

test('you can`t damage character if he is already dead', () => {
  const result = new Character('Лучник', 'bowman');
  result.health = -10;
  expect(() => result.damage(3)).toThrow(new Error('Ошибка! Персонаж уже умер!'));
});
