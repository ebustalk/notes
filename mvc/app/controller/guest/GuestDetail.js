Ext.define('TestMVC.controller.guest.GuestDetail', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            guestPanelActionButton: 'guestpanel titlebar button[action=action]',
            guestDetail: 'guestdetailform',
            guestDetailSaveButton: 'guestdetailform button[action=save]'
        },
        control: {
            'guestPanelActionButton': {
                tap: 'onGuestDetailAction'
            },
            'guestDetailSaveButton': {
                tap: 'onGuestDetailSave'
            }
        }
    },


    //***************************************************************************
    // ACTION...
    //***************************************************************************
    onGuestDetailAction: function(element, e) {
        console.log('onGuestDetailAction');
    },


    //***************************************************************************
    // SAVE item
    //***************************************************************************
    onGuestDetailSave: function(element, e) {
        console.log('onGuestDetailSave');
    }

});
