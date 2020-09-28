export default class PatternFile {
  id: number;
  fileName: string;
  file: string;
  originalFileName: string;

  constructor(id: number, fileName: string, file: string, originalFileName: string) {
    this.id = id
    this.fileName = fileName
    this.file = file
    this.originalFileName = originalFileName
  }
}
