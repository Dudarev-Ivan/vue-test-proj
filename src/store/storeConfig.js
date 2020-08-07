import newsRepository from "../api/newsRepository";

const mutations = {
    CREATE_NEWS_ITEM: "CREATE_NEWS_ITEM",
    DELETE_NEWS_ITEM: "DELETE_NEWS_ITEM",
    SET_NEWS: 'SET_NEWS',
}

export default {
    state: {
        news: []
    },
    mutations: {
        [mutations.CREATE_NEWS_ITEM]: (state, item) => {
            state.news.push(item);
        },

            [mutations.DELETE_NEWS_ITEM]: (state, id) => {
            state.news = state.news.filter(newsItem => newsItem.id !== id)
        },

            [mutations.SET_NEWS]: (state, news) => {
            state.news = news;
        },
    },
    actions: {
        async fetchNews({state, commit}) {
            let news = await newsRepository.getNews();
            await commit(mutations.SET_NEWS, news);
        },

        async fetchNewsItem({state, commit}, {id}) {
            let item = await newsRepository.getNewsItem(id);
            await commit(mutations.DELETE_NEWS_ITEM, item.id);
            await commit(mutations.CREATE_NEWS_ITEM, item);
        },

        async createNewsItem({state, commit}, {name, content}) {
            let item = await newsRepository.postNewsItem({name, content});
            await commit(mutations.CREATE_NEWS_ITEM, item);
        },

        async deleteNewsItem({state, commit}, item) {
            await newsRepository.deleteNewsItem(item.id)
            await commit(mutations.DELETE_NEWS_ITEM, item.id)
        },

        async updateNewsItem({state, commit}, item) {
            await newsRepository.putNewsItem(item);
            await commit(mutations.DELETE_NEWS_ITEM, item.id);
            await commit(mutations.CREATE_NEWS_ITEM, item);
        }
    },
    modules: {},
    getters: {
        getNews(state) {
            return state.news;
        },
        getNewsItem(state) {
            return (id) => {
                return state.news.find(newsItem => newsItem.id === id);
            };
        }
    }
}