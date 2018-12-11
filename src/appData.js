const appData = (function(){

    let mainAddress = 'http://api.calendar.akai.test';

    return {
        apiAddr: {
            main: mainAddress,
            backendTasks: mainAddress + '/tasks?category_id=1',
            frontendTasks: mainAddress + '/tasks?category_id=2',
            mobileTasks: mainAddress + '/tasks?category_id=3',
            designTasks: mainAddress + '/tasks?category_id=4',
            categories: mainAddress + '/categories'
        }
    }

})();

module.exports = appData;