export default class BaseCategory {
  categoryId: number;
  categoryName: string;
  constructor(categoryId: number, categoryName: string) {
    this.categoryId = categoryId
    this.categoryName = categoryName
  }
}
