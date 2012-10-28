Ext.define('mt.view.videonav', {
    extend: 'Ext.NavigationView',
	xtype: 'videonav',
    requires: ['mt.view.videopreview'],
    config: {
        title: 'Videos',
        useTitleForBackButtonText: true,
        iconMask: true,
        iconCls: 'video',
        navigationBar: {
            docked: 'top'
        }, 
        items: [{
            title: 'Newest Videos',
            xtype: 'videolist'
        }]
    }    
});