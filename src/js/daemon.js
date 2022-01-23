import Character from './basic';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type = 'daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
