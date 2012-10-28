Ext.define('mt.store.tags', {
    extend: 'Ext.data.Store',
    requires: ['mt.model.tag'],
    config: {
        model: 'mt.model.tag',
        autoLoad: true,
        clearOnPageLoad: false,
        currentPage: 1,
        proxy: {
            extraParams: {
                json: true
            },
            type: 'ajax',
            url: '/categories',
            limitParam: '',
            noCache: false,
            pageParam: '',
            sortParam: '',
            startParam: ''
        }
    }
});