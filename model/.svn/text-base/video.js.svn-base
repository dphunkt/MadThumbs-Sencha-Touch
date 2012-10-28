Ext.define('mt.model.video', {
    extend: 'Ext.data.Model',
    requires: [
        'mt.proxy.video'
    ],
    config: {
        fields: [
            {
                name: 'video_id',
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
                name: 'title', 
                type: 'string'
            },
            {
                name: 'date',
                type: 'string'
            },
            {
                name: 'duration',
                type: 'string'
            },
            {   
                name: 'description', 
                type: 'string'
            },
            {
                name: 'mp4_url',
                type: 'string'
            },
            {
                name: 'views',
                type: 'number'
            },
            {
                name: 'rating',
                type: 'number'
            }
        ],
        hasMany: [
            {
                associatedModel: 'mt.model.model',
                name : 'models',
                associationKey: 'models'
                //filterProperty: 'video_id'
            },
            {
                associatedModel: 'mt.model.tag',
                name: 'tags',
                associationKey: 'tags'
            }
        ],
        proxy: {
            type: 'video'
        }
    }
});