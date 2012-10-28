/**
 * This is a tweet list item used in the resultlist view. It has several components:
 *
 *  - {@link #title}: used to display the username of the tweet.
 *  - {@link #text}: used to display the text of the tweet
 *  - {@link #thumb}: used to displat the public thumbof the person who tweeted
 *  - {@link #favorite}: used to display the number of favorite, if specified
 */
Ext.define('mt.view.resultlistitem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'resultlistitem',
    requires: [
        //'mt.view.resultlistitemtext',
        'Ext.Img'
    ],

    config: {
        // @inherit
        //ui: 'tweet',

        /**
         * @inherit
         * The dataMap allows you to map {@link #record} fields to specific configurations in this component.
         *
         * For example, lets say you have a {@link #text} configuration which, when applied, gets turned into an instance of an Ext.Component.
         * We want to update the {@link #html} of this component when the 'text' field of the record gets changed.
         * As you can see below, it is simply a matter of setting the key of the object to be the getter of the config (getText), and then give that
         * property a value of an object, which then has 'setHtml' (the html setter) as the key, and 'text' (the field name) as the value.
         */
        dataMap: {
            // When the record is updated, get the {@link #text} configuration, and call {@link #setHtml} with the 'text' field of the record.
/*
            getText: {
                setHtml: 'text'
            },
*/

            // When the record is updated, get the {@link #title} configuration, and call {@link #setHtml} with the 'from_user' field of the record.
            getTitle: {
                setHtml: 'videos.title'
            },

            // When the record is updated, get the {@link #thumb} configuration, and call {@link #setSrc} with the 'thumb' field of the record.
            getThumb: {
                setSrc: 'videos.thumb'
            }
        },

        /**
         * @cfg {Object/Instance} title
         * The component which displays the title/name.
         */
        title: {
            cls: 'title'
        },

        /**
         * @cfg {Object/Instance} favorite
         * The component which displays the number of favorite the tweet has, if the tweet is popular.
         * This is hidden by default, as not all tweets are popular.
         */
/*
        favorite: {
            cls   : 'favorite',
            hidden: true
        },
*/

        /**
         * @cfg {Object/Instance} thumb
         * The component which displays the thumb.
         * This uses the {@link Ext.Img} component to show the image.
         * It is docked to the left.
         */
        thumb: {
            docked: 'left',
            xtype : 'image',
            cls   : 'thumb'
        },

        /**
         * @inherit
         * The layout of this component is vbox, so we can show the title/name, and info (if nessecarry) all vertically, which
         * still showing the thumb docked to the left.
         */
        layout: {
            type: 'vbox'
        }
    },

    /**
     * Applies the {@link #title} configuration which will return an instance of Ext.Component
     */
    applyTitle: function(config) {
        return Ext.factory(config, Ext.Component, this.getTitle());
    },

    /**
     * Called when the {@link #title} configuration has been updated. Inserts the component as the first child (so it is always at the top)
     */
    updateTitle: function(newTitle) {
        if (newTitle) {
            this.insert(0, newTitle);
        }
    },

    /**
     * Applies the {@link #text} configuration which will return an instance of mt.view.resultlistItemText. This is not a component because we
     * need to override setHtml to linkify URLs and wrap usernames + hashtags.
     */
/*
    applyText: function(config) {
        return Ext.factory(config, mt.view.resultlistItemText, this.getText());
    },
*/

    /**
     * Called when the {@link #text} configuration has been updated. Add the component into this item.
     */
/*
    updateText: function(newText) {
        if (newText) {
            this.add(newText);
        }
    },
*/

    /**
     * Applies the {@link #thumb} configuration. Returns an instance of Ext.Img
     */
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
    },

    /**
     * Applies the {@link #favorite} configuration. Returns an instance of Ext.Component
     */
/*
    applyFavorite: function(config) {
        return Ext.factory(config, Ext.Component, this.getFavorite());
    },
*/

    /**
     * Called when the {@link #favorite} confguration has been updated. Inserts the component into this item.
     */
/*
    updateFavorite: function(newFavorite) {
        if (newFavorite) {
            this.add(newFavorite);
        }
    },
*/

    /**
     * We must override the {@link #updateRecord} method in dataitem. This is so we can look at the records metadata field and check
     * if the tweet is popuplar, and if the tweet has favorite. If it is popular, it adds a custom className. If it has favorite, we
     * show the {@link #favorite} component, and update it's HTML.
     */
/*
    updateRecord: function(newRecord) {
        this.callParent(arguments);

        var metadata = newRecord.get('metadata'),
            favorite = this.getFavorite();

        // ensure that the record has metadata + is a popular tweet
        if (metadata && metadata.result_type && metadata.result_type == "popular") {
            this.element.addCls('popular');

            //if there are favorite
            if (metadata.recent_favorite) {
                favorite.show();
                favorite.setHtml(metadata.recent_favorite + '+ recent favorite');
            }
        } else {
            //it isn't popular, so it can't have favorite. Remove the className + hide the favorite component
            this.element.removeCls('popular');
            favorite.hide();
        }
    }
*/
});