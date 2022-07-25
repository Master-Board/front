export default {
    getHomeList: async () => {
        return [
            {
                title: 'parade',
                items: {results: [{number: 4}, {number: 3}, {number: 1}, {number: 5}, {number: 6}, {number: 2}, {number: 1}, {number: 4}, {number: 2}, {number: 6}, {number: 6}, {number: 5}]},
                people: 6
            },
            {
                title: 'deception',
                items: {results: [{number:2}, {number: 5}, {number: 2}, {number: 1}, {number: 2}]},
                people: 6
            },
            {
                title: 'tichu',
                items: {results: [{number:2}, {number: 3}, {number: 1}]},
                people: 4
            },
            {
                title: 'fertility',
                items: {results: [{number:2}, {number: 3}, {number: 1}]},
                people: 6
            },
        ];
    }
    
    
}