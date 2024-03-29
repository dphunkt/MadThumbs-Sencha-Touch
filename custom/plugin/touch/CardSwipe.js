Ext.define('CardSwipe', {
    extend: 'Ext.Component',
	alias: 'plugin.cardswipe',
    wrap : true,
	init: function(cmp) {
		var me = this;

		me.anim = {
			type : cmp.cardSwitchAnimation || me.anim
		};

		me.cmp = cmp;

		cmp.on("afterrender", me.addListener, me, { single : true });
	},

	addListener: function(cmp) {
		var me = this;

		cmp.mon(cmp.el, {
			scope : me,
			swipe : me.handleSwipe
		});
	},

	handleSwipe: function(e, t) {
		var me      = this,
			cmp     = me.cmp,
			dir     = e.direction,
			func    = (dir === "left") ? "next" : "prev",
			reverse = (func === "prev");
        alert(swipe);
		Ext.apply(me.anim, {
			reverse : reverse
		});

		cmp.layout[func](me.anim, me.wrap);
	}
});