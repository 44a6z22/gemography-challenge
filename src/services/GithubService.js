import axios from "axios";

export default class GithubService{

    getTopHundredRepositories(date){
        return axios.get(`https://api.github.com/search/repositories?q=created:>${date}&per_page=1000&sort=stars&order=desc`)
                    .then(res => res.data);
    }
}