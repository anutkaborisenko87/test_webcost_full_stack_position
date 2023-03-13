import axios from "axios";

function createNewLink(params) {
    return axios.post('api/new_url', params).then((response) => {
        return {
            newLink: response.data
        };
    }).catch(err=> {
        return {
            newLink: err.response.data,
        };
    });
}

function getLinksList() {
    return axios.get('api/link_list').then((response) => {
        return {
            link_list: response.data.data
        };
    });
}

function countRedirectLink(params) {
    return axios.get('api/link_redirected/'+ params).then((response) => {
        return {
            redirectedLink: response.data
        };
    });
}

export default {
    createNewLink,
    getLinksList,
    countRedirectLink
}
