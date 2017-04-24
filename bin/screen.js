var page = require('webpage').create();

var islandCount = 3;

var sailing = function (num) {
	console.log('Land ahoy!');// body...

page.viewportSize = {
  width: 1920,
  height: 920
};


	page.open('https://pnewton84.github.io/island.html', function() {
  		// page.render('island' + num + '.png');
  		page.render('island-' + num + '.png');
		// phantom.exit();
	});
}




// for (var i = 0; i < islandCount; i++) {
// 	console.log(islandCount[i]);
// 	sailing(i);
// };



var started = Date.now();

  // make it loop every 100 milliseconds
  var interval = setInterval(function(){

    // for x seconds
    if (Date.now() - started > 3000000) {

      // and then pause it
      clearInterval(interval);

    } else {

      // the thing to do every 100ms
	sailing(Date.now());

    }
  }, 500); // every x milliseconds