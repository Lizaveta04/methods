import Character from './basic';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type = 'swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
