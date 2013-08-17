Ext.define('TestMVC.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'TestMVC.view.GuestPanel',
        'TestMVC.view.AboutPanel'
    ],

    config: {
        tabBar: {
            docked: 'bottom'
        },

        items: [{
            xtype: 'guestpanel'
        }, {
            xtype: 'aboutpanel'
        }]
    }
});
