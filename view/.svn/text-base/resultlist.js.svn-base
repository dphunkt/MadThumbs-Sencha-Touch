/**
* The resultlist component is a simple dataview which is used to display the
* results returned by search or for user favorites/uploads.
*/
Ext.define('mt.view.resultlist', {
    extend: 'Ext.dataview.List',
    xtype: 'resultlist',
    requires: [
        'Ext.XTemplate',
        'Ext.plugin.ListPaging'
    ],
    config: {
        //ui: 'searchresults',
        cls: 'listItem',
        onItemDisclosure: true,
        allowDeselect: false,
        //useComponents: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">Nothing to show</div>',
        disableSelection: true,
        //defaultType  : 'resultlistitem',
        grouped: true,
        itemTpl: new Ext.XTemplate(
            '<img src="{thumb}" height="80"/>',
            '<h4 class="title">',
                '<tpl if="title">',
                    '{title}',
                '</tpl>',
                '<tpl if="alias">',
                    '{alias}',
                '</tpl>',            
                '<tpl if="name">',
                    '{name}',
                '</tpl>',
            '</h4>',
			'<p>',
                //'<strong>Added: </strong>{date}<br>',
                '<tpl if="rating">',
                    '{rating}%',
                '</tpl>',
                '<tpl if="views">',
                    ' | {views} views<br>',
                '</tpl>',
                '<tpl if="count">',
                    '{count} images',
                '</tpl>',
                '<tpl if="duration">',
                    '<strong>{duration}</strong>',
                '</tpl>',
            '</p>'
        ),
        plugins: [
            {
                type: 'listpaging',
                autoPaging: true,
                loadMoreText: 'Load more results…',
                noMoreRecordsText: 'No more results'
            }
        ]
    }
});