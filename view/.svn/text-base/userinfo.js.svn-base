Ext.define('mt.view.userinfo', {
    extend: 'Ext.Container',
    xtype: 'userinfo',
    requires: ['Ext.XTemplate'],
    config: {
        layout: 'fit',
        cls: 'detail-card',
        styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        tpl: new Ext.XTemplate([
            '<img src="{profile_image}"/>',
            '<h1>{username}</h1>'
        ])
    }
});