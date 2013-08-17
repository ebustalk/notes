Ext.define("NotesApp.controller.Notes", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            //lookout views by xtype
            notesListContainer: "noteslistcontainer"
        },
        control: {
            notesListContainer: {
                newNoteCommand: "onNewNoteCommand",
                editNoteCommand: "onEditNoteCommand"
            }
        }
    },

    //---Commands
    onNewNoteCommand: function () {
        console.log("onNewNoteCommand 1234");
    },

    onEditNoteCommand: function () {
        console.log("onEditNoteCommand 1234");
    },

    launch: function () {
        this.callParent(arguments);

        Ext.getStore("Notes").load();

        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }


});