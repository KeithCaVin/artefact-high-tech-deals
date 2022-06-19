import {scrapeAmazon} from './Scrapers/getAmazon.js';
import { scrapeVirgin } from './Scrapers/getVirgin.js';
import { scrapeAxiom } from './Scrapers/getAxiom.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

import express from "express";
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.json());
app.use(cors());

app.get("/get_items", async (req, res) =>{
	let amazonData = [];
	let virginData = [];
	let axiomData = [];
	const keyword = req.query.word;
	amazonData = await scrapeAmazon(keyword);
	virginData = await scrapeVirgin(keyword);
	axiomData = await scrapeAxiom(keyword);
	res.send({aData: {amazonData}, vData : {virginData}, xData: {axiomData}});

});


app.use(express.static('public'));

app.get('*', function (req, res) {
	res.send(res.sendFile(path.join(__dirname, 'public', 'index.html')));
});



app.set('port', (process.env.PORT || 3005));

app.listen(app.get('port'), () =>{
	console.log("Server is running in port 3005");
})