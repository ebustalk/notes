Ext.define('TestMVC.store.Guests', {
    extend: 'Ext.data.Store',

    requires: [
        'TestMVC.model.Guest'
    ],

    config: {
        model: 'TestMVC.model.Guest',
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'data/GuestData.json',
            reader: {
                type: 'json',
                rootProperty: 'guests'
            }
        },

        sorters: [{
            property : 'guestName',
            direction: 'ASC'
        }]

    }
});