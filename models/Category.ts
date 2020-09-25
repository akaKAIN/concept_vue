class Category extends BaseCategory {
  patterns: Pattern[];
  patternQuantity: number;

  constructor(categoryId: number, categoryName: string, patterns: Pattern[]) {
    super(categoryId, categoryName)
    this.categoryId = categoryId
    this.categoryName = categoryName
    this.patterns = patterns
    this.patternQuantity = patterns.length
  }

  private addQuantity(count: number = 1): void {
    this.patternQuantity += count
  }

  private subQuantity(count: number = 1): void {
    if (this.patternQuantity - count >= 0) {
      this.patternQuantity -= count
    }
  }

  hasPatterns(): boolean {
    return this.patterns.length > 0
  }

  private findPatternIndex(patternId: number): number {
    let ind = -1;
    this.patterns.find((pattern: Pattern, index: number) => {
      if (pattern.id === patternId) {
        ind = index;
        return true;
      } else {
        return false
      }
    })
    return ind
  }

  findSortedPositionForPush(patternId: number): number {
    let ind = -1
    if (!this.hasPatterns()) {
      return ind
    }
    this.patterns.find((pattern: Pattern, index: number) => {
      if (pattern.id > patternId) {
        ind = index
        return true
      } else {
        return false
      }
    })
    return ind
  }

  private deletePattern(ind: number): void {
    this.patterns.splice(ind, 1)
  }

  popPattern(patternId: number): Pattern | undefined {
    const ind = this.findPatternIndex(patternId)
    if (ind !== -1) {
      const pattern = this.patterns[ind]
      this.deletePattern(ind)
      this.subQuantity()
      return pattern
    }
  }

  pushPattern(pattern: Pattern): void {
    const ind = this.findSortedPositionForPush(pattern.id)
    ind === -1 ? this.patterns.push(pattern) : this.patterns.splice(ind, 0, pattern)
    this.addQuantity()
  }
}

const c = new Category(2, '123', [])
c.pushPattern(new Pattern(4, 'Shorts', 2, new Photo(0, 'photo', 3)))
console.log(c)
