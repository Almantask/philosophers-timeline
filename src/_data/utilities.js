const moment = require('moment');

const sentenceCase = function (str) {
  if (typeof str !== 'string' || !str.length) {
    return str;
  }
  str = str.replace(/-/g, ' ');
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const entryToString = function(entry){
	const linksString = entry.links.map(link => link.linkText).join(', ');
	const categoriesString = entry.categories.join(', ');
	return `${entry.body} ${entry.title} ${linksString} ${categoriesString}`;
}

const humanizeDate = function (datetime, date) {
  const dateParts = datetime.split('-');
  var year;
  
  if(datetime.startsWith('-')){
	  year = dateParts[1];
	  return `${year} BC`;
  }
  else{
	  
	  year = dateParts[0];
	  
	  if(Number(year) > 1000){
		  return year;
	  }
	  else{
		  return `AD ${Math.abs(year)}`; 
	  }
  }
  
  
};

const isWrappedInParagraphTags = function (html) {
  if (typeof html !== 'string') {
    return false;
  }
  return html.substring(0, 3) === '<p>';
};

module.exports = {
  entryToString,
  sentenceCase,
  humanizeDate,
  isWrappedInParagraphTags,
};
