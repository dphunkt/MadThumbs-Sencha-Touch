Ext.define('mt.model.suggest', {
    extend: 'Ext.data.Model',
    requires: [
        'mt.model.search'
        ],
    config: {
        fields: [
        {
            name: 'query',
            type: 'string'
        }],
        //creates an association between models and returns a store
        //the created store is automatically scoped to the searches for the user
        hasMany: [{
            associatedModel: 'mt.model.search',
            name : 'searches',
            filterProperty: 'query',
            store: {
                pageSize       : 20,
                remoteFilter   : true,
                clearOnPageLoad: false,
                grouper: {
                    groupFn: function(record) {
                       return Ext.String.capitalize(record.get('type') + 's');
                    }
                }
            }
        }],
        proxy: {
            type: 'localstorage',
            id  : 'search-suggest'
        }
    }
});