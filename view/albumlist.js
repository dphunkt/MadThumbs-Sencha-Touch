Ext.define('mt.view.albumlist', {
    extend: 'Ext.dataview.List',	
    xtype: 'albumlist',
    requires: ['Ext.Template'],
    config: {
        id: 'albumList',
        cls: 'listItem',
        emptyText: '<div style="margin-top: 20px; text-align: center">Nothing to show</div>',
        disableSelection: true,
        onItemDisclosure: true,
        itemTpl: new Ext.XTemplate([
            '<img src="{thumb}" height="80"/>',
            '<h4 class="title">{name}</h4>',
            '<p>',
            //'<strong>Added: </strong>{date}<br>',
            '{rating}% | {views} views<br>',
            '{count} images',
            '</p>'
        ]),
        plugins: [
            {
                type: 'listpaging',
                autoPaging: true,
                loadMoreText: 'Load more albums…',
                noMoreRecordsText: 'No more albums'
            }
        ],
        store: 'albums'
    }
});