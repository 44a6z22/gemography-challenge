import axios from "axios";

export default class GithubService{

    getTopHundredRepositories(date, page, recordsPerPage){
        return axios.get(`https://api.github.com/search/repositories?q=created:>${date}&per_page=${recordsPerPage}&sort=stars&order=desc&page=${page}`)
                    .then(res => res.data);
    }
}