Ext.define('mt.view.videolist', {
    extend: 'Ext.dataview.List',
    xtype: 'videolist',
    requires: [
        'Ext.Template', 
        'Ext.plugin.PullRefresh', 
        'Ext.plugin.ListPaging'
    ],
    config: {
        cls: 'listItem',
        onItemDisclosure: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">Nothing to show</div>',
        disableSelection: true,
        itemTpl: new Ext.XTemplate(
            '<img src="{thumb}" height="80"/>',
            '<h4 class="title">{title}</h4>',
			'<p>',
                //'<strong>Added: </strong>{date}<br>',
                '<span class="green">{rating}%</span> | {views} views<br>',
                '<strong>{duration}</strong>',
            '</p>', {
                disableFormats: true
            }
        ),
        plugins: [
        {
            type: 'listpaging',
            autoPaging: true,
            loadMoreText: 'Load more videos…',
            noMoreRecordsText: 'No more videos'
        }
/*
        {
            type: 'pullrefresh',
            releaseRefreshText: 'Loading more videos…',
            pullRefreshText: 'Release to update videos…'
        }
*/
        ],
        store: 'videos'
    }
});