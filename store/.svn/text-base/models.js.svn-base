Ext.define('mt.store.models', {
    extend: 'Ext.data.Store',
    requires: ['mt.model.model'],
    config: {
        model: 'mt.model.model',
        autoLoad: true,
        clearOnPageLoad: false,
        currentPage: 1,
        pageSize: 20,
        proxy: {
            extraParams: {
                json: true,
                ltr: 'a',
                s: 'letter'
            },
            type: 'ajax',
            url: '/pornstars',
            limitParam: 'l',
            noCache: false,
            pageParam: 'p',
            sortParam: '',
            startParam: '',
            reader: {
                rootProperty: 'root',
                totalProperty: 'total',
                type: 'json'
            }
        },
        remoteSort: true,
        grouper: {
            groupFn: function(record) {
               return record.get('alias')[0];
            }
        }
    }
});