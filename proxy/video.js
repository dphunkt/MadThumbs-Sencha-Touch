/**
 * The video proxy loads vids based on category.
 * It appends the category name to the end of the url and submits the request to the server/mobile controller.
 */
Ext.define('mt.proxy.video', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.video',
    config: {
        extraParams: {
            json: true
        },
        url: '/sencha/',
        limitParam: 'l',
        noCache: false,
        filterParam: '',
        pageParam: 'p',
        sortParam: 's',
        startParam: '',
        reader: {
            rootProperty: 'root',
            totalProperty: 'total',
            type : 'json'
        }
    },
    /**
     * We need to add a slight customization to buildRequest - we're just checking for a filter on the
     * Operation and adding it to the request params/url, and setting the start/limit if paging
     */
    buildRequest: function(operation) {
        var request = this.callParent(arguments),
            filter  = operation.getFilters()[0],
            cat;

        if (filter) {
            cat = filter.getValue();
            request.setUrl(this._url + cat);

            // As we're modifiying the request params, we need to regenerate the url now
            request.setUrl(this.buildUrl(request));
        }

        return request;
    }    
});