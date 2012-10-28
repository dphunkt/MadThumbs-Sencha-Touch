Ext.define('mt.view.loginform', {
	extend: 'Ext.form.Panel',
	xtype: 'loginform',
    requires: ['Ext.field.Text', 'Ext.field.Password', 'Ext.field.Checkbox', 'Ext.form.FieldSet'],
    config: {
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        //styleHtmlContent: true,
        width: Ext.os.is.iOS ? 320 : 300,
        height: Ext.os.is.iOS ? 360 : 400,
        url: '/users/login',
        id: 'loginForm',
        standardSubmit: false,
        items: [{
            xtype: 'fieldset',
            title: 'Login to MadThumbs',
            instructions: 'Enter your username and password.',
            items: [{
                xtype: 'textfield',
                id: 'username',
                name : 'username',
                required: true,
                placeHolder: 'Username',
                autoCapitalize: false
            },
            {
                xtype: 'passwordfield',
                name : 'password',
                required: true,
                placeHolder: 'Password'            
            },
            {
                xtype: 'hiddenfield',
                name : 'remember',
                value: true
            },
            {
                xtype: 'hiddenfield',
                name : 'json',
                value: true         
            }]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                flex:1,
                ui: 'decline',
                xtype: 'button',
                text: 'Cancel',
                action: 'cancelLogin'
            },
            {   
                xtype: 'spacer',
                width: 4
            },
            {
                flex:1,
                ui: 'confirm',
                xtype: 'button',
                text: 'Login',
                action: 'submitLogin'
            }]
        }],
        scrollable: {
            direction: 'vertical',
            directionLock: true
        }
    }
});