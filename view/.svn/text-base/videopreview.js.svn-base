Ext.define('mt.view.videopreview', {
    extend: 'Ext.Panel',
    xtype: 'videopreview',
    requires: [
        'Ext.Button',
        'mt.view.videoinfo'
    ],
    config: {
        baseCls: Ext.baseCSSPrefix + 'sheet',
        ui: 'detail',
        layout: 'vbox',
        //height: '100%',
        //width: 320,
        items: [
            {
                xtype: 'videoinfo',
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
                        itemId: 'faveButton',
                        text: 'Add to favorites',
                        iconMask: true,
                        ui: 'light',
                        iconCls: 'user_add',
                        flex: 2
                    },
                    {
                        xtype: 'spacer',
                        width: 4
                    },
/*
                    {
                        xtype: 'button',
                        iconMask: true,
                        iconCls: 'chat4',
                        text: 'Comment',
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
                        itemId: 'watchButton',
                        iconMask: true,
                        iconCls: 'look',
                        text: 'Watch',
                        ui: 'light',
                        flex: 2
                    }
                ]
            }
        ]
    },
    updateInfo: function(video) {
        var sheet       = this
            information = sheet.down('videoinfo'),
            watchButton = sheet.down('#watchButton');
            
        information.setData(video.data);
        
        watchButton.setText('Watch (' + video.get('duration') + ')');
            
        watchButton.addListener({
            tap: function() {
                sheet.fireEvent('vidTap');
            }
        });
    },
    updateButton: function(user) {
        var sheet       = this,
            video       = sheet.getData(),
            faveButton  = sheet.down('#faveButton'),
            fire        = 'addFave', 
            index;

        if (user) {
            index = user.favorites().find('video_id', video.get('video_id'));
            
            if (index !== -1) {
                faveButton.setText("Remove from favorites");
                faveButton.setIconCls('user_remove2');
                fire = 'removeFave';
            } else {
                faveButton.setText("Add to favorites");
                faveButton.setIconCls('user_add');
                fire = 'addFave'
            }
        }
                
        faveButton.clearListeners();
        faveButton.addListener({
            tap: function(button, e) {
                sheet.fireEvent(fire, {id: video.get('video_id'), type: 'video'});
            }
        });
    }
});
