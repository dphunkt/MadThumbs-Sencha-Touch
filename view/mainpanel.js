Ext.define('mt.view.mainpanel', {
	extend: 'Ext.tab.Panel',
	xtype: 'mainpanel',
	requires: ['Ext.navigation.View'],
	config: {
	    id: 'mainPanel',
		layout: 'card',
		fullscreen: true,
		tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
		items: [
/*
			{
                xtype: 'navbar'
			},
*/
			{
				xtype: 'videonav'
			},
			{
                xtype: 'albumnav'
            },
            {
                xtype: 'searchnav'
            },
            {
                xtype: 'modelnav'
            },
            {
                xtype: 'morenav'
            }
		]
	}
});