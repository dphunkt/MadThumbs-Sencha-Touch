Ext.define('mt.store.videos', {
    extend: 'Ext.data.Store',
    requires: ['mt.model.video'],
    config: {
        model: 'mt.model.video',
        autoLoad: true,
        //currentPage: 1,
        pageSize: 20,
        //override model proxy
        proxy: { 
            extraParams: {
                json: true
            },
            type: 'ajax',
            url: '/sencha',
            limitParam: 'l',
            noCache: false,
            pageParam: 'p',
            sortParam: 's',
            startParam: '',
            reader: {
                rootProperty: 'root',
                totalProperty: 'total',
                type : 'json'
            }
        }
    }
});