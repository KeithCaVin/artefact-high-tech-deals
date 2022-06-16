import axios from "axios";
import {load} from "cheerio";


export const scrapeNoon = async(keyword) =>
{
	var final_noon_url = "https://www.noon.com/uae-en/search/?q="+keyword;
	const {data} = await axios.get(final_noon_url);
	let $ = load(data);
	let noonData = [];
	const noonField = $('#__next > div > section > div > div > div > div.sc-15b94da2-5.iMJUuX > div.sc-15b94da2-7.iiGMEf.grid');
	await noonField.find('.productContainer').each((i,element) =>{
		const $element= $(element);
		var noonItemLink = $element.find('a').attr('href');
		var finalnoonItemLink = "https://www.noon.com/uae-en/"+noonItemLink;
		var noonItemImg = $element.find('.sc-d3293424-1.bfzekZ div div div img').attr('src');   
		var noonItemName = $element.find('.sc-d3293424-10.eoizYW span').text();
		var noonItemPrice = $element.find('.sc-ac248257-1.cfjJNJ').text().replace(/ |\n /g,'');
		
		noonData.push({
			noonLink:finalnoonItemLink,
			noonImg: noonItemImg,
			noonName: noonItemName,
			noonPrice:noonItemPrice
		});

	});
	
	return (noonData);
}