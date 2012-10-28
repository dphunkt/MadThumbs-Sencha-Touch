Ext.define('mt.custom.proxy.localstorage_special', {
    extend: 'Ext.data.proxy.LocalStorage',
    alias: 'proxy.localstorage_special',
    /**
     * Saves the given record in the Proxy. Runs each field's encode function (if present) to encode the data.
     * @param {Ext.data.Model} record The model instance
     * @param {String} [id] The id to save the record under (defaults to the value of the record's getId() function)
     */
    setRecord: function(record, id) {
        if (id) {
            record.setId(id);
        } else {
            id = record.getId();
        }

        var me = this,
            rawData = record.getData(),
            data    = {},
            Model   = me.getModel(),
            fields  = Model.getFields().items,
            length  = fields.length,
            assns   = Model.associations.items,
            i = 0,
            field, name, obj, key, dateFormat;

        for (; i < length; i++) {
            field = fields[i];
            name  = field.getName();

            if (typeof field.getEncode() == 'function') {
                data[name] = field.getEncode()(rawData[name], record);
            } else {
                if (field.getType().type == 'date' && Ext.isDate(rawData[name])) {
                    dateFormat = field.getDateFormat();
                    if (dateFormat) {
                        data[name] = Ext.Date.format(rawData[name], dateFormat);
                    } else {
                        data[name] = rawData[name].getTime();
                    }
                } else {
                    data[name] = rawData[name];
                }
            }
        }
        
        length = assns.length;
        for (i=0; i < length; i++) {
            assn = assns[i];

            if (record[assn.storeName]) {
                name = assn.name;
                model = assn.associatedModel;
                
                subdata = [];
                recs = record[assn.storeName].getData().items;
                
                for (j=0; j < recs.length; j++) {
                    subdata[subdata.length] = this.setRecordGetData(recs[j], model);
                }
                
                data[name] = subdata;
            }
        }

        obj = me.getStorageObject();
        key = me.getRecordKey(id);

        //keep the cache up to date
        me.cache[id] = record;

        //iPad bug requires that we remove the item before setting it
        obj.removeItem(key);
        obj.setItem(key, Ext.encode(data));
    }
});