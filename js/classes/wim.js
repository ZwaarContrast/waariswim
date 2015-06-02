var dictionary = 
[
"aardvark",
"albatross",
"alligator",
"alpaca",
"anaconda",
"ant",
"anteater",
"antelope",
"ape",
"armadillo",
"ass",
"baboon",
"badger",
"bandicoot",
"barracuda",
"basilisk",
"bat",
"bear",
"beaver",
"bee",
"bighorn sheep",
"bird",
"bison",
"black bear",
"boa constrictor",
"boar",
"bobcat",
"brown bear",
"buck",
"budgerigar",
"buffalo",
"bull",
"bunny",
"burro",
"butterfly",
"calf",
"camel",
"canary",
"caribou",
"cat",
"caterpillar",
"catfish",
"chameleon",
"chamois",
"cheetah",
"chicadee",
"chick",
"chicken",
"chimpanzee",
"chinchilla",
"chipmunk",
"civet",
"coati",
"cobra",
"cockatoo",
"cockroach",
"colt",
"cony",
"cormorant",
"cougar",
"cow",
"coyote",
"crab",
"crane",
"crocodile",
"crow",
"cub",
"deer",
"dingo",
"dodo",
"doe",
"dog",
"dogfish",
"dolphin",
"donkey",
"dormouse",
"dove",
"dragonfly",
"drake",
"dromedary",
"duck",
"duckbill",
"dugong",
"eagle",
"echidna",
"eel",
"egret",
"eland",
"elephant",
"elephant seal",
"elk",
"emu",
"ermine",
"ewe",
"falcon",
"fawn",
"ferret",
"filly",
"finch",
"fire ant",
"fish",
"flamingo",
"fly",
"foal",
"fox",
"frog",
"gander",
"gazelle",
"gecko",
"gemsbok",
"gerbil",
"gila monster",
"gilla monster",
"giraffe",
"gnu",
"goat",
"goose",
"gopher",
"gorilla",
"grizzly bear",
"ground hog",
"guanaco",
"guinea pig",
"gull",
"hamster",
"hare",
"hartebeest",
"hawk",
"hedgehog",
"hen",
"heron",
"hippopotamus",
"hog",
"hornet",
"horse",
"human",
"hummingbird",
"hyena",
"ibex",
"iguana",
"impala",
"jackal",
"jaguar",
"jellyfish",
"jerboa",
"joey",
"kangaroo",
"kid",
"killer whale",
"kingfisher",
"kinkajou",
"kitten",
"koala",
"komodo dragon",
"lamb",
"lark",
"lemming",
"lemur",
"leopard",
"lion",
"lizard",
"llama",
"lobster",
"locust",
"louse",
"lovebird",
"lynx",
"macaw",
"magpie",
"mallard",
"manatee",
"mandrill",
"manta ray",
"mare",
"marmoset",
"marmot",
"marten",
"meerkat",
"mink",
"mole",
"mongoose",
"monkey",
"moose",
"mosquito",
"mountain goat",
"mountain lion",
"mouse",
"mule",
"mule",
"musk deer",
"musk-ox",
"muskrat",
"mustang",
"mynah bird",
"narwhal",
"newt",
"newt",
"nightingale",
"ocelot",
"octopus",
"okapi",
"opossum",
"orangutan",
"orca",
"oryx",
"osprey",
"ostrich",
"otter",
"owl",
"ox",
"oyster",
"panda",
"panther",
"parakeet",
"parrot",
"partridge",
"peacock",
"peccary",
"pelican",
"penguin",
"pig",
"pigeon",
"piglet",
"platypus",
"polar bear",
"polecat",
"pony",
"porcupine",
"porpoise",
"prairie dog",
"pronghorn",
"pufferfish",
"puffin",
"puma",
"puppy",
"python",
"quail",
"rabbit",
"raccoon",
"ram",
"rat",
"rattlesnake",
"raven",
"reindeer",
"reptile",
"rhinoceros",
"roebuck",
"rooster",
"salamander",
"salmon",
"seahorse",
"seal",
"sea lion",
"seastar",
"shark",
"sheep",
"shrew",
"silver fox",
"skink",
"skunk",
"sloth",
"snail",
"snake",
"sparrow",
"spider",
"spider monkey",
"springbok",
"squid",
"squirrel",
"stag",
"stallion",
"starfish",
"steer",
"sting ray",
"stinkbug",
"stork",
"swallow",
"swan",
"tadpole",
"tapir",
"tern",
"tiger",
"toad",
"tortoise",
"turkey",
"turtle",
"vicuna",
"vulture",
"wallaby",
"wallaroo",
"walrus",
"warthog",
"wasp",
"waterbuck",
"water buffalo",
"weasel",
"whale",
"wildcat",
"wildebeest",
"wolf",
"wolverine",
"wombat",
"woodchuck",
"woodpecker",
"worm",
"yak",
"zebra"
]


