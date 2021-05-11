//Loads Data
const fs = require("fs");
const path = require("path");
let notes = require("../db/db.json");

//Get/Post
module.exports = (app) => {
    
    app.get('/api/notes', (req, res) =>{
        res.json(notes)
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        console.log(newNote);
        notes.push(newNote)
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err, data) => {
            if(err) throw err;
            return res.json(notes);
        })

    });

}