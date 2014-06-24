TwitchTV-API
============

TwitchTV API for NodeJS applications.


## How to use

The following example shows you how to use this library. In this case we are getting the channel info provided by the API.

```js
var TwitchTV = require('twitchtv-api');

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
```
