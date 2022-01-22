import Character from './basic';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'zombie';
    this.attack = 40;
    this.deffence = 10;
  }
}
