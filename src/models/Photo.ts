export default class Photo {
  id: number;
  image: string;
  myOrder: number;
  thumbnail?: string | undefined;

  constructor(id: number, image: string, myOrder: number, thumbnail?: string) {
    this.id = id
    this.image = image
    this.myOrder = myOrder
    this.thumbnail = thumbnail
  }
}
