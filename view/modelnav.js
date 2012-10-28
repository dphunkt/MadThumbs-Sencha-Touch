Ext.define('mt.view.modelnav', {
    extend: 'Ext.NavigationView',
	xtype: 'modelnav',
	requires: [
	   'mt.view.modellist'
   ],
    config: {
        title: 'Pornstars',
        useTitleForBackButtonText: true,
        iconMask: true,
        iconCls: 'pornstar',
        navigationBar: {
            docked: 'top'
        }, 
        items: [
/*
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    { xtype: 'spacer' },
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search pornstars…'
                    },
                    { xtype: 'spacer' }
                ]
            },
*/
            {
                title: 'Pornstars',
                xtype: 'modellist'
            }
        ]
    }    
});