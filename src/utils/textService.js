const countWords = (words) => {
	const countMap = new Map();
	words.forEach(word => {
		if (countMap.get(word)) {
			countMap.set(word, countMap.get(word)+1);
		} else {
			countMap.set(word, 1);
		}
	});
	return new Map([...countMap.entries()].sort((a, b) => {
		if(a[1] > b[1]) {
			return -1;
		} else if(a[1] < b[1]) {
			return 1;
		} else {
			return 0;
		}
	}));
}

export const getMostUsedWordsAndOccurance = (text, noOfWordsRequired) => {
	text = text.removeStopWords();
	const countMap = countWords(text.split(/\s+/));
	return [...countMap.entries()].map(entry => {
		return {'label': entry[0], 'y': entry[1], 'color': '#00acee'}
	}).splice(0, noOfWordsRequired);
}