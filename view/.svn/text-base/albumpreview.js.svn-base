Ext.define('mt.view.albumpreview', {
    extend: 'Ext.Panel',
    xtype: 'albumpreview',
    requires: [
        'Ext.Button',
        //'Ext.ux.touch.grid.View',
        'mt.view.albuminfo'
    ],
    config: {
        baseCls: Ext.baseCSSPrefix + 'sheet',
        ui: 'detail',
        layout: 'vbox',
        //height: '100%',
        //width: 320,
        items: [
            {
                xtype: 'albuminfo',
                styleHtmlContent: true,
                flex: 2
            },
            {
                xtype: 'container',
                styleHtmlContent: true,
                layout: 'hbox',
                items: [
/*
                    {
                        xtype: 'button',
                        iconMask: true,
                        iconCls: 'user_add',
                        text: 'Add to Favorites',
                        ui: 'light',
                        flex: 2
                    },
                    {
                        xtype: 'spacer',
                        width: 4
                    },
*/
                    {
                        xtype: 'button',
                        itemId: 'viewButton',
                        text: 'View Images',
                        iconMask: true,
                        ui: 'light',
                        iconCls: 'photos1',
                        flex: 2
                    }
                ]
            }
        ]
    },
    updateInfo: function(album) {
        var sheet       = this
            information = sheet.down('albuminfo'),
            viewButton = sheet.down('#viewButton');

        information.setData(album.data);
    },
    updateButton: function(user) {
        var sheet  = this,
            album  = sheet.getData(),
            button = sheet.down('#viewButton');
        
        button.setText('View Images (' + album.get('count') + ')');
            
        button.addListener({
            tap: function() {
                sheet.fireEvent('viewTap', this);
            }
        });
    }
});