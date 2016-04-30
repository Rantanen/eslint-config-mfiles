
module.exports = {

    extends: 'mfiles/index',

    env: {
        node: true
    },

    globals: {
        MFiles: false,
        ActiveXObject: false,
    },

    rules: {

        // UI Ext uses a lot of COM objects with capital names.
        "new-cap": 0,
    }
}

