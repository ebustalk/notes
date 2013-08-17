Ext.define('TestMVC.view.guest.GuestList', {
    extend: 'Ext.List',

    xtype: 'guestlist',

    config: {
        onItemDisclosure: true,
        emptyText: 'No data found!',
        store: 'Guests',

        items: [{
            xtype: 'toolbar',
            docked: 'top',
            style: 'background:darkgray',
            items: [{
                xtype: 'searchfield',
                placeHolder: 'Filter or search... '
            }, {
                xtype: 'button',
                iconCls: 'search',
                iconMask: true,
                ui: 'confirm',
                action: 'search'
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'button',
                iconCls: 'add',
                iconMask: true,
                ui: 'action',
                action: 'add'
            }]
        }],

        itemTpl : [
            '<p>{guestName}</p>',
            '<div style="font-size: 0.75em; color: darkgray">{guestOrigin}</div>'
        ].join('')

	}

});
