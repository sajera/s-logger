
/**
* map delegation method of logger
* @privat
* @param: { String } - type of method which need execute
*/
module.exports = function delegate ( type ) {
	if ( this.DEBUG ) {
		switch ( String( type ).toUpperCase() ) {
			case 'CUSTOM': this.custom( Array.prototype.slice.call( arguments, 1 ) );
			break;case 'ERROR':
				if ( console.error ) this.error( Array.prototype.slice.call( arguments, 1 ) );
				else  this.emulateError( Array.prototype.slice.call( arguments, 1 ) );
			break;case 'WARN':
				if ( console.warn ) this.warn( Array.prototype.slice.call( arguments, 1 ) );
				else  this.emulateWarn( Array.prototype.slice.call( arguments, 1 ) );
			break;case 'INFO':
				if ( console.info ) this.info( Array.prototype.slice.call( arguments, 1 ) );
				else  this.emulateInfo( Array.prototype.slice.call( arguments, 1 ) );
			break;case 'LOG': this.log( Array.prototype.slice.call( arguments, 1 ) );
			break;default: console.log.apply( console, Array.prototype.slice.call( arguments ) );
		}
	}
};