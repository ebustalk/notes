Ext.define("NotesApp.view.NotesListContainer", {
    extend: "Ext.Container",
    alias: "widget.noteslistcontainer",

    initialize: function(){
        this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: "New",
            ui: "action",
            handler: this.onNewButtonTap,
            scope: this
        };


        //Toolbar
        var topToolBar = {
            xtype: "toolbar",
            title: "My Notes",
            docked: "top",
            items:[
                    {xtype:'spacer'}, newButton]
        };//end var topToolBar


        //Notes
        var notesList = {
            xtype: "noteslist",
            store: Ext.getStore("Notes"),
            listeners: {
                disclose: {fn: this.onNotesListDisclose, scope: this}
            }
        };



        //lets add our components
        this.add([topToolBar, notesList]);
    },

    onNewButtonTap: function() {
        console.log("newNoteCommand");
        this.fireEvent("newNoteCommand", this);
    },

    onNotesListDisclose: function(list, record, target, index, evt, options){
        console.log("editNoteCommand");
        this.fireEvent('editNoteCommand', this, record);
    },

    config: {
        layout: {
            type: 'fit'
        }
    }


});