
module.exports = {

    extends: "eslint:recommended",

    plugins: [ "xss" ],

    parserOptions: {
        ecmaVersion: 6,
        sourceType: "script",
        ecmaFeatures: { }
    },

    rules: {
        "no-constant-condition": 0,
        "no-console": 0,

        "callback-return": [ "error", [ "done", "cb", "next", "callback" ] ],

        "no-unused-vars": [ "error", { "vars": "all", "args": "none" } ],
        "comma-dangle": 0,
        "strict": [ "error", "global" ],
        "eqeqeq": 2,

        "array-bracket-spacing": [ "error", "always" ],
        "block-spacing": [ "error", "always" ],
        "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ],
        "camelcase": [ "error", { "properties": "never" } ],
        "comma-spacing": [ "error", { "before": false, "after": true } ],
        "comma-style": 2,
        "computed-property-spacing": [ "error", "always" ],
        "consistent-this": [ "error", "self" ],
        "func-style": [ "error", "expression" ],
        "key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ],
        "keyword-spacing": [ "error", {
            "after": false,
            "overrides": {
                "from": { "after": true },
                "return": { "after": true },
                "import": { "after": true },
                "else": { "after": true },
                "try": { "after": true },
                "do": { "after": true }
            }
        } ],
        "lines-around-comment": [ "error", {
            "beforeLineComment": true,
            "beforeBlockComment": false,
            "allowArrayStart": true,
            "allowObjectStart": true
        } ],

        "new-cap": 2,
        "no-lonely-if": 1,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [ "error", { "max": 2 }],
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 1,
        "no-whitespace-before-property": 2,
        "object-curly-spacing": [ "error", "always" ],
        "semi": 2,
        "semi-spacing": [ "error", { "before": false, "after": true } ],
        "space-before-blocks": [ "error", "always" ],
        "space-before-function-paren": [ "error", "never" ],
        "space-in-parens": [ "error", "always" ],
        "space-infix-ops": [ "error", { "int32Hint": false } ],
        "spaced-comment": [ "error", "always", { "block": { "exceptions": [ "*" ] } } ],
        "valid-jsdoc": [ "error", {
            "prefer": {
                "return": "returns"
            },
            "requireReturn": false,
            "preferType": {
                "String": "string",
                "Number": "number",
                "object": "Object"
            }
        } ],

        "space-unary-ops": [ "error", {
            "words": true,
            "nonwords": false,
            "overrides": { "!": true }
        } ],

        "indent": [ "error", "tab" ],
        "max-len": [ "error", { "code": 120, "ignoreUrls": true } ],
        "quotes": [ "error", "double" ],

        "xss/no-mixed-html": [ "error", {
            "htmlVariableRules": [ "AsHtml$", "HtmlEncoded$", "^html(A-Z|$)" ],
            "htmlFunctionRules": [ ".asHtml", "HtmlEncoded$", "Html$" ],
            "functions": {

                // jQuery
                "$": { "htmlInput": true, "safe": [ "document", "this" ] },
                ".html": { "htmlInput": true, "htmlOutput": true },

                // Passthrough
                ".join": { "passthrough": { "obj": true, "args": true } },

                // Encoding functions
                "utilities.encodehtml": { "htmlOutput": true },
                "utilities.encodecss": { "htmlOutput": true },
                "Number": { "htmlOutput": true }
            }
        } ]
    }
}
        
