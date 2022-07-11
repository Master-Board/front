export default {
    getHomeList: async () => {
        return [
            {
                title: '퍼레이드',
                items: {results: [{number: 4}, {number: 3}, {number: 1}, {number: 5}, {number: 6}, {number: 2}, {number: 1}, {number: 4}, {number: 2}, {number: 6}, {number: 6}, {number: 5}]},
                people: 6
            },
            {
                title: '디셉션',
                items: {results: [{number:2}, {number: 5}, {number: 2}, {number: 1}, {number: 2}]},
                people: 6
            },
            {
                title: '티츄',
                items: {results: [{number:2}, {number: 3}, {number: 1}]},
                people: 4
            },
            {
                title: '퍼틸리티',
                items: {results: [{number:2}, {number: 3}, {number: 1}]},
                people: 6
            },
        ];
    }
    
    
}