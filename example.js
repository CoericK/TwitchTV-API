var TwitchTV = require('./lib');

var channel = 'arteezy';

TwitchTV.channels.info(channel).done(function(res){
	console.log(res);
}, function (err) {

	if (err.statusCode === 404) {
		console.log('Page not found');
	} else {
		throw err;
	}
});