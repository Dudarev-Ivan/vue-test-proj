function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const sleepTime = 100;

var news = [
    {id: '1', name: "News item1 header", content: "News item1 content"},
    {id: '2', name: "News item2 header", content: "News item2 content"},
    {id: '3', name: "News item3 header", content: "News item3 content"},
    {id: '4', name: "News item4 header", content: "News item4 content"}
];
var newsItemsCounter = 5;

export default {
    getNews: async () => {
        await sleep(sleepTime)
        return news;
    },

    getNewsItem: async (id) => {
        await sleep(sleepTime)
        let item = news.find(newsItem => newsItem.id === id);
        if (item) {
            return item;
        }
        throw 'Not found'
    },

    postNewsItem: async (item) => {
        await sleep(sleepTime)
        let id = newsItemsCounter++;
        return {
            ...item,
            id: id.toString()
        }
    },

    deleteNewsItem: async (id) => {
        await sleep(sleepTime)
        let item = news.find(newsItem => newsItem.id === id);
        if (item) {
            news = news.filter(newsItem => newsItem.id !== id);
            return {status: 'OK'};
        }
        throw 'Not found'
    },

    putNewsItem: async (item) => {
        await sleep(sleepTime)
        let persistedItem = news.find(newsItem => newsItem.id === item.id);
        if (persistedItem) {
            persistedItem.name = item.name;
            persistedItem.content = item.content;
            return {status: 'OK'};
        }
        throw 'Not found'
    }
}