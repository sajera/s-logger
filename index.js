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
			case 'custom':
				var i = 1;
				console.log('S\n')
				do {
					console.log( arguments[ i ], arguments[ ++i ], '\n' );
					++i;
				} while ( i < arguments.length );
			break;
			case 'group': if( console.group ) {
				console.group('S GROUP')
				for ( var item of Array.prototype.slice.call( arguments, 1 ) ) console.log( item );
				console.groupEnd('S GROUP');
				break;
			};
			case 'warn': if( console.warn ) {
				console.warn.apply( console, ['S WARN:\n    '].concat( Array.prototype.slice.call( arguments, 1 ) ) );
				break;
			};
			case 'info': if( console.info ) {
				console.info.apply( console, ['S INFO:\n    '].concat( Array.prototype.slice.call( arguments, 1 ) ) );
				break;
			};
			/*-------------------------------------------------
				if your Node.js does not support any method console
				try conventional log					
			---------------------------------------------------*/
			default: console.log.apply( console, ['S LOG:\n    '].concat( Array.prototype.slice.call( arguments, 1 ) ) );
		}
	}
}

log.DEBUG = false;

/**
 * S log
 * @public
 */
module.exports = log;
