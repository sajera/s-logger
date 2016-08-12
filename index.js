'use strict'

var delegate = require('./lib/delegate.js');
var Logger = require('./lib/Logger.js');
var MAP = {};

function get ( id ) { return MAP[ String( id ) ]; }

function create ( id, options ) {
	var loger = new Logger( options );
	MAP[ id = String( id ) ] = delegate.bind( loger );
	Object.defineProperty( MAP[ id ], 'DEBUG', {
		configurable: true,
		enumerable: true,
		get: function () { return loger.DEBUG; },
		set: function ( newVal ) { loger.DEBUG = !!newVal; }
	});
	return MAP[ id ];
}

/**
 * S-logger
 * @public
 */
var log = create( 'default-S-LOGGER' );
log.create = create;
log.get = get;
module.exports = log;
