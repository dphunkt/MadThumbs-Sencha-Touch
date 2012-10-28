Ext.define('mt.model.album', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'album_id',
                type: 'int'
            },
            {
                name: 'type',
                type: 'string'
            },
            {
                name: 'thumb', 
                type: 'string'
            },
            {
                name: 'large_thumb', 
                type: 'string'
            },
            {   
                name: 'name', 
                type: 'string'
            },
            {   
                name: 'date',
                type: 'string'
            },
            {   
                name: 'views',
                type: 'int'
            },
            {   
                name: 'description', 
                type: 'string'
            },
            {
                name: 'count',
                type: 'int'
            },
            {
                name: 'rating',
                type: 'number'
            }
        ],
        hasMany: [
            {
                associatedModel: 'mt.model.image',
                name : 'images',
                associationKey: 'images'
            },
            {
                associatedModel: 'mt.model.model',
                name : 'models',
                associationKey: 'models'
            },
            {
                associatedModel: 'mt.model.tag',
                name: 'tags',
                associationKey: 'tags'
            }
        ],
/*
        proxy: {
            //autoload: true,
            extraParams: {
                'json': true
            },
            type: 'ajax',
            url: '/images/albums/sencha',
            noCache: false,
            reader: {
                type: 'json',
                successProperty: 'success'
            }
        }
*/
    }
});