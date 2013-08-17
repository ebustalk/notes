Ext.define('TestMVC.model.Guest', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'guestId', type: 'string' },
            { name: 'guestName', type: 'string' },
            { name: 'guestOrigin', type: 'string' }
            ]
    }
});


