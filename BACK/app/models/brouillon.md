const CoreModel = require("./coreModel");

class Question extends CoreModel {
    //_id;
    question;
    anecdote;
    wiki;
    level_id;
    answer_id;
    quiz_id;

    static nameOfTheTable = "question";

    constructor(questionDB) {
        //this._id = questionDB.id;
        super(questionDB);
        this.question = questionDB.question;
        this.anecdote = questionDB.anecdote;
        this.wiki = questionDB.wiki;
        this.level_id = questionDB.level_id;
        this.answer_id = questionDB.answer_id;
        this.quiz_id = questionDB.quiz_id;
    }

    get question() {
        return this.question;
    };

    set question(value) {
        if(typeof value != "string") {
            throw Error("Question.question must be a string  !");
            // on "lève" une erreur => ça arrête tout !
        }
        this.question = value;
    };

    get anecdote() {
        return this.anecdote;
    };

    set anecdote(value) {
        if(typeof value != "string") {
            throw Error("Question.anecdote must be a string !");
            // on "lève" une erreur => ça arrête tout !
        }
        this.anecdote = value;
    };

    get wiki() {
        return this.wiki;
    };

    set wiki(value) {
        if(typeof value != "string") {
            throw Error("Question.description must be a string !");
            // on "lève" une erreur => ça arrête tout !
        }
        this.wiki = value;
    };

    get quiz_id() {
        return this.quiz_id;
    };

    set quiz_id(value){
        if(isNaN(parseInt(value, 10))) {
            throw Error("Question.quiz_id must be a integer !");
            // on "lève" une erreur => ça arrête tout !
        }
        this.quiz_id = value;
    };
}

module.exports = Question;