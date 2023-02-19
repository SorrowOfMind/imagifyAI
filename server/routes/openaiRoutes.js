const router = require("express").Router();
require("dotenv").config();
const {Configuration, OpenAIApi} = require("openai");


const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

router.get("/", (req, res) => {
    res.send("open aiiiii")
});

router.post("/", async (req, res) => {
    try {
        const {promp} = req.body;
        const aiRes = await openai.createImage({
            prompt,
            n: "1",
            size: "1024x1024",
            response_format: "b64_json"
        });

        const img = aiRes.data.data[0].image;

        res.status(200).json({photo: img});
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
});



module.exports = router;