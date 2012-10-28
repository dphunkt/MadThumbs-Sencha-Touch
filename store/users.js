Ext.define('mt.store.users', {
    extend: 'Ext.data.Store',
    requires: ['mt.model.user'],
    config: {
        model: 'mt.model.user',
        autoLoad: true
    }
});