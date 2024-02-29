const express = require('express');
const cors = require('cors');
const data = require('./stories');

const app = express();

app.use(cors());


app.get("/", (req, res)=> {
    res.status(200).send(data.stories);
});

app.get("/story/:storyId", (req, res)=>{
    story_id = parseInt(req.params.storyId);
    if(story_id >= data.story_length || story_id < 0) {
        res.status(404).send("Not Found");
        return;
    }

    res.status(200).send(data.stories[story_id]);
});

app.get("/story", (req, res)=>{
    const index = Math.floor(Math.random() * data.story_length );  //Math.floor(Math.random() * (max - min) + min)
    res.status(200).send(data.stories[index]);
});

app.listen(4000);