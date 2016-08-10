'use strict'
/*-------------------------------------------------
		OPTIONS of logger
---------------------------------------------------*/
log.DEBUG = false;
log.LOG = {
	text: 'S-LOG:',
	color: 'grey',
	bg: '',
};
log.INFO = {
	text: 'S-INFO:',
	color: 'white',
	bg: 'green',
};
log.WARN = {
	text: 'S-WARN:',
	color: 'blue',
	bg: 'yellow',
};
log.ERROR = {
	text: 'S-ERROR:',
	color: 'black',
	bg: 'red',
};
log.CUSTOM = {
	text: 'S-LOG-PAIRS:',
	color: 'white',
	bg: '',
};

/*-------------------------------------------------
	VARIABLES coloring of logger
---------------------------------------------------*/
function prefix ( num ) {
	return '\x1B['+( Number( num ) === num ? num : 0 )+'m';
};

var colors = { 'black': 30, 'red': 31, 'green': 32, 'yellow': 33, 'blue': 34, 'magenta': 35, 'cyan': 36, 'white': 37, 'grey': 90 };
function cmdColor ( name ) {
	var color = colors[ name ];
	return {
		open: color ? prefix( color ) : '',
		close: color ? prefix( 39 ) : '',
	};
}

var backgrounds = { 'black': 40, 'red': 41, 'green': 42, 'yellow': 43, 'blue': 44, 'magenta': 45, 'cyan': 46, 'white': 47 };
function cmdBG ( name ) {
	var color = backgrounds[ name ];
	return {
		open: color ? prefix( color ) : '',
		close: color ? prefix( 49 ) : '',
	};
}
// make a shortcut for each message, in addition to the default
function label ( text, color, bg ) {
	if ( typeof window == 'undefined' ) {
		var tagBG = cmdBG( bg );
		var tagColor = cmdColor( color );
		console.log( tagColor.open+tagBG.open+text+tagBG.close+tagColor.close+'\x1B[0m\x1B[0m');
	} else {
		console.log( '%c'+text, 'color:'+String( color|| 'inherit' )+( bg ? ';background:'+ String( bg || 'transparent' ) : '' ) );
	}
}

/**
* S LOG method
*
* @param: { String } - type of log
* @param: { ANY } - console parameters
* (unlimited number can be added)
*/
function log ( type ) {
	if ( log.DEBUG ) {
		switch ( type ) {
			// information output pairs
			case 'custom': if( console.log ) {
				label( log.CUSTOM.text, log.CUSTOM.color, log.CUSTOM.bg );
				var i = 1;
				do { console.log( arguments[ i ], arguments[ ++i ], '\n' );
					++i;
				} while ( i < arguments.length );
				break;
			};
			case 'error': if( console.error ) {
				label( log.ERROR.text, log.ERROR.color, log.ERROR.bg );
				console.error.apply( console, Array.prototype.slice.call( arguments, 1 ) );
				break;
			};
			case 'warn': if( console.warn ) {
				label( log.WARN.text, log.WARN.color, log.WARN.bg );
				console.warn.apply( console, Array.prototype.slice.call( arguments, 1 ) );
				break;
			};
			case 'info': if( console.info ) {
				label( log.INFO.text, log.INFO.color, log.INFO.bg );
				console.info.apply( console, Array.prototype.slice.call( arguments, 1 ) );
				break;
			};
			case 'log': if( console.log ) {
				label( log.LOG.text, log.LOG.color, log.LOG.bg );
				console.log.apply( console, Array.prototype.slice.call( arguments, 1 ) );
				break;
			};
			/*-------------------------------------------------
				if your Node.js does not support any method console
				try conventional log
			---------------------------------------------------*/
			default: console.log.apply( console, Array.prototype.slice.call( arguments ) );
		}
	}
}

/**
 * S-logger
 *
 * @public
 */
module.exports = log;
