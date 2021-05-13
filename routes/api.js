//Loads Data
//const express = require('express');
const fs = require("fs");
const path = require("path");
const db = __dirname + "/../db/db.json";
const useDb = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

//Get/Post
module.exports = (app) => {

    let notes = JSON.parse(fs.readFileSync(db, "utf8"))
        //Get request; shows note data
        app.get("/api/notes", (req, res) => {

            fs.readFile(db, "utf-8", (err, data) => {
                if (err) throw err;
                res.json(JSON.parse(data))
            })
        });

        //Post request
        app.post("api/notes", (req, res) => {
            const newNote = req.body;
            req.bodyid = uuidv4();
            useDb.push(newNote);
            console.log(useDb);

            fs.writeFile(path.join(_dirname, "../db/db.json"), JSON.stringify(useDb), (err) => {
                if(err) throw err;
                res.json("response");
            });
        });

        //Delete route
        app.delete("api/notes/:id", (req, res) => {
            let idDel = req.params.id;

            notes = notes.filter(noteSelected => {
                return noteSelected.id !=idDel
            });

            fs.writeFile(path.join(_dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
                if (err) throw err;
                res.json(notes);
            });
        });
   
};