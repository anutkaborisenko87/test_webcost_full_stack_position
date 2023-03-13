import axios from "axios";

function createNewLink(params) {
    return axios.post('api/new_url', params).then((response) => {
        return {
            newLink: response.data
        };
    }).catch(err=> {
        return {
            newLink: err.response.data.message,
        };
    });
}

export default {
    createNewLink
}
