import Pattern from "./Pattern";

export default class Group {
    userGroup: number;
    groupName: string;
    patternsCount: number;
    patternsCategory?: Pattern[]

    constructor(userGroup: number, groupName: string, patternCount: number, patternCategory?: Pattern[]) {
        this.userGroup = userGroup
        this.groupName = groupName
        this.patternsCount = patternCount
        this.patternsCategory = patternCategory
    }
}
