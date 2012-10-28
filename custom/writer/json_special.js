Ext.define('mt.custom.writer.json_special', {
    extend: 'Ext.data.writer.Json',
    alias: 'writer.json_special',
    /*
     * This function overrides the default implementation of json writer. Any hasMany relationships will be submitted
     * as nested objects. When preparing the data, only children which have been newly created, modified or marked for
     * deletion will be added. To do this, a depth first bottom -> up recursive technique was used.
     */
    getRecordData: function(record) {
        console.log(record);
        //Setup variables
        var me = this, i, association, childStore, data = record.data;

        //Iterate over all the hasMany associations
        for (i = 0; i < record.associations.length; i++) {
            association = record.associations.get(i);
            data[association.name] = null;
            childStore = record[association.storeName];

            //Iterate over all the children in the current association
            childStore.each(function(childRecord) {

                if (!data[association.name]){
                    data[association.name] = [];
                }

                //Recursively get the record data for children (depth first)
                var childData = this.getRecordData.call(this, childRecord);

                /*
                 * If the child was marked dirty or phantom it must be added. If there was data returned that was neither
                 * dirty or phantom, this means that the depth first recursion has detected that it has a child which is
                 * either dirty or phantom. For this child to be put into the prepared data, it's parents must be in place whether
                 * they were modified or not.
                 */
                if (childRecord.dirty | childRecord.phantom | (childData != null)){
                    data[association.name].push(childData);
                    record.setDirty();
                }
            }, me);

            /*
             * Iterate over all the removed records and add them to the preparedData. Set a flag on them to show that
             * they are to be deleted
             */
            Ext.each(childStore.removed, function(removedChildRecord) {
                //Set a flag here to identify removed records
                removedChildRecord.set('forDeletion', true);
                var removedChildData = this.getRecordData.call(this, removedChildRecord);
                data[association.name].push(removedChildData);
                record.setDirty();
            }, me);
        }

        //Only return data if it was dirty, new or marked for deletion.
        if (record.dirty | record.phantom | record.get('forDeletion')){
            return data;
        }
    }
});