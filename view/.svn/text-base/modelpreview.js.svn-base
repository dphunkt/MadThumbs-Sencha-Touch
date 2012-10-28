Ext.define('mt.view.modelpreview', {
    extend: 'Ext.Panel',
    xtype: 'modelpreview',
    requires: [
        'Ext.Button',
        'mt.view.modelinfo'
    ],
    config: {
        baseCls: Ext.baseCSSPrefix + 'sheet',
        ui: 'detail',
        layout: 'vbox',
        //height: '100%',
        //width: 300,
        items: [
            {
                xtype: 'modelinfo',
                flex: 1
            },

/*
            {
                xtype: 'container',
                styleHtmlContent: true,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        text: 'Add to Favorites',
                        iconMask: true,
                        iconCls: 'user_add',
                        flex: 1
                    }
                ]
            }
*/
        ]
    },
    updateInfo: function(model) {
        var information = this.down('modelinfo');

        information.setData(model.data);
    },
    updateButton: function() {

    }
});