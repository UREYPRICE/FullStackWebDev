import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {

return axios.get(baseUrl)


}

const create = addobj =>{

    return axios.post(baseUrl, addobj)

}

export default {
    getAll: getAll,
    create: create
}