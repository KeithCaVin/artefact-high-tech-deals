import axios from "axios";
import {load} from "cheerio";

export const scrapeAxiom = async(keyword) => 
{
	var final_axiom_url = "https://www.axiomtelecom.com/home/search?q="+keyword;
	const {data} = await axios.get(final_axiom_url);
	let $ = load(data);
	let axiomData = [];

	const axiomField =$('#search-results');

	axiomField.find('#search-result-items .clearfix').each((i,element) =>{
		const $element= $(element);
	
		// This code gets the href of each items from axiom
		var axiomItemLink= $element.find('a').attr('href');
		var axiomItemLinkString = JSON.stringify(axiomItemLink);
		let newUrl = ('https://www.axiomtelecom.com/' + axiomItemLinkString.replace("\"",'')).replace("\"",'');
		
		//This code gets the image of the item from axiom
		let axiomItemImg= $element.find('.variant-image img').attr('src');
	
		//This code gets the name of the item from axiom
		let axiomItemName=$element.find('.variant-title').text();

		//This code gets the price of the item from axiom
		let axiomItemPrice=$element.find('.variant-final-price').text().replace(/^\s+|\s+$/g,'');
		
		axiomData.push({
			axiomImg: axiomItemImg,
			axiomLink: newUrl,
			axiomName:axiomItemName,
			axiomPrice:axiomItemPrice
		})

	})
     
    return(axiomData);
          
}
       