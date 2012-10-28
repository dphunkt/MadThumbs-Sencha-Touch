Ext.define('mt.view.morenav', {
    extend: 'Ext.NavigationView',
	xtype: 'morenav',
    config: {
        title: 'More',
        useTitleForBackButtonText: true,
        iconMask: true,
        iconCls: 'more',
        navigationBar: {
            docked: 'top',
            items: [
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
        },
        items: [
        {
            title: 'More',
            xtype: 'container',
            layout: 'fit',
            items: [{
                xtype: 'list',
                data: [
                    {
                        "id": "categories",
                        "text": "Categories",
                        "class": "list"
                    },
                    {
                        "id": "favorites",
                        "text": "My Favorites",
                        "class": "user_fave"
                    },
                    {
                        "id": "recent",
                        "text": "Recently Viewed",
                        "class": "look"
                    }
                ],
                id: 'moreList',
                itemTpl: new Ext.XTemplate([
                    '<span class="x-list-icon {class} x-icon-mask"></span>',
                    '<strong>{text}</strong>'
                ])
            }]
        }]
    }    
});