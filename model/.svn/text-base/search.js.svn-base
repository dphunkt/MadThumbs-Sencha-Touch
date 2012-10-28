Ext.define('mt.model.search', {
    extend: 'Ext.data.Model',
    requires: ['mt.proxy.search'],
    config: {
        fields: [],
        belongsTo: 'mt.model.suggest',
        hasMany: [{
            associatedModel: 'mt.model.video',
            name : 'videos',
            associationKey: 'videos'
        },
        {
            associatedModel: 'mt.model.album',
            name: 'albums',
            associationKey: 'albums'
        },
        {
            associatedModel: 'mt.model.model',
            name: 'models',
            associationKey: 'models'
        }],
        proxy: {
            type: 'search'
        }
    }
});