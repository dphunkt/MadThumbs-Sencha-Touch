Ext.define('mt.store.searches', {
    extend: 'Ext.data.Store',
    requires: ['mt.model.search'],
    config: {
        model: 'mt.model.search',
        //autoLoad: true,
        //currentPage: 1,
        pageSize: 20,
        proxy: {
            extraParams: {
                json: true
            },
            type: 'ajax',
            url: '/search',
            limitParam: 'l',
            noCache: false,
            pageParam: 'p',
            sortParam: 's',
            startParam: '',
            reader: {
                totalProperty: 'total',
                type : 'json'
            }
        }
    }
});