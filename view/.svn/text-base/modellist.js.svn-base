Ext.define('mt.view.modellist', {
    extend: 'Ext.dataview.List',	
    alias: 'widget.modellist',
    requires: [
        'Ext.XTemplate', 
        //'Ext.dataview.IndexBar', 
        //'Ext.plugin.PullRefresh', 
        'Ext.plugin.ListPaging'
    ],
    config: {
        id: 'modelList',
        grouped: true,
        onItemDisclosure: true,
        pinHeaders: false,
        emptyText: '<div style="margin-top: 20px; text-align: center">Nothing to show</div>',
        disableSelection: true,
        indexBar: {
            id: 'modelIndexBar',
            //padding: '20',
            ui: 'alphabet',
            //direction: 'horizontal',
            //listPrefix: '',
            //letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            alphabet: true
        },
        itemTpl: new Ext.XTemplate([
            '<img src="{thumb}" height="80"/>',
            '<strong class="title">{alias}</strong>'
        ]), 
        plugins: [
            {
                type: 'listpaging',
                autoPaging: true,
                loadMoreText: 'Load more pornstars…',
                noMoreRecordsText: 'No more models'
            }
        ],
        store: 'models'
    }
});