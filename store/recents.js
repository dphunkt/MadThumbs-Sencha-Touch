Ext.define('mt.store.recents', {
    extend: 'Ext.data.Store',
    requires: ['mt.model.recent'],
    config: {
        model: 'mt.model.recent',
        autoLoad: true,
        autoSync: true,
        grouper: {
            groupFn: function(record) {
               return Ext.String.capitalize(record.get('type') + 's');
            }
        }
    }
});