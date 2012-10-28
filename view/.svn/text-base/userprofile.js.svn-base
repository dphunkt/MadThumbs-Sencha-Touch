Ext.define('mt.view.userprofile', {
    extend: 'Ext.Panel',
    xtype: 'userprofile',
    requires: [
        'Ext.Button',
        'mt.view.userinfo'
    ],
    config: {
        baseCls: Ext.baseCSSPrefix + 'sheet',
        ui: 'detail',
        layout: 'vbox',
        //height: '100%',
        //width: 320,
        title: "User Profile",
        items: [
            {
                xtype: 'userinfo',
                flex: 1
            },
            {
                xtype: 'container',
                layout: 'hbox',
                styleHtmlContent: true,
                //width: 320,
                items: [
                    {
                        xtype: 'button',
                        text: 'My Favorites',
                        iconMask: true,
                        ui: 'light',
                        iconCls: 'user_fave',
                        flex: 2
                    },
                    {
                        xtype: 'spacer',
                        width: 4
                    },
                    {
                        xtype: 'button',
                        iconMask: true,
                        iconCls: 'briefcase2',
                        text: 'My Uploads',
                        ui: 'light',
                        flex: 2
                    }
                ]
            }
        ]
    },
    updateInfo: function(user) {
        var information = this.down('userinfo');

        information.setData(user.data);
        //update the video button
        //this.updateButton();
    }
/*
    updateButton: function() {
        var sheet = this,
            video = this.getData();
            mp4    = video.get('mp4_url'),
            button = this.down('button');
            
        button.addListener({
            tap: function() {
                var items,
                player = Ext.getCmp('thePlayer'),
                carousel = Ext.getCmp('detailPanel');
                
                player.updateUrl([mp4]);
                
                if (!player.getParent()) {
                    carousel.add([player]);
                    carousel.setActiveItem(player);
                }
                //player.show();
            }
        });
    }
*/
});
