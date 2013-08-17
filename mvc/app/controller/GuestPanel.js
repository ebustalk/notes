Ext.define('TestMVC.controller.GuestPanel', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            guestPanelNavigationView: 'guestpanel',
            guestPanelRefreshButton: 'guestpanel titlebar button[action=refresh]',
            guestPanelEditButton: 'guestpanel titlebar button[action=action]'
        },
        control: {
            'guestPanelNavigationView': {
                activeitemchange: 'onGuestPanelActiveItemChange'
            }
        }
    },


    //***************************************************************************
    // SHOW the list
    //***************************************************************************
    onGuestPanelActiveItemChange: function(navigationView, value, oldValue) {
        console.log('onGuestPanelActiveItemChange');

        var newValue = value.getItemId().split('-')[1],
            oldValue = oldValue.getItemId().split('-')[1],
            oldNewValue = oldValue + '-' + newValue;

        switch (oldNewValue) {
            case 'guestlist-guestdetailform':
                //console.log('>>> show detail form');
                this.getGuestPanelRefreshButton().setHidden(true);
                this.getGuestPanelEditButton().setHidden(false);
                break;
            case 'guestdetailform-guestlist':
                //console.log('<<< quit detail form');
                this.getGuestPanelRefreshButton().setHidden(false);
                this.getGuestPanelEditButton().setHidden(true);
                break;
        }
    }


});
