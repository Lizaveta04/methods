export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!');
    } else {
      this.name = name;
    }
    if (typeof type !== 'string') {
      throw new Error('Ошибка! Тип персонажа не может быть числом!');
    } else if (type !== 'bowman' && type !== 'swordsman' && type !== 'magician' && type !== 'daemon' && type !== 'undead' && type !== 'zombie') {
      throw new Error('Ошибка! Неверный тип персонажа!');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Ошибка! Персонаж умер!');
    }
    this.health = 100;
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health < 0) {
      return;
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
