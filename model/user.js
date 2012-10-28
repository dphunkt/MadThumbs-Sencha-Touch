Ext.define('mt.model.user', {
    extend: 'Ext.data.Model',
    requires: [
        //'mt.model.user.favorite'
        ],
    config: {
        fields: [       
            {
                name: 'user_id',
                type: 'int'
            },
            {
                name: 'username',
                type: 'string'
            }, 
            {   
                name: 'email',
                type: 'string' 
            },
            {   
                name: 'authed',
                type: 'boolean'
            },
            {
                name: 'password', 
                type: 'string'
            }
/*
            {
                name: 'profile_image',
                type: 'string'
            }
*/
        ],
        hasMany: [
        {
            associatedModel: 'mt.model.user.favorite',
            name : 'favorites',
            //filterProperty: 'username',
            store: {
                pageSize       : 10,
                clearOnPageLoad: false,
                grouper: {
                    groupFn: function(record) {
                       return Ext.String.capitalize(record.get('type') + 's');
                    }
                }
            }
        }
/*
        {
            associatedModel: 'mt.model.user.upload',
            name : 'uploads',
            filterProperty: 'username',
            store: {
                pageSize       : 10,
                remoteFilter   : true,
                clearOnPageLoad: false,
                grouper: {
                    groupFn: function(record) {
                       return Ext.String.capitalize(record.get('type') + 's');
                    }
                }
            }
        }
*/
        ],
        proxy: {
            type: 'localstorage',
            id  : 'user-data'
        }
    }
});