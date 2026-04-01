const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.post("/note", (req, res) => {
  // res.send(req.body)
  notes.push(req.body);

  res.status(201).json({
    msg: "note created sufff",
  });
});

app.get("/note", (req, res) => {
  res.status(200).json({
    msg: "fetched all notes",
    notes,
  });
});

app.delete("/note/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(200).json({
    msg: `${req.params.index} note deleted suff`,
  });
});

app.patch("/note/:index", (req, res) => {
  notes[req.params.index].dis = req.body.dis;

  res.status(201).json({
    msg: "note updated suff",
  });
});

app.put("/note/:index",(req,res)=>{
    notes[req.params.index] = req.body

    res.status(200).json({
        msg:"note completely updated"
    })
})
module.exports = app;
