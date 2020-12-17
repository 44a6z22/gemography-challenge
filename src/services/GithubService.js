import axios from "axios";

export default class GithubService{

    getTopHundredRepositories(date, page){
        return axios.get(`https://api.github.com/search/repositories?q=created:>${date}&per_page=10&sort=stars&order=desc&page=${page}`)
                    .then(res => res.data);
    }
}