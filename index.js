module.exports = function Capser(string) {

	var stash = [];

	if (string != " ") {

		string = string.split('');

		for (var i = 0; i < string.length; i++) {
			stash.push(string[i]);
		}

		for (var i = 0; i < string.length; i++) {
			if (i == 0) {
				var letter = stash[0];
				stash[0] = letter.toUpperCase();
			}

			if (stash[i] == " ") {
				var letter = stash[i + 1];
				stash[i + 1] = letter.toUpperCase();
			}


		}
	}

	return stash.join('');
}
