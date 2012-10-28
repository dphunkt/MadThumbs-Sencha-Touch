Ext.define('mt.view.albumnav', {
    extend: 'Ext.NavigationView',
	xtype: 'albumnav',
	requires: ['mt.view.albumpreview'],
    config: {
        //autoDestroy: false,
        //fullscreen: true,
        title: 'Albums',
        useTitleForBackButtonText: true,
        defaultBackButtonText: 'Album Info',
        iconMask: true,
        iconCls: 'photo2',        
        navigationBar: {
            docked: 'top'
        }, 
        items: [{
            title: 'Newest Albums',
            xtype: 'albumlist'
        }]
    }    
});