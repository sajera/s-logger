
var log = require('./../index.js');

log.DEBUG = false;

log('log', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('info', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('warn', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('error', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('custom', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log.DEBUG = true;

log('log', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

log('info', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

log('warn', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

log('error', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

log('custom', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

log({any: 'type'}, 'log.DEBUG = true', 1,2,3,4,5,6,7 );

var cl = log.create('specify-custom-loger', {
	DEBUG: false,
	CUSTOM: {
		text: 'custom-CUSTOM',
		background: 'black',
		color: 'grey',
		log: function ( arrayOfArguments ) { // only for custom
			for ( var key = 0; key < arrayOfArguments.length; key ++ ) {
				console.log( arrayOfArguments[ key ] );
			}
		}
	},
	ERROR: {
		text: 'custom-ERROR',
		background: 'red',
		color: 'white',
	},
	WARN: {
		text: 'custom-WARN',
		background: 'green',
		color: 'cyan',
	},
	INFO: {
		text: 'custom-INFO',
		background: 'yellow',
		color: 'magenta',
	},
	LOG: {
		text: 'custom-LOG',
		background: 'blue',
		color: 'red',
	}
});

cl('log', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

cl.DEBUG = true;

cl('log', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

cl('info', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

cl('warn', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

cl('error', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

cl('custom', 'log.DEBUG = true', 1,2,3,4,5,6,7 );

cl({any: 'type'}, 'log.DEBUG = true', 1,2,3,4,5,6,7 );

if ( cl === ( require('./../index.js') ).get('specify-custom-loger') ) {
	cl( 'Completely usability victory !!!' );
} else {
	log( 'Completely fail ...' );
}

cl.DEBUG = false;

cl('log', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log.DEBUG = false;

log('log', 'log.DEBUG = false', 1,2,3,4,5,6,7 );
