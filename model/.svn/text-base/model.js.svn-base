Ext.define('mt.model.model', {
    extend: 'Ext.data.Model',
    requires: [
        'mt.model.video',
        'mt.proxy.model'
    ],
    config: {
        fields: [
            {   
                name: 'model_id', 
                type: 'int' 
            },
            {
                name: 'type',
                type: 'string'
            },        
            {   name: 'alias', 
                type: 'string'
            }, 
            {   name: 'thumb', 
                type: 'string' 
            }, 
            {   name: 'large_thumb', 
                type: 'string' 
            }, 
            {   name: 'rating', 
                type: 'number' 
            },
            {   name: 'measurements',
                type: 'string'
            },
            {   name: 'sexuality',
                type: 'string'
            },
            {   name: 'ethnicity',
                type: 'string' 
            },
            {   name: 'height',
                type: 'string' 
            },
            {   name: 'weight', 
                type: 'string' 
            },
            {   name: 'haircolor',
                type: 'string' 
            },
            {   name: 'eyecolor',
                type: 'string'
            }
        ],
        hasMany: [
            {
                associatedModel: 'mt.model.video',
                name : 'videos'
            }
        ],
        proxy: {
            type: 'model'
        }
    }
});