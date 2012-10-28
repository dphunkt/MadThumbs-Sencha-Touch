Ext.define('mt.view.videolist', {
    extend: 'Ext.dataview.NestedList',	
    xtype: 'videolist',
    requires: ['Ext.Template', 'Ext.plugin.PullRefresh', 'Ext.plugin.ListPaging'],
    config: {
        title: 'Videos',
        iconMask: true,
        iconCls: 'video',
        cls: 'listItem',
        displayField: 'title',
        onItemDisclosure: function(record, btn, index) {           
           var parent = this.getParent(); 
           parent.setActiveItem(parent.getDetailCard());
        },
/*
        plugins: [
        {
            type: 'listpaging',
            autoPaging: true,
            loadMoreText: 'More videos…'
        },
        {
            type: 'pullrefresh',
            releaseRefreshText: 'Loading more videos…',
            pullRefreshText: 'Release to update videos…'
        }
        ],
*/
        store: 'videos'
    },
    getItemTextTpl: function(node) {
        return ['<tpl if="leaf !== true"><img src="{thumb}" height="80"/><strong>{title}</strong></tpl>',
                '<tpl if="leaf === true">',
                '<img src="{thumb}"/>',
                '<ul><li><strong>Description:</strong> {description}</li><li><strong>Views:</strong> {views}</li><li><strong>Rating: </strong>{rating}</li></ul>',
                '</tpl>'].join('');
    },
/*
    getTitleTextTpl: function(node) {
    },
    getDetailContainer: function(){
    },
*/
    getDetailCard: function(item, parent) {
        return Ext.getCmp('thePlayer') || Ext.create('mt.view.player');
    }
});