/*
 * Script for generating the grid of Zwaar Contrast.nl
 * and making it interactive
 *
 * Version: 1.0.1
 *
 * Author: Roy Bakker and Danny Hoek
 *
 * Contact: roy@zwaarcontrast.nl or danny@zwaarcontrast.nl
 *
 */

 ;(function($, window, document, undefined) {

  //Constructor
  var Flickr = function(elem, options) {
  	this.element = $(elem);
  	this.$element = $(elem);
  	this.options = options;
  };

  //Prototype
  Flickr.prototype = {

    //Defaults
    defaults: {
    	apiKey: 'c119c6e3d7e8544a75bf4b17fcae3fec',
    	apiSecret: '5f3b4afa2727f16e',
    },

    //Initialisation
    init: function() {
      //Set the configuration of the object merging the defaults and options
      this.config = $.extend({}, this.defaults, this.options, this.metadata);
      this.score = 0;
      this.getRandomCapital();
     
    

      return this;
  },
  getRandomCapital:function(){
  	var _self = this;
  	this.startEncourageTimer();
  	 var data =dictionary;
  		_self.city = data[Math.floor(Math.random()*data.length)];
  		_self.performRequest(_self.city);

  },
  getRandomCapitalOtherThanCurrent:function(callback){
  	var _self = this;
  	var cities = [], city;
 var data =dictionary;
  	
  		while(cities.length<4){
  			city = data[Math.floor(Math.random()*data.length)];
  			if(city!==_self.city && cities.indexOf(city)===-1){
  				cities.push(city);
  			}
  		}
  		callback(cities);
  	

  },
  performRequest:function(city){
  	var _self = this;
  	var serverUrl="https://api.flickr.com/services/rest/?method=flickr.photos.search";

  	var data = {
  		nojsoncallback:1,
  		format:'json',
  		api_key:this.config.apiKey,
  		text:city,
  		sort:'relevance',
  		extras:'url_l'
  	}

  	$.getJSON(serverUrl, data, function(data){
  		console.log('Wim is in ' + _self.city);
  		_self.parseData(data);
  	});
  },
  parseData:function(data){
  	var photo = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length-1)];
  	console.log(photo);
  	if(photo.url_l){
  		$('#photo').attr('src',photo.url_l);
  	}else{
  		$('#photo').attr('src',"https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg");
  	}

  	this.createMultipleChoice();
  },
  createMultipleChoice:function(){
  	var _self = this,choices,elem;
  	var holder = $('#choices');
  	this.getRandomCapitalOtherThanCurrent(function(others){
  		others.push(_self.city);
  		choices = others
  		choices = _self.shuffle(choices);
  		holder.empty();
  		for (var i = choices.length - 1; i >= 0; i--) {
  			elem = $('<a></a>');
  			elem.attr('href','#city');
  			elem.attr('data-city',choices[i]);
  			elem.html(choices[i]);
  			elem.on('click',function(ev){
  				ev.preventDefault();
  				_self.handleClick($(this).attr('data-city'),$(this));
  				return false;
  			});
  			holder.append(elem);
  		};
  	});

  },
  handleClick:function(city,elem){
  	var win = false,_self = this;
  	clearTimeout(this.encourageTimer);
  	clearTimeout(this.timer);
  	if(city==this.city){
  		win = true;
  		elem.addClass('true');
  		this.score+=5;
  		$('#shoutout .bubble').addClass('positive').removeClass('negative').html(this.getRandomShout('positive'));
  	}else{
  		elem.addClass('error');
  		this.score-=2;
  		this.startEncourageTimer();
  		$('#shoutout .bubble').addClass('negative').removeClass('positive').html(this.getRandomShout('negative'));
  	}
  	$('#shoutout').show();
  	$('#top').addClass('animate');
  	$('#score').html(this.score);

  	this.timer=setTimeout(function() {
  		$('#shoutout').hide();
  		$('#top').removeClass('animate');
  		if(win){
  			_self.getRandomCapital();
  		}
  	}, 1500);

  },
  getRandomShout: function(mood){
  	this.positiveShouts = ['Goedzo!','Jij bent slim!','Mega goed','Toppertje!','Bijna net zo slim als Wim!'];
  	this.negativeShouts = ['Dombo!','Sjonge jonge...','Kneus!','Kom je uit een ei ofzo','Sukkel!','Ben je dom ofzo?','Je bent niet zo goed bezig!','Ik ben veel slimmer dan jij!'];
  	this.encouragingShouts = ['Loopt je hardeschijf vast ofzo...','Duurt saai!','Schiet eens op!','Ben je zo sloom geboren?','Duurt!'];
  	if(mood=="positive"){
  		return this.positiveShouts[Math.floor(Math.random()*this.positiveShouts.length)];
  	}else if(mood=="encourage"){
  		return this.encouragingShouts[Math.floor(Math.random()*this.encouragingShouts.length)];
  	}else if(mood=="negative"){
  		return this.negativeShouts[Math.floor(Math.random()*this.negativeShouts.length)];
  	}
  },
  startEncourageTimer:function(){
  	var _self=this;
  	this.encourageTimer = setTimeout(function(){
  		$('#top').addClass('animate');
  		$('#shoutout .bubble').addClass('positive').removeClass('negative').html(_self.getRandomShout('encourage'));
  		$('#shoutout').show();
  		this.encourageTimer = setTimeout(function(){
	  		$('#top').removeClass('animate');
	  	
	  		$('#shoutout').hide();
	  	}, 1000);
  	}, 7500);
  },
  shuffle:function(array){
  	var currentIndex = array.length, temporaryValue, randomIndex ;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		}

		return array;
	}
};

  //Extend Jquery with the Mosaic function/object
  $.fn.Flickr = function(options) {
  	return this.each(function() {
      //Construct new Mosaic object and call initialisation function
      new Flickr(this, options).init();
  });
  };
})(jQuery, window, document);

//Usage
$(function() {
	var myFlickr = $('#body').Flickr();
});