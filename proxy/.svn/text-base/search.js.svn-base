Ext.define('mt.proxy.search', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.search',
    //requires: ['mt.model.search'],
    filterParam: undefined,
    config: {
        extraParams: {
            json: true
        },
        url: '/search',
        limitParam: 'l',
        noCache: false,
        filterParam: '',
        pageParam: 'p',
        sortParam: 's',
        startParam: '',
        reader: {
            //rootProperty: 'results',
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
            params  = request.getParams();

/*
        Ext.apply(params, {
            rpp: operation.getLimit(),
            page: operation.getPage()
        });
*/

        if (filter) {
            delete params.filter;
            Ext.apply(params, {
                q: filter.getValue() // pass in the query string to the search call
            });

            request.setParams(params);
            request.setUrl(this._url);

            // As we're modifiying the request params, we need to regenerate the url now
            request.setUrl(this.buildUrl(request));
        }

        return request;
    }    
});