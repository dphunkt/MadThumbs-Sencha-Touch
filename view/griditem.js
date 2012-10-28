Ext.define('mt.view.griditem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'griditem',
    requires: [
        //'mt.view.resultlistitemtext',
        'Ext.Img'
    ],
    config: {
        dataMap: {
            // When the record is updated, get the {@link #thumb} configuration, and call {@link #setSrc} with the 'thumb' field of the record.
            getThumb: {
                setSrc: 'thumb'
            }
        },
        thumb: {
            //docked: 'left',
            xtype: 'image',
            cls: 'thumb',
            height: 80,
            width: 106,
            style: {
                '-webkit-background-size': 'contain'
            }
        },
        layout: {
            type: 'hbox',
            pack: 'center'
        }
    },
    applyThumb: function(config) {
        return Ext.factory(config, Ext.Img, this.getThumb());
    },
    /**
     * Called when the {@link #thumb} confguration has been updated. Inserts the component into this item.
     */
    updateThumb: function(newThumb) {
        if (newThumb) {
            this.add(newThumb);
        }
    }
});