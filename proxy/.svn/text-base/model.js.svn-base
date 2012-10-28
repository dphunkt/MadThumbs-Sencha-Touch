Ext.define('mt.proxy.model', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.model',
    config: {
        extraParams: {
            json: true
        },
        url: '/pornstar/sencha/',
        limitParam: '',
        noCache: false,
        filterParam: '',
        pageParam: '',
        sortParam: '',
        startParam: '',
        reader: {
            //rootProperty: 'root',
            type : 'json'
        }
    }
/*
    buildRequest: function(operation) {
        console.log(operation);
        var request = this.callParent(arguments),
            filter  = operation.getFilters()[0],
            id;

        if (filter) {
            id = filter.getValue();
            request.setUrl(this._url + id);

            // As we're modifiying the request params, we need to regenerate the url now
            request.setUrl(this.buildUrl(request));
        }

        return request;
    } 
*/   
});