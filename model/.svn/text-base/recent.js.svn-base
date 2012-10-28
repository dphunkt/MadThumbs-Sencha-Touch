Ext.define('mt.model.recent', {
    extend: 'Ext.data.Model',
    requires: [
        'mt.model.video',
        'mt.model.model',
        'mt.model.album'
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
/*
        hasMany: [
            {
                associatedModel: 'mt.model.video',
                name : 'videos'
            },
            {
                associatedModel: 'mt.model.album',
                name: 'albums'
            },
            {
                associatedModel: 'mt.model.model',
                name: 'models'
            }
        ],
*/
        proxy: {
            type: 'localstorage',
            id  : 'recently-viewed'
        }
    }
});