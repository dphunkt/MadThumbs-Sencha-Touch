Ext.define('mt.view.modelinfo', {
    extend: 'Ext.Container',
    xtype: 'modelinfo',
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
            //'<h1>{alias}</h1>',
            '<p>',
                '<img src="{large_thumb}" height="150"/>',
                '<strong>Rating:</strong> {rating}<tpl if="rating">%</tpl><br>',
                '<tpl if="measurements"><strong>Measurements:</strong> {measurements}<br></tpl>',
                '<tpl if="sexuality"><strong>Sexuality:</strong> {sexuality}<br></tpl>',
                '<tpl if="ethnicity"><strong>Ethnicity:</strong> {ethnicity}<br></tpl>',
                '<tpl if="height && weight"><strong>Height/Weight:</strong> {height}/{weight}<br></tpl>',
                '<tpl if="haircolor"><strong>Hair:</strong> {haircolor}<br></tpl>',
                '<tpl if="eyecolor"><strong>Eye Color:</strong> {eyecolor}<br></tpl>',
                '<tpl if="tags.length">',
                   '<strong>Tags: </strong>',
                    '<tpl for="tags">',
                        '{title}',
                        '{[xindex < (xcount) ? ", " : ""]}',
                    '</tpl>',
                '</tpl>',
            '</p>',
            '<tpl if="description"><p><strong>Description:</strong> {description}</p></tpl>'
        ])
    }
});