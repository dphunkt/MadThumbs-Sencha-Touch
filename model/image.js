Ext.define('mt.model.image', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'image_id',
                type: 'int'
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
                name: 'description', 
                type: 'string'
            },
            {
                name: 'rating',
                type: 'number'
            },
            {
                name: 'views',
                type: 'int'
            }
        ]
    }
});