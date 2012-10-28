Ext.define('mt.view.searchpanel', {
    extend: 'Ext.Panel',
    xtype : 'searchpanel',
    requires: ['Ext.field.Text', 'Ext.dataview.List', 'Ext.field.Search', 'Ext.form.FieldSet', 'mt.view.searchlist', 'mt.view.resultlist'],
    config: {
        title: 'Search',
        id: 'searchPanel',
        url: '/search',
        iconMask: true,
        iconCls: 'search2',
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                //height: 50,
                items: [{
                    xtype: 'spacer'
                },
                {
                    clearIcon: true,
                    xtype: 'searchfield',
                    placeHolder: 'Search MadThumbs…'
                },
                {
                    xtype: 'spacer'
                }]
            },
            {
                xtype: 'panel',
                width: Ext.os.is.iOS ? 280 : 300,
                height: Ext.os.is.iOS ? 220 : 300,
                layout: 'fit',
                id: 'searchSuggest',
                //styleHtmlContent: true,
                items: [
                {
                    docked: 'top',
                    ui: 'light',
                    xtype: 'toolbar',
                    title: 'Recent Searches'
                },
                {
                    xtype: 'searchlist'
                }],
                hidden: true
            },
            {
                xtype: 'resultlist',
            }
        ]
    }
});