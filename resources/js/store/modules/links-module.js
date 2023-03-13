import service from '../services/links-service';

const state = {
    newLink: {},
    link_list: {},
    redirectedLink: {}
};

const mutations = {
    SET_NEW_LINK: (state, newLink) => {
        state.newLink = newLink;
    },
    SET_LINKS_LIST: (state, link_list) => {
        state.link_list = link_list;
    },
    SET_LINK_REDIRECT_COUNT: (state, redirectedLink) => {
        state.redirectedLink = redirectedLink;
    }
};

const actions = {
    newLink({commit, dispatch}, params) {
        return service.createNewLink(params).then(({newLink}) => {
           commit('SET_NEW_LINK', newLink);
        });
    },
    link_list({commit, dispatch}, params) {
        return service.getLinksList(params).then(({link_list}) => {
            commit('SET_LINKS_LIST', link_list)
        })
    },
    redirectedLink({commit, dispatch}, params) {
        return service.countRedirectLink(params).then(({redirectedLink}) => {
            commit('SET_LINK_REDIRECT_COUNT', redirectedLink)
        })
    }
}

const getters = {
    newLink: state => state.newLink,
    link_list: state => state.link_list,
    redirectedLink: state => state.redirectedLink,
};

const links = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default links;
