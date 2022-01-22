export default class Character {
  constructor(name) {
    this.name = name;
    this.type = 'type';
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  checkName(name) {
  	if (this.name.length < 2 || this.name.length > 10) {
  		throw new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!');
  	}
  }

  checkType(type) {
  	if (typeof this.type !== 'string') {
  		throw new Error('Ошибка! Тип персонажа не может быть числом!');
  	}
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Ошибка! Персонаж умер!');
    }
    this.health = 100;
    this.level += 1;
    this.attack *= 1.2;
    this.deffence *= 1.2;
  }

  damage(points) {
    if (this.health < 0) {
      return;
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
