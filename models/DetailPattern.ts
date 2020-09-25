class DetailPattern extends BasePattern {
  photo: Photo[];
  category: BaseCategory;
  patternUrl: string;
  description: string;
  options: PatternOption[]

  constructor(id: number, name: string, user_group: number, photo: Photo[], category: BaseCategory,
              patternUrl: string, description: string, options: PatternOption[]) {
    super(id, name, user_group)
    this.photo = photo
    this.category = category
    this.patternUrl = patternUrl
    this.description = description
    this.options = options
  }
}
