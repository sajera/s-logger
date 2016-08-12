
var paintText = require('./paintText.js');
/*-------------------------------------------------
		OPTIONS of logger
---------------------------------------------------*/
function Logger ( options ) {
	options = options || {};
	// by default logger is off
	this.DEBUG = options.DEBUG || false;

	if ( options.CUSTOM && options.CUSTOM.log && typeof options.CUSTOM.log == 'function' ) {
		this.custom = function ( args ) {
			console.log.apply( console, paintText( this.CUSTOM.text, this.CUSTOM.color, this.CUSTOM.bg ) );
			options.CUSTOM.log( args );
		};
	}

	this.CUSTOM = {
		text: ( options.CUSTOM && typeof options.CUSTOM.text == 'string' && options.CUSTOM.text ) || 'S-LOG-PAIRS:',
		color: ( options.CUSTOM && paintText.isSupportedColor( options.CUSTOM.color ) && options.CUSTOM.color ) || 'white',
		bg: ( options.CUSTOM && paintText.isSupportedBg( options.CUSTOM.background ) && options.CUSTOM.background ) || '',
	};

	this.ERROR = {
		text: ( options.ERROR && typeof options.ERROR.text == 'string' && options.ERROR.text ) || 'S-ERROR:',
		color: ( options.ERROR && paintText.isSupportedColor( options.ERROR.color ) && options.ERROR.color  ) || 'black',
		bg: ( options.ERROR && paintText.isSupportedBg( options.ERROR.background ) && options.ERROR.background ) || 'red',
	};

	this.WARN = {
		text: ( options.WARN && typeof options.WARN.text == 'string' && options.WARN.text ) || 'S-WARN:',
		color: ( options.WARN && paintText.isSupportedColor( options.WARN.color ) && options.WARN.color ) || 'blue',
		bg: ( options.WARN && paintText.isSupportedBg( options.WARN.background ) && options.WARN.background ) || 'yellow',
	};

	this.INFO = {
		text: ( options.INFO && typeof options.INFO.text == 'string' && options.INFO.text ) || 'S-INFO:',
		color: ( options.INFO && paintText.isSupportedColor( options.INFO.color ) && options.INFO.color ) || 'white',
		bg: ( options.INFO && paintText.isSupportedBg( options.INFO.background ) && options.INFO.background ) || 'green',
	};

	this.LOG = {
		text: ( options.LOG && typeof options.LOG.text == 'string' && options.LOG.text ) || 'S-LOG:',
		color: ( options.LOG && paintText.isSupportedColor( options.LOG.color ) && options.LOG.color ) || 'grey',
		bg: ( options.LOG && paintText.isSupportedBg( options.LOG.background ) && options.LOG.background ) || '',
	};

};

Logger.prototype = {
	constructor: Logger,
	error: function ( args ) {
		console.error.apply( console, paintText( this.ERROR.text, this.ERROR.color, this.ERROR.bg ) );
		console.error.apply( console, args );
	},
	warn: function ( args ) {
		console.warn.apply( console, paintText( this.WARN.text, this.WARN.color, this.WARN.bg ) );
		console.warn.apply( console, args );
	},
	info: function ( args ) {
		console.info.apply( console, paintText( this.INFO.text, this.INFO.color, this.INFO.bg ) );
		console.info.apply( console, args );
	},
	log: function ( args ) {
		console.log.apply( console, paintText( this.LOG.text, this.LOG.color, this.LOG.bg ) );
		console.log.apply( console, args );
	},
	emulateError: function ( args ) {
		console.log.apply( console, paintText( this.ERROR.text, this.ERROR.color, this.ERROR.bg ) );
		console.log.apply( console, args );
	},
	emulateWarn: function ( args ) {
		console.log.apply( console, paintText( this.WARN.text, this.WARN.color, this.WARN.bg ) );
		console.log.apply( console, args );
	},
	emulateInfo: function ( args ) {
		console.log.apply( console, paintText( this.INFO.text, this.INFO.color, this.INFO.bg ) );
		console.log.apply( console, args );
	},
	custom: function ( args ) {
		var res = [];
		for ( ; args.length; ) {
			res.push( args.splice(0,1)[0] );
			res.push( args.splice(0,1)[0] );
			res.push( '\n' );
		}
		console.log.apply( console, paintText( this.CUSTOM.text, this.CUSTOM.color, this.CUSTOM.bg ) );
		console.log.apply( console, res );
	}
};

/**
* class Logger
* @privat
* @param: { Object } - options
*/
module.exports = Logger;
