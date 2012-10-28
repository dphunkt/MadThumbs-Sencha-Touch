Ext.define('mt.model.user.favorite', {
    extend: 'Ext.data.Model',
    requires: [
        'mt.model.album',
        'mt.model.video',
        'mt.model.user'
    ],
    config: {
        fields: [
            {
                name: 'user_id',
                type: 'int'            
            }
        ],
        belongsTo: 'mt.model.user',
        hasMany: [
            {
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
            type: 'rest',
            url: '/users/favorites',
            filterParam: undefined,
            limitParam: 'l',
            noCache: false,
            pageParam: 'p',
            sortParam: 's',
            startParam: undefined,
            reader: {
                totalProperty: 'total',
                type : 'json'
            }
        }
    }
});