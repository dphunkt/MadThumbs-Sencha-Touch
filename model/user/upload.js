Ext.define('mt.model.user.upload', {
    extend: 'Ext.data.Model',
    requires: [
        'mt.model.album',
        'mt.model.video'
    ],
    config: {
        fields: [],
        belongsTo: 'mt.model.user',
        hasMany: [{
            associatedModel: 'mt.model.video',
            name : 'videos',
            associationKey: 'videos'
        },
        {
            associatedModel: 'mt.model.album',
            name: 'albums',
            associationKey: 'albums'
        }
/*
        {
            associatedModel: 'mt.model.model',
            name: 'models',
            associationKey: 'models'
        }
*/
        ],
        proxy: { 
            extraParams: {
                json: true
            },
            type: 'ajax',
            url: '/users/uploads',
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