import Character from './basic';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type = 'undead');
    this.attack = 25;
    this.defence = 25;
  }
}
