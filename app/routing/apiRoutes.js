var surveyData = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", (req, res) => {
        res.json(surveyData);
    });

    app.post("/api/tables", (req, res) => {
        surveyData.push(req.body);
        res.json(true);
    });
};