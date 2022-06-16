import axios from "axios";
import {load} from "cheerio";

export const scrapeAmazon = async (keyword) =>
{
	var final_amazon_url = "https://www.amazon.ae/s?k="+keyword;
	const {data} = await axios.get(final_amazon_url);
	const $ = load(data);
	const selectorID = "#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row";
	const container = $(selectorID);
	let amazonData = [];
	
	await container.find('div .sg-col-inner').each((i, element) =>{
		const $element= $(element);

		let amazonItemImg=$element.find('.s-image').attr('src');
        let amazonItemLink='https://www.amazon.ae'+$element.find('.a-section.a-spacing-base div a').attr('href');
        let amazonItemName=$element.find('.a-size-base-plus.a-color-base.a-text-normal').text();
        let amazonItemPrice=$element.find('.a-price-whole').text().replace(".",'');

		if (amazonItemName === null)
		{
			amazonItemName=$element.find('.a-size-base-plus.a-color-base').text();
		}
		amazonData.push({
			amazonImg: amazonItemImg,
			amazonLink:amazonItemLink,
			amazonName:amazonItemName,
			amazonPrice:amazonItemPrice
		});
	})
	
	return(amazonData);
}