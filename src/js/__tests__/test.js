import Character from '../basic';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('should create character', () => {
  const bowman = new Bowman('Лучник');
  const swordsman = new Swordsman('Мечник');
  const magician = new Magician('Маг');
  const daemon = new Daemon('Демон');
  const undead = new Undead('Вампир');
  const zombie = new Zombie('Зомби');
  const result = [
    [bowman.name, bowman.type, bowman.attack, bowman.deffence],
    [swordsman.name, swordsman.type, swordsman.attack, swordsman.deffence],
    [magician.name, magician.type, magician.attack, magician.deffence],
    [daemon.name, daemon.type, daemon.attack, daemon.deffence],
    [undead.name, undead.type, undead.attack, undead.deffence],
    [zombie.name, zombie.type, zombie.attack, zombie.deffence],
  ];
  const expected = [
    ['Лучник', 'bowman', 25, 25],
    ['Мечник', 'swordsman', 40, 10],
    ['Маг', 'magician', 10, 40],
    ['Демон', 'daemon', 10, 40],
    ['Вампир', 'undead', 25, 25],
    ['Зомби', 'zombie', 40, 10],
  ];
  expect(result).toEqual(expected);
});

test('should up level', () => {
  const bowman = new Bowman('Лучник');
  bowman.health = 80;
  bowman.level = 3;
  bowman.levelUp();
  const swordsman = new Swordsman('Мечник');
  swordsman.health = 80;
  swordsman.level = 2;
  swordsman.levelUp();
  const magician = new Magician('Маг');
  magician.health = 100;
  magician.level = 5;
  magician.levelUp();
  const daemon = new Daemon('Демон');
  daemon.health = 60;
  daemon.level = 1;
  daemon.levelUp();
  const undead = new Undead('Вампир');
  undead.health = 50;
  undead.level = 1;
  undead.levelUp();
  const zombie = new Zombie('Зомби');
  zombie.health = 20;
  zombie.level = 1;
  zombie.levelUp();
  const result = [
    [bowman.name, bowman.type, bowman.attack, bowman.deffence, bowman.health, bowman.level],
    [swordsman.name, swordsman.type, swordsman.attack, swordsman.deffence, swordsman.health, swordsman.level],
    [magician.name, magician.type, magician.attack, magician.deffence, magician.health, magician.level],
    [daemon.name, daemon.type, daemon.attack, daemon.deffence, daemon.health, daemon.level],
    [undead.name, undead.type, undead.attack, undead.deffence, undead.health, undead.level],
    [zombie.name, zombie.type, zombie.attack, zombie.deffence, zombie.health, zombie.level],
  ];
  const expected = [
    ['Лучник', 'bowman', 30, 30, 100, 4],
    ['Мечник', 'swordsman', 48, 12, 100, 3],
    ['Маг', 'magician', 12, 48, 100, 6],
    ['Демон', 'daemon', 12, 48, 100, 2],
    ['Вампир', 'undead', 30, 30, 100, 2],
    ['Зомби', 'zombie', 48, 12, 100, 2],
  ];
  expect(result).toEqual(expected);
});

test('should make damage', () => {
  const bowman = new Bowman('Лучник');
  bowman.health = 80;
  bowman.damage(3);
  const swordsman = new Swordsman('Мечник');
  swordsman.health = 80;
  swordsman.damage(3);
  const magician = new Magician('Маг');
  magician.health = 100;
  magician.damage(3);
  const daemon = new Daemon('Демон');
  daemon.health = 60;
  daemon.damage(3);
  const undead = new Undead('Вампир');
  undead.health = 50;
  undead.damage(3);
  const zombie = new Zombie('Зомби');
  zombie.health = 20;
  zombie.damage(3);
  const result = [
    [bowman.name, bowman.type, bowman.health],
    [swordsman.name, swordsman.type, swordsman.health],
    [magician.name, magician.type, magician.health],
    [daemon.name, daemon.type, daemon.health],
    [undead.name, undead.type, undead.health],
    [zombie.name, zombie.type, zombie.health],
  ];
  const expected = [
    ['Лучник', 'bowman', Math.floor(77.75)],
    ['Мечник', 'swordsman', Math.floor(77.3)],
    ['Маг', 'magician', Math.floor(98.2)],
    ['Демон', 'daemon', Math.floor(58.2)],
    ['Вампир', 'undead', Math.floor(47.75)],
    ['Зомби', 'zombie', Math.floor(17.3)],
  ];
  expect(result).toEqual(expected);
});
