const appData = (function(){

    let mainAddress = 'http://api.calendar.akai.test';

    return {
        apiAddr: {
            main: mainAddress,
            tasks: mainAddress + '/tasks?category_id=1',
            categories: mainAddress + '/categories'
        }
    }

})();

module.exports = appData;