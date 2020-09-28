import ApiUrls from './ApiUrls'

export default class ApiService extends ApiUrls {
    static getGroup(groupId = 0):void {
        console.log(groupId)
    }
}
