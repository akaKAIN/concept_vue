import axios from '../node_modules/axios'
class ApiService extends ApiUrls {

    static getGroup(groupId: number = 0) {
        let activeGroup;
        let groups;
        axios.get(this.myPatternsUrl)
            .then(response => {
                const data = response.data

            })
    }
}
