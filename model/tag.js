Ext.define('mt.model.tag', {
    extend: 'Ext.data.Model',
    requires: [
        'mt.model.video'
    ],
    config: {
        fields: [
            {
                name: 'tag_id', 
                type: 'int'
            },
            {
                name: 'name', 
                type: 'string'
            },
            {
                name: 'title', 
                type: 'string'
            },
            {
                name: 'count',
                type: 'int'
            }
        ],
        //creates an association between models and returns a store
        //the created store is automatically scoped to the videos for the tag
        hasMany: {
            associatedModel: 'mt.model.video', 
            name: 'videos',
            filterProperty: 'name'
        }
    }
});