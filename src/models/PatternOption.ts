import PatternFile from "./PatternFile";

export default class PatternOption {
  id: number;
  growth_name: string;
  size_name: string;
  files: PatternFile[]

  constructor(id: number, growth_name: string, size_name: string, files: PatternFile[]) {
    this.id = id
    this.growth_name = growth_name
    this.size_name = size_name
    this.files = files
  }
}
