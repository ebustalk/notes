Ext.define('TestMVC.view.GuestPanel', {
    extend: 'Ext.NavigationView',

    xtype: 'guestpanel',

    requires: [
        'TestMVC.view.guest.GuestList',
        'TestMVC.view.guest.GuestDetail'
    ],

    config: {
        title: 'Guests',
        iconCls: 'user',

        navigationBar: {
            items: [{
                xtype: 'button',
                align: 'right',
                iconCls: 'refresh',
                iconMask: true,
                hidden: false,
                action: 'refresh'
            }, {
                xtype: 'button',
                align: 'right',
                iconCls: 'action',
                iconMask: true,
                hidden: true,
                action: 'action'
            }]
        },

        items:[{
            title: 'Guests',
            xtype: 'guestlist'
        }]
    }

});


