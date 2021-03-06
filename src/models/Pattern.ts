import Photo from "./Photo";
import BasePattern from "./BasePattern";

export default class Pattern extends BasePattern {
  photo: Photo;

  constructor(id: number, name: string, userGroup: number, photo: Photo) {
    super(id, name, userGroup)
    this.photo = photo
  }
}
