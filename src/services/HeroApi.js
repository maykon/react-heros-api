import axios from 'axios'

export default axios.create({
    baseURL: `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api`
})