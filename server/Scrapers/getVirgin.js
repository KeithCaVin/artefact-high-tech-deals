import axios from "axios";
import {load} from "cheerio";

/*
cant scrape the images
*/
export const scrapeVirgin = async(keyword) =>
{
	var final_virgin_url = "https://www.virginmegastore.ae/en/search/?text="+keyword;
	const {data} = await axios.get(final_virgin_url);
	let $ = load(data);
	let virginData = [];
	const virginField = $('body > main > div.container.product-list > section > ul.product-listing.product-list__item-wrapper.grid.g-row__4');

	await virginField.find('.product-list__item.g-elem.m2.md2.g-row--margin-x.product-item').each((i,element) =>{
		const $element= $(element);
		var virginItemLink = $element.find('a').attr('href');
		var finalVirginItemLink = "https://www.virginmegastore.ae"+virginItemLink;
		var virginItemImg = "https://www.virginmegastore.ae" + $element.find('img').attr('src');   
		var virginItemName = $element.find('.product-list__name.name.no-decoration.d-inline-block').text();
		var virginItemPrice = $element.find('.price__value').text().replace(/ |\n /g,'');
		
		virginData.push({
			virginLink:finalVirginItemLink,
			virginImg: virginItemImg,
			virginName: virginItemName,
			virginPrice:virginItemPrice
		});

	});
	
	return (virginData);
}