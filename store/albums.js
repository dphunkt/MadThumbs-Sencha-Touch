Ext.define('mt.store.albums', {
    extend: 'Ext.data.Store',
    requires: ['mt.model.album'],
    config: {
        model: 'mt.model.album',
        autoLoad: true,
        currentPage: 1,
        pageSize: 20,
        proxy: {
            extraParams: {
                json: true
            },
            type: 'ajax',
            url: '/images/albums',
            limitParam: 'l',
            noCache: false,
            pageParam: 'p',
            sortParam: 's',
            startParam: '',
            reader: {
                totalProperty: 'total',
                rootProperty: 'root',
                type: 'json'
            }
        }
    }    
});