import Character from './basic';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type = 'zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
