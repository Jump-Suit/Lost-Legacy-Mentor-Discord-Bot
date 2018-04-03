var env = require('../cmd-config.json'),
    Help = require('./Help.js');

class LLBot {
    constructor() {
        this.keywords = env.keywords;
        this.Help = new Help;
        this.Urban = new Urban;
    }
    loadKeywords() {
        var result = [];
        for (var i in this.keywords) {
            if (this.keywords.hasOwnProperty(i)) {
                result.push(this.keywords[i]);
            }
        }
        return result;
    }
    checkMessageForKeywords(message, triggers, callback) {
        for (var i = 0; i != triggers.length; i++) {
            var substring = triggers[i];
            if (message.indexOf(substring) == 0) {
                return callback(substring);
            }
        }
        return callback(0);
    }
    getKeyByValue(object, value) {
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (object[prop] == value)
                    return prop;
            }
        }
    }
    runKeywordFunction(keywordFunction, keyword, message, callback) {
        this[keywordFunction].Message(keyword, message, callback);
    }
}

module.exports = LLBot;

module.exports.help = {
    name: 'index',
};