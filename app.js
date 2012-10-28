Ext.Loader.setConfig({ 
    enabled: true,
    paths: {
        //'Ext.ux': '/js/sencha/custom/ux'
    }
});

// Main application entry point
Ext.application({
    phoneStartupScreen: 'http://cache.tgpsitecentral.com/madthumbs/images/sencha/phone_startup.png',
    tabletStartupScreen: 'http://cache.tgpsitecentral.com/madthumbs/images/sencha/tablet_startup.png',
    icon: 'http://cache.tgpsitecentral.com/madthumbs/images/touch-icon.png',
    appFolder: '/js/sencha',
    name: 'mt',
    models: [
        'video', 
        'album', 
        'model',
        'image',
        'recent', 
        'search',
        'suggest', 
        'tag',
        'user',
        'user.favorite'
    ],
    views: [
        'mainpanel', 
        'loginform', 
        'navbar', 
        'player', 
        'videolist', 
        'videonav',
        'albumlist', 
        'modellist', 
        'modelnav', 
        'modelpreview', 
        'albumlist', 
        'albumnav',
        'resultlist',
        'searchpanel', 
        'slideshow',
        'searchlist', 
        'searchnav',
        'taglist',
        'morenav',
        'usernav'
    ],
    stores: [
        'videos', 
        'albums', 
        'models',
        'recents',
        'suggestions', 
        'tags',
        'users'
    ],
    controllers: ['home'],
    useLoadMask: true,
    viewport: { 
        autoMaximize: true 
    }
    //launch: function() {
        //Ext.create('mt.view.mainpanel');
    //}
});