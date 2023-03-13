import service from '../services/links-service';

const state = {
    newLink: {}
};

const mutations = {
    SET_NEW_LINK: (state, newLink) => {
        state.newLink = newLink;
    }
};

const actions = {
    newLink({commit, dispatch}, params) {
        return service.createNewLink(params).then(({newLink}) => {
           commit('SET_NEW_LINK', newLink);
        });
    }
}

const getters = {
    newLink: state => state.newLink
};

const links = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default links;
