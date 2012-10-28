/**
 * @class mt.view.searchlist
 * @extends Ext.dataview.List
 *
 * This shows all of the search queries that the user has saved. It's {@link #defaultType} is searchlistitem.
 *
 * The configured store loads the suggest model instances using suggest's default proxy (see app/models/suggest.js).
 */
Ext.define('mt.view.searchlist', {
    extend: 'Ext.DataView',
    xtype : 'searchlist',
    requires: ['mt.view.searchlistitem'],

    config: {
        ui           : 'searchlist',
        baseCls      : 'x-list',
        store        : 'suggestions',
        defaultType  : 'searchlistitem',
        scrollable   : 'vertical',
        allowDeselect: false,
        useComponents: true,
        deselectOnContainerClick: false
    }
});
