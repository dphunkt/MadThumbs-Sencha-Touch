Ext.define('mt.view.slideshow_new', {
    extend: 'Ext.Carousel',
    //xtype: 'slideshow_new',
    requires: ['mt.view.imageviewer'],
    config: {
        id: 'slideShow',
        //fullscreen: true,
        //layout: 'fit',
        flex: 1,
        baseCls: Ext.baseCSSPrefix + 'sheet',
        ui: 'detail',
        activeitemchange: function (container, value, oldValue, eOpts) {
            if (!oldValue) return;
            oldValue.resetZoom();
            this.getActiveItem().rotate();
        },
        resize: function (component, eOpts) {
            this.getActiveItem().rotate();
        }
    },
    onDragStart: function (e) {
        var scroller = this.getActiveItem().getScrollable().getScroller();
        //ensure the image component is scolled all the way to the edge of its scrollable element        
		if(e.targetTouches.length == 1 && (e.deltaX < 0 && scroller.getMaxPosition().x === scroller.position.x) || (e.deltaX > 0 && scroller.position.x == 0)) {
			this.callParent(arguments);
		}
    },
    onDrag: function (e) {
        if (e.targetTouches.length == 1) this.callParent(arguments);
    },
    onDragEnd: function (e) {
        if (e.targetTouches.length < 2) this.callParent(arguments);
    }
});