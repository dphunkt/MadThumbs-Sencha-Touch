Ext.define('mt.view.navbar', {
    extend: 'Ext.TitleBar',	
	alias: 'widget.navbar',
	requires: ['Ext.Button'],
    config: {
        docked: 'top',
        //height: 50,
        id: 'navBar',
        title: '<img src="/images/madthumbs_logo_130x31.png" alt="MadThumbs Mobile App" class="logo"/>',
        items: [
            {
                xtype: 'button',
                id: 'webLink',
                iconMask: true,
                iconCls: 'globe_black',
                ui: 'small',
                text: 'Web'
            },
            {
                xtype: 'button',
                iconMask: true,
                iconCls: 'user',
                text: 'Login',
                ui: 'small',
                align: 'right',
                hidden: true
            }
        ]
    }
});