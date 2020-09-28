export default class BasePattern {
  id: number;
  name: string;
  user_group: number;

  constructor(id: number, name: string, user_group: number) {
    this.id = id
    this.name = name
    this.user_group = user_group
  }
}
