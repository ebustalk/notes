Ext.define('TestMVC.controller.guest.GuestList', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            guestPanelRefreshButton: 'guestpanel titlebar button[action=refresh]',
            guestList: 'guestlist',
            guestListSearchField: 'guestlist searchfield',
            guestListSearchButton: 'guestlist toolbar button[action=search]',
            guestListAddButton: 'guestlist toolbar button[action=add]'
        },
        control: {
            'guestPanelRefreshButton': {
                tap: 'onGuestListRefresh'
            },
            'guestListSearchField': {
                keyup: 'onGuestListFilter'
            },
            'guestListSearchButton': {
                tap: 'onGuestListSearch'
            },
            'guestListAddButton': {
                tap: 'onGuestListAddItem'
            },
            'guestList': {
                itemtap: 'onGuestListItemTap'
            }
        }
    },


    //***************************************************************************
    // REFRESH the list
    //***************************************************************************
    onGuestListRefresh: function(element, e) {
        console.log('refresh list');
    },


    //***************************************************************************
    // FILTER item(s)
    //***************************************************************************
    onGuestListFilter: function(element, e) {
        // do the filtering of the store here
        var searchPattern =  this.getGuestListSearchField().getValue(),
            filterPattern = new RegExp(searchPattern, 'i');
            store = this.getGuestList().getStore();

        console.log('onGuestListFilter - filterData: ' + searchPattern);
        // reset the filter
        store.clearFilter();
        // filter only, if there is a filter value
        if (searchPattern === '') return;
        store.filterBy(function(record, id) {
            if (filterPattern.test(record.data.guestName)) return true;
            if (filterPattern.test(record.data.guestOrigin)) return true;
            return false;
        }, this)
    },


    //***************************************************************************
    // SEARCH item(s)
    //***************************************************************************
    onGuestListSearch: function(element, e) {
        // do the search here - f.e. an AJAX call to your server, etc.
        var searchPattern =  this.getGuestListSearchField().getValue();
        console.log('onGuestListSearch - searchData: ' + searchPattern);
    },


    //***************************************************************************
    // ADD item
    //***************************************************************************
    onGuestListAddItem: function(element, e) {
        // add a new item to the store here
        console.log('onGuestListAddItem');
    },


    //***************************************************************************
    // SELECT item: show the detail view
    //***************************************************************************
    onGuestListItemTap: function(list, index, target, record) {
        console.log('onGuestListItemTap');
        // load the detail
        var navigationView = list.up('navigationview');
        navigationView.push({
            title: record.data.guestName,
            xtype: 'guestdetailform',
            record: record
        });
    }

});
