Ext.define('mt.view.videoinfo', {
    extend: 'Ext.Container',
    xtype: 'videoinfo',
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
            //'<h1>{title}</h1>',
            '<p>',
                '<img src="{thumb}"/>',
                '<strong>Length: </strong>{duration}<br>',
                '<strong>Added: </strong>{date}<br>',
                '<strong>Rating: </strong>{rating}%<br>',
                '<strong>Views: </strong>{views}<br>',
                '<tpl if="models.length">',
                    '<strong>Models: </strong>',
                    '<tpl for="models">',
                    '{alias}',
                    '{[xindex < (xcount) ? ", " : ""]}',
                    '</tpl><br>',
                '</tpl>',
                '<tpl if="tags.length">',
                    '<strong>Tags: </strong>',
                    '<tpl for="tags">',
                    '{title}',
                    '{[xindex < (xcount) ? ", " : ""]}',
                    '</tpl>',
                '</tpl>',
            '</p>',
            '<tpl if="description"><p>{description}</p></tpl>'
        ])
    }
});