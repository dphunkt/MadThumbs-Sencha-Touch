Ext.define('mt.view.albuminfo', {
    extend: 'Ext.Container',
    xtype: 'albuminfo',
    requires: ['Ext.XTemplate'],
    config: {
        layout: 'fit',
        cls: 'detail-card',
        //styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        tpl: new Ext.XTemplate([
            //'<h1>{name}</h1>',
            '<p>',
                '<img src="{thumb}"/>',
                '<tpl if="date"><strong>Added: </strong>{date}<br></tpl>',
                '<tpl if="views"><strong>Views: </strong>{views}<br></tpl>',
                '<tpl if="rating"><strong>Rating: </strong>{rating}%<br></tpl>',
                '<tpl if="tags.length">',
                '<strong>Tags: </strong>',
                    '<tpl for="tags">',
                    '{title}',
                    '{[xindex < (xcount) ? ", " : ""]}',
                '</tpl>',
            '</tpl>',                
            '</p>',
            '<tpl if="description"><p><strong>Description:</strong> {description}</p></tpl>',
            '<div class="x-grid-container">',
                '<tpl for="images">',
                    '{% if ((xindex - 1) % 3 === 0) { %}',
                        '<div>',
                    '{% } %}',
                        '<div class="x-grid-item">',
                            '<a href="#{#}" style="background:transparent url({thumb}) no-repeat 50% 0;"></a>',
                            //'<img src="{thumb}" height="80">',
                        '</div>',
                    '{% if ((xindex - 1) % 3 === 2 || xindex === xcount) { %}',
                        '</div>',
                    '{% } %}',
                '</tpl>',
            '</div>'
        ])
    }
});