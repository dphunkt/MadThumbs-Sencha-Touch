Ext.define('mt.controller.home', {
    extend: 'Ext.app.Controller',
    config: {
        // These "refs" will generate "getters" for each of the view component instances
        // e.g. getHeaderBar and getMainPanel
        refs: {
            headerBar: {
                selector: 'headerbar',
                xtype: 'headerbar'
            },
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'mainpanel'
            },
/*
            navBar: {
                selector: '#navBar'
            },
*/
            modelIndexBar: {
                selector: '#modelIndexBar'
            },
            loginForm: {
                selector: '#loginForm',
                xtype: 'loginform',
                autoCreate: true
            },
            albumList: {
                selector: 'albumlist',
                xtype: 'albumlist'
            },
            loginButton: {
                selector: 'button[text="Login"]'
            },
            modelList: {
                selector: 'modellist',
                xtype: 'modellist',
                autoCreate: true
            },
            videoNav: {
                selector: 'videonav',
                xtype: 'videonav'
            },
            albumNav: {
                selector: 'albumnav',
                xtype: 'albumnav'
            },
            modelNav: {
                selector: 'modelnav',
                xtype: 'modelnav'
            },
            searchNav: {
                selector: 'searchnav',
                xtype: 'searchnav'
            },
            videoList: {
                selector: 'videolist',
                xtype: 'videolist'
            },
            resultList: {
                selector: 'resultlist'
            },
            moreNav: {
                selector: 'morenav',
                xtype: 'morenav'
            },
            moreList: {
                selector: '#moreList'
            },
            searchField: {
                selector: 'searchfield'
            },
            searchList: {
                selector: 'searchlist'
            },
            searchPanel: {
                selector: 'searchpanel',
                xtype: 'searchpanel'
            },
            slideShow: {
                selector: 'slideshow',
                xtype: 'slideshow'
            },
            tagList: {
                selector: 'taglist',
                xtype: 'taglist',
                autoCreate: true
            },
            userNav: {
                selector: 'usernav',
                xtype: 'usernav'
            },
            videoPreview: {
                selector: 'videopreview',
                xtype: 'videopreview',
                autocreate: true
            }
        },
/*
        routes: {
            'view-image/:id': 'showImageByIndex'
        },
*/
        control: {
/*
            navBar: {
                //handle logo clicks
                painted: function(panel) {
                    var me = this,
                        el = panel.element,
                        image = el.down('img');
                        image.addListener('tap', function(e, t) {
                            //todo: find a better way to reset views
                            location.reload();
                        }, panel);
                }
            },
*/
            'button[action="submitLogin"]': {
                tap: 'onLoginSubmit'
            },
            'button[action="cancelLogin"]': {
                tap: 'hideLoginForm'
            },
            'input[name="password"]': {
                keyup: 'onLoginUp'
            },
            'input[name="username"]': {
                keyup: 'onLoginUp'
            },
/*
            '#webLink': {
                tap: function(btn, event) {
                    location.href = 'http://www.madthumbs.com/';
                }
            },
*/
            searchNav: {
                //toggle the search indexbar
                activeitemchange: function(nav, value, oldValue) {
                    var navBar = nav.getNavigationBar();
                    if (value.getId() == 'searchPanel') navBar.hide();
                    else navBar.show();
                }
            },
            modelIndexBar: {
                //listen for tap on model alpha sort and get models via ajax
                index: function(bar, target, html) {
                    var modelStore = Ext.getStore('models');
                    var proxy = modelStore.getProxy();
                    proxy.setExtraParam('ltr', target);
                    modelStore.load();
                }
            },            
            searchField: {
                keyup: 'onSearch',
                focus: 'onSearchFocus'
                //blur: 'hideSearchSuggest'
            },
            resultList: {
                itemtap: function(me, index, item, record, e, eOpts) {
                    switch(record.get('type')) {
                        case 'video':
                            this.onVideoTap(me, index, item, record, e, eOpts);
                            break;
                        case 'album':
                            this.onAlbumTap(me, index, item, record, e, eOpts);
                            break;
                        case 'model':
                            this.onModelTap(me, index, item, record, e, eOpts);
                            break;
                        default:
                            break;
                    }
                }
            },
            searchList: {
                select: 'onSearchSelect',
                itemswipe: 'onSearchSwipe'
            },
            'searchlist searchlistitem button': {
                tap: 'onSearchDelete'
            },
            modelList: {
                itemsingletap: 'onModelTap'
            },
            tagList: {
                itemsingletap: 'onCategoryTap'
            },
            videoList: {
                itemsingletap: 'onVideoTap'
            },
            albumList: {
                itemsingletap: 'onAlbumTap'
            },
            moreList: {
                itemsingletap: 'onMoreTap'
            },
            list: {
                disclose: 'onDisclose',
            }
		}
    },	
    init: function() {
        var mainPanel = Ext.create('mt.view.mainpanel');
    },
    launch: function() {      
        var moreNav = this.getMoreNav(),
            loginButton = this.getLoginButton();
        
        this.getLoginButton().on('tap', this.showLoginForm, this);
        
        Ext.getStore('users').load({
            callback: this.onUsersStoreLoad,
            scope: this
        });
        
/*
        Ext.getStore('recents').load({
            callback: this.onRecentStoreLoad,
            scope: this
        });
*/
        
/*
        this.getMainPanel().on('activeitemchange', function(card, newItem, oldItem) {
            if (newItem === moreNav) loginButton.show();
            else loginButton.hide();
        });
*/
    },
    /**
     * Called when the usersStore has been loaded from localStorage.     
     * 
     */
    onUsersStoreLoad: function() {
        var usersStore = Ext.getStore('users'),
            user = usersStore.first();
            
        //grab the first user found in localStorage proxy
        if (user) {
            this.user = user;
            //assume user is not logged in server side
            this.user.set('authed', false);
            
            //attempt to login with stored user info
            Ext.Ajax.request({
                url: '/users/login',
                method: 'post',
                params: {
                    password: user.password,
                    username: user.username,
                    json: true
                },
                success: function(response){
                    var responseObj = Ext.JSON.decode(response.responseText);
                    if (responseObj.success) {
                        this.doLogin(null, responseObj);
                    }
                },
                scope: this
            });            
        }
    },
/*
    onRecentStoreLoad: function() {
        var recentStore = Ext.getStore('recents');
            recentlyViewed = recentStore.first();
        
        if (!recentlyViewed) {
            recentlyViewed = new mt.model.recent();
            recentStore.add(recentlyViewed);
        }
        
        recentStore.sync();

        recentlyViewed.addListener('addrecords', function(store, records) {
           console.log('record added');
           recentlyViewed.setDirty();
           recentStore.sync();
        });
        
        recentStore.filter([
            {
                filterFn: function(item) { 
                    return item.get('type'); 
                }
            }
        ]);
        
        recentStore.addListener('load', function(store, records, success, operation, eOpts) {
            var results = records[0],
                data = [],
                models = {},
                videos = {},
                albums = {};
            
            if (results.models()) models = results.models().getData().items;
            if (results.videos()) videos = results.videos().getData().items;
            if (results.albums()) albums = results.albums().getData().items;
                        
            data = Ext.Array.merge(models, videos, albums);
            
            //recentStore.remove(results);
            recentStore.add(data);
        });
    },
*/
    onMoreTap: function(me, index, item, record, e, eOpts) {
        var userModel = mt.model.user,
            recentStore = Ext.getStore('recents'),
            title = '',
            view, cont, favorites;
                    
        switch(record.get('id')) {
            case 'categories':
                view = this.getTagList();
                title = 'Categories';
                break;
            case 'recent':
                title = 'Recently Viewed';
                view = new mt.view.videolist();
                title = "Recently Viewed";

/*
                recentStore.filter([
                    {
                        filterFn: function(item) { 
                            return item.get('type'); 
                        }
                    }
                ]); 
*/               

                view.setStore(recentStore);
                
                break;
            case 'favorites':
                if (!this.user || !this.user.get('authed')) {
                    this.showLoginForm();
                    return false;
                }
                
                favorites = this.user.favorites();

                if (!favorites.isLoaded()) {
                    favorites.load();
                }
                                                
                view = new mt.view.resultlist();
                view.setItemId('favoriteList');
                
                title = "My Favorites";                                         

                view.setStore(favorites);
                
                break;               
            default:
                break;
        }
        
        //create a wrapper so the navigationView sets its title correctly
        var cont = Ext.create('Ext.Container', {
            title: title,
            layout: 'fit',
            items: [view]
        });
                
        this.getMoreNav().push(cont);
    },
    onModelTap: function(me, index, item, record, e, eOpts) {
        //don't trigger for disclosure icon tap
        if (e.getTarget('div.x-list-disclosure')) return false;
        
        var videoList = new mt.view.videolist(),
            title = record.get('alias') + " Videos",
            id = record.get('id');

        //load the videos directly through the model model and add to the associated videos store
        this.getMainPanel().setMasked({
            xtype: 'loadmask',
            message: 'Loading…',
            transparent: true
        });

        mt.model.model.load(id, {
            scope: this,
            callback: function(record, operation) {
                this.getMainPanel().unmask();
            },
            success: function(record, operation) {
                if (record) {
                    var videos = record.videos();
                    videoList.setStore(videos);
                    return
                }
                videoList.setStore({});
            }
        });
        
        videoList.setPlugins([]);
        
        //create a wrapper so the navigationView sets its title correctly
        var cont = Ext.create('Ext.Container', {
            title: title,
            layout: 'fit',
            items: [videoList]
        });

        me.up('navigationview').push(cont);
    },
    onCategoryTap: function(me, index, item, record, e, eOpts) {
        var videoList = new mt.view.videolist(),
            title = record.get('title'),
            videos = record.videos(),
            app = this;
            
        videoList.setStore(videos);
                
        if (!videos.isLoaded()) {
            this.getMainPanel().setMasked({
                xtype: 'loadmask',
                message: 'Loading…',
                transparent: true
            });
            
            videos.load({
                callback: function() {
                    this.getMainPanel().unmask();
                },
                scope: this
            });
        }

        //create a wrapper so the navigationView sets its title correctly
        var cont = Ext.create('Ext.Container', {
            title: title + " Videos",
            layout: 'fit',
            items: [videoList]
        });
                
        this.getMoreNav().add(cont);
    },
    onVideoTap: function(me, index, item, record, e, eOpts) {
        //don't trigger for disclosure icon tap
        if (e && e.getTarget('div.x-list-disclosure')) return false;
        
        var player = Ext.getCmp('videoPlayer') || Ext.create('mt.view.player'),
            title = record.get('title'),
            mp4 = record.get('mp4_url'),
            id = record.get('video_id'),
            recentStore = Ext.getStore('recents'),
            item, recentModel;
        
        player.updateUrl([mp4]);
        //player.updatePosterUrl(record.get('large_thumb'));

        //create a wrapper so the navigationView sets its title correctly
        var cont = Ext.create('Ext.Container', {
            title: title,
            layout: 'fit',
            items: [player]
        });
        console.log(me.up('navigationview').getItems());                                                 
        me.up('navigationview').push(cont);   
                
        //videos = recentModel.videos();
        
        index = recentStore.find('video_id', id);

        //already in recently viewed
        if (index != -1) {
            return;
        }
                
        recentStore.add(record.copy());
        recentStore.sync();
    },
    onAlbumTap: function(me, index, item, record, e, eOpts) {        
        //don't trigger for disclosure icon tap
        if (e && e.getTarget('div.x-list-disclosure')) return false;
        
        var carousel = Ext.getCmp('slideShow') || Ext.create('mt.view.slideshow'),
            title = record.get('name'),
            imageData = record.images().getData().items,
            src, images = [];

        //loop through store and wrap images in scrollable container
        Ext.each(imageData, function(image, index, data) {
                src = image.get('large_thumb');
/*
                images.push({
                    xtype: 'imageviewer',
                    imageSrc: src,
                    previewSrc: false,
                    cls: 'carousel-item-img',
                    scrollable: {
                        direction: 'both',
                        directionLock: false,
                        indicators: false
                    },         
                    html: '<figure><img></figure>',
                });
*/
                images.push({
                    xtype: 'container',
                    //layout: 'auto',
                    scrollable: {
                        direction: 'both',
                        directionLock: false,
                        indicators: false
/*
                        momentumEasing: {
                            momentum: {
                                acceleration: 60,
                                friction: 0.3
                            },
                            bounce: {
                                acceleration: 30,
                                springTension: 0.3
                            }
                        }
*/
                    },
                    items: [
                        {
                            xtype: 'image',
                            cls: 'carousel-item-img',
                            width: '320px',
                            height: '240px',
                            //mode: 'img',
                            //centered: true,
                            style: {
                                'margin': 'auto',
                                '-webkit-background-size': 'contain',
                                '-webkit-backface-visibility': 'hidden',
                                '-webkit-perspective': '1000',
                                '-webkit-transform': 'translate3d(0, 0, 0)'
                            },
                            src: src
                        }
                    ]
                });
        });
        
        carousel.add(images);

        if (eOpts && eOpts.hasOwnProperty('index')) { 
            carousel.setActiveItem(parseInt(eOpts.index, 10) - 1);
        }
        
        //create a wrapper so the navigationView sets its title correctly
        var cont = Ext.create('Ext.Container', {
            title: title,
            layout: 'vbox',
            items: [
                carousel,
                {
                    xtype: 'container',
                    layout: 'auto',
                    baseCls: Ext.baseCSSPrefix + 'sheet',
                    ui: 'detail',
                    styleHtmlContent: true,
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'resButton',
                            text: 'High Res',
                            iconMask: true,
                            iconCls: 'hd',
                            listeners: {
                                tap: function(button, e) {             
                                    var text = this.getText() === 'Low Res' ? 'High Res' : 'Low Res',
                                        replace = text === 'Low Res' ? '-F.jpg' : '-L.jpg'
                                        active = carousel.getActiveIndex();
                                        
                                    this.setText(text);
                                    
                                    Ext.each(images, function(item, index, array) {
                                        var newSrc = item.items[0].src.replace(/-(F|L)\.jpg/, replace);
                                        item.items[0].src = newSrc;
                                    });
                                    
                                    Ext.destroy(carousel);
                                    carousel = Ext.create('mt.view.slideshow');
                                    carousel.add(images);
                                    carousel.setActiveItem(active)
                                    cont.insert(0, carousel);
/*
                                    //hack because of buggy implementation
                                    Ext.each(carousel.getItems().items, function(item, index, array) {
                                        var el = item.element.down('.carousel-item-img'),
                                            replace = text === 'Low Res' ? '-F.jpg' : '-L.jpg',
                                            bg;
                                        
                                        if (!el) return;

                                        bg = el.getStyle('background-image').replace(/-(L|F)\.jpg/, replace);
                                        el.setStyle({'background-image': bg});
                                    });
*/
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.up('navigationview').push(cont);
    },  
    onDisclose: function(list, item, target, index, e, eOpts) {
        //get the list's parent navigationView
        var nav = list.up('navigationview'),
            user = this.user,
            previewItem, title;
                
        switch (item.get('type')) {
            case 'video':
                previewItem = Ext.create('mt.view.videopreview');
                title = item.get('title');
                
                previewItem.on('vidTap', function() {
                    this.onVideoTap(previewItem, null, null, item);
                }, this);
                
                break;
            case 'album':
                previewItem = Ext.create('mt.view.albumpreview');
                title = item.get('name');
                
                previewItem.on({
                    //listen for button event broadcast from view and trigger tap on list item
                    viewTap: function() {
                        this.onAlbumTap(previewItem, null, null, item);
                    },
                    painted: function(sheet) {
                        var el = sheet.element;

                        el.addListener('tap', function(e, t) {
                            var hash = Ext.get(e.target).dom.hash;
                            if (hash) { 
                                hash = hash.split('#')[1];
                                this.onAlbumTap(previewItem, null, null, item, null, {index: hash});
                            }
                            return false;
                        }, this);
                    }, 
                    scope: this
                });
                                
                //var imagesStore = item.images();
                                
/*
                var dataView = Ext.create('Ext.dataview.DataView', {
                    flex: 1,
                    itemTpl: '<div class="item"><img src="{thumb}"></div>',
                    store: imagesStore
                });
*/
                
                //previewItem.getComponent('grid').setStore(imagesStore);
                
                break;
            case 'model':
                previewItem = Ext.create('mt.view.modelpreview');
                title = item.get('alias');
                break;    
            default:
                break;
        }
        
        previewItem.on('addFave', function(args) {
            if (!this.user || !this.user.get('authed')) return this.showLoginForm();

            var app = this,
                url = args.type == 'video' ? '/locker/add/' : '/image_locker/add/',
                favorites = this.user.favorites();
                
            Ext.Ajax.request({
                method: 'GET',
                url: url + args.id,
                params: {
                    json: true
                },
                success: function(response) {
                    var responseObj = Ext.JSON.decode(response.responseText);
                    if (responseObj.success) {
                        favorites.add(item);
                        //update button text and rebind listeners
                        previewItem.updateButton(user);
                    } else {
                        app.showLoginForm();
                    }
                },
                failure: function(response) {                    
                    Ext.Msg.show({	
                        title: 'Sorry, something went wrong.',
    					message: 'Save failure. Please try again later.',
    					width: 300,
    					//multiline: true,
    					buttons: Ext.MessageBox.OK,
    					icon: Ext.MessageBox.WARNING
    				});
                }
            });
        }, this);

        previewItem.on('removeFave', function(args) {            
            if (!this.user || !this.user.get('authed')) return this.showLoginForm();
            
            var app = this,
                url = args.type == 'video' ? '/locker/remove/' : '/image_locker/remove/',
                favorites = this.user.favorites();
            
                
            Ext.Ajax.request({
                method: 'GET',
                url: url + args.id,
                params: {
                    json: true
                },
                success: function(response) {
                    var responseObj = Ext.JSON.decode(response.responseText);
                    if (responseObj.success) {
                        favorites.remove(item);
                        //update button text and rebind listeners
                        previewItem.updateButton(user);
                    } else {
                        app.showLoginForm();
                    }
                },
                failure: function(response) {                    
                    Ext.Msg.show({	
                        title: 'Sorry, something went wrong.',
    					message: 'Save failure. Please try again later.',
    					width: 300,
    					//multiline: true,
    					buttons: Ext.MessageBox.OK,
    					icon: Ext.MessageBox.WARNING
    				});
                }
            });
        }, this);
        
        previewItem.setData(item);
        previewItem.updateInfo(item);
        previewItem.updateButton(user);
        
        //create a wrapper so the navigationView sets its title correctly
        var cont = Ext.create('Ext.Container', {
            title: title,
            layout: 'fit',
            items: [previewItem]
        });
                
        nav.push(cont);

        return false;
    },
    onLoginSubmit: function(btn, event) {
        var form = this.getLoginForm(),
            vals = form.getValues();

        if (!vals.password.length || !vals.username.length) {
            return;
        }
        
        form.submit({
            url: '/users/login',
            method: 'post',
            submitDisabled: false,
            success: this.doLogin,
            failure: function(form, result) {
                var message = '';
                for (err in result.errors) {
                    message += result.errors[err] + '<br>';
                }
                
                Ext.Msg.show({	
                    title: 'Login Error',
                    message: message,
					width: 300,
					multiline: true,
					buttons: Ext.MessageBox.OK,
					icon: Ext.MessageBox.WARNING
				});
            },
            scope: this,
            waitMsg: 'Logging you in&hellip;',
            autoAbort: true
        });
    },
    onLoginUp: function(e){
        var keyCode = e.event.keyCode;
        //the return keyCode is 13.
        if (keyCode == 13) {
            this.onLoginSubmit();
        }
    },
    /**
     * Called when an item in the searchList is swiped. It will show the delete button in the swiped item.
     */
    onSearchSwipe: function(dataview, index, target) {
        if (Ext.getStore('users').getCount() < 2) {
            return;
        }

        //set the currentDeleteButton so we know what is it to hide it in the listener below
        this.currentDeleteButton = target.getDeleteButton();
        this.currentDeleteButton.show();

        //add a listener to the body, so we can hide the button if the user taps anywhere but the button.
        Ext.getBody().on('tap', this.onBodyTap, this);
    },    
    /**
     * Called when a use taps the delete button on a searchList item
     */
    onSearchDelete: function(button, e) {
        var item   = button.getParent(),
            search = item.getRecord();

        this.fireAction('destroy', [search, button], 'doDestroy');
    },
    /**
     * Called when a search is selected from the searchSuggest list. It sets the store of the resultlist to the searches() store of the selected
     * search query instance.
     */
    onSearchSelect: function(list, record) {
        //record.set({query: 'pussy'});
        
        var search = record.searches(),
            resultList = this.getResultList();
            
        resultList.setStore(search);
        
        /**
        * We listen for the load event on the search store and concatenate the results from each hasMany association
        * so each renders as its own list item
        */
        search.addListener('load', function(store, records, success, operation, eOpts) {
            if (!success) return;
            
            var results = records[0],
                data = [],
                models = {},
                videos = {},
                albums = {};
            
            if (results.models()) models = results.models().getData().items;
            if (results.videos()) videos = results.videos().getData().items;
            if (results.albums()) albums = results.albums().getData().items;
                        
            data = Ext.Array.merge(models, videos, albums);
            
            search.remove(results);
            search.add(data);
        });
            
        search.load();
    },
    /**
     * Toggles the searchSuggest list
     */
    onSearchFocus: function(input, eOpts) {
        if (Ext.getStore('suggestions').getCount() < 1) return;
        var suggest = Ext.getCmp('searchSuggest');
                
        if (!suggest.getParent()) {
            Ext.Viewport.add(suggest);
        }
        
        this.suggest = suggest;
        suggest.showBy(input);
        
        //add a listener to the body, so we can hide the button if the user taps anywhere but the button.
        Ext.getBody().on('tap', this.hideSuggest, this);
    },
    hideSuggest: function(e) {
        if (this.getSearchField().isFocused) return;
        
        if (this.suggest) {
            this.suggest.hide();
        } 

        //remove the listener
        Ext.getBody().un('tap', this.onBodyTap, this);
    },
    /**
     * Called when the user taps on the body. Hides the delete button and removes the listener from the body.
     */
    onBodyTap: function(e) {
        if (this.currentDeleteButton) {
            this.currentDeleteButton.hide();
        }

        if (this.getSearchField().isFocused) return;
        
        if (this.suggest) {
            this.suggest.hide();
        } 

        //remove the listener
        Ext.getBody().un('tap', this.onBodyTap, this);
    },
    /**
     * Removes a specified search record from the searches store. The tablet controller subclass has some additional
     * logic to select the nearest saved search
     */
    doDestroy: function(search, button) {
        var store = Ext.getStore('users');

        store.remove(search);
        store.sync();
        button.hide();
    },    
    /**
     * Called on the keyup event of the search field. If the enter/return key was pressed, it will fire the search action.
     */
    onSearch: function(field, e) {
        var keyCode = e.event.keyCode,
            searchField = this.getSearchField();
        
        //the return keyCode is 13.
        if (keyCode == 13) {
            //fire the search action with the current value of the searchField
            this.fireAction('search', [searchField.getValue()], 'doSearch');
        }
    },    
    doSearch: function(search) {
		var model         = mt.model.suggest,
            resultList    = this.getResultList(),
            searchList    = this.getSearchList(),
            suggestStore  = Ext.getStore('suggestions'),
            searchField   = this.getSearchField(),
            query, index;
        
        
        // ensure there is a search...
        if (!search) {
            return;
        }
        //check if ths search already exists in the suggestStore
        index = suggestStore.find('query', search);

        if (index != -1) {
            //it exists, so lets just select it
            search = suggestStore.getAt(index);

            searchList.select(search);

            //empty the field and blur it so it looses focus
            searchField.setValue('');
            searchField.blur();
            this.hideSuggest();
            return;
        }

        //if the passed argument is not an instance of a suggest model, create a new instance
        if (!(search instanceof mt.model.suggest)) {
            query = search.replace("%20", " ");
            search = new model({
                query: query
            });
        }

        //add the new search instance to the suggestStore
        suggestStore.add(search);
        
        suggestStore.sync();
        
        // select the new record in the list
        searchList.select(search);

        //empty the field and remove focus from it
        searchField.setValue('');
        searchField.blur();
        this.hideSuggest();
    },
    showLoginForm: function(btn, event) {
        var login = this.getLoginForm();
                
        if (!login.getParent()) {
            Ext.Viewport.add(login);
        }
        
        login.show();
        return false;
    },
    hideLoginForm: function(btn, event) {
        var login = this.getLoginForm();
        
        login.reset();
        login.hide();
    },
    doLogout: function(button, e) {
        var userModel = mt.model.user,
            usersStore = Ext.getStore('users'),
            app = this,
            loginButton = app.getLoginButton();

        loginButton.un('tap', this.doLogout, this);
                
        Ext.Ajax.request({
            url: '/users/logout',
            callback: function(response) {
                loginButton.setText('Login');
                loginButton.on('tap', app.showLoginForm, app);
            }
        });
            
        //remove the user instance from the usersStore
        if (this.user) {
            usersStore.remove(this.user);
            usersStore.sync();
            this.user = null;            
            this.getMoreNav().pop();
        }
    },
    doLogin: function(form, result) {
        var userModel = mt.model.user,
            usersStore = Ext.getStore('users'),
            index;

        if (form) {
            form.reset();
            form.hide();
        }
        
        //check if this user ID already exists in the usersStore
        index = usersStore.find('user_id', result.user.user_id);
                
        if (index != -1) {
            //user exists, so load that fucker
            this.user = usersStore.getAt(index);
            this.user.set('authed', true);
            this.updateProfile();
            return;
        }

        //if the passed argument (result.user) is not an instance of a user model, create a new instance
        if (!(result.user instanceof mt.model.user)) {
            this.user = new userModel({
                user_id: result.user.user_id,
                username: result.user.username,
                email: result.user.email,
                password: result.user.password,
                authed: true
            });
        }
        
        //add the new user instance to the usersStore
        usersStore.add(this.user);
        this.updateProfile();
        
        usersStore.sync();
        
        this.updateProfile();
    },
    updateProfile: function() {
        if (!this.user || !this.user.get('authed')) return;
        var loginButton = this.getLoginButton(),
            favorites = this.user.favorites(),
            videoPreview = this.getVideoPreview();
        
        loginButton.un('tap', this.showLoginForm, this);
        loginButton.setText('Logout');
        loginButton.on('tap', this.doLogout, this);
        
        if (videoPreview) {
            videoPreview.updateButton(this.user);
        }
        
        /**
        * Listen for the load event on the search store and concatenate the results from each hasMany association
        * so each renders as its own list item
        */
        favorites.addListener('load', function(store, records, success, operation, eOpts) {
            if (!success) {
                this.user.set('authed', false);
                this.getMoreNav().pop();
                return this.showLoginForm();
            }
                        
            var results = records[0],
                data = [],
                videos = {},
                albums = {};
            
            if (results.videos()) videos = results.videos().getData().items;
            if (results.albums()) albums = results.albums().getData().items;
            
            data = Ext.Array.merge(videos, albums);

            favorites.remove(results);
            favorites.add(data);
        }, this);
    }
});