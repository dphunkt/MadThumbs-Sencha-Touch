Ext.define('mt.view.player', {
    extend: 'Ext.Video',
    xtype: 'player',
    title: 'Video Player',
    requires: [
        'Ext.Video'
    ],
    config: {
        id: 'videoPlayer',    
        //centered: true,
        width    : '100%',
        height   : '100%',
        url: undefined,
        posterUrl: 'http://cache.tgpsitecentral.com/madthumbs/images/madthumbs_video_poster.jpg',
        preload: true
    }
});