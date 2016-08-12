s-logger
===============
### A simple log with DEBUG state and light customization

```shell
npm i s-logger --save
```

Basic usage:
---------------
```javascript
var log = require('s-logger');

log.DEBUG = true; // default false, but inherit previos changes

log( 'log', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
```

**Note:** DEBUG you can change any time. But it was conceived as a response to the setting when initializing the application in the states DEBUG = true/false. This means that after the change log flag ceases to work in all parts of the application.

**Note:** since version 1.1.2 adds the ability to change the color scheme of shortcut.
 >**Colors:** black, red, green, yellow, blue, magenta, cyan, white, grey.
 <br/>
 >**Backgrounds:**  black, red, green, yellow, blue, magenta, cyan, white.

Customization:
---------------
```javascript
// complete detailed configuration
var config = {
	DEBUG: true,
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
};

var log = require('s-logger');

var customLog = log.create( 'uniqueIdOfLogger-hash-care', config );

// It does not intersect with the other loggers
log.DEBUG // default false, but inherit previos changes

// Can be another file (connected later)
if ( customLog === ( require('s-logger') ).get('uniqueIdOfLogger-hash-care') ) {
	customLog( 'Completely usability victory !!!' );
} else {
	log( 'Completely fail ...' );
}
```
**Note:** Delegation to other files is due to mapping inside


Example out in chrome devtool:
---------------
```javascript
log( 'log', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-LOG:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'info', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-INFO:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'warn', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-WARN:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'error', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-ERROR:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}
```
Example out in cmd:
---------------
```javascript
log( 'log', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-LOG:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'info', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-INFO:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'warn', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-WARN:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'error', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S-ERROR:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}
```

> It would be interesting to know how you make out your logs.

As usual i make out of my log
---------------
```javascript
log('custom',
	'log.DEBUG:', log.DEBUG,
	'simple action result:', 'BEST'.toLowerCase(),
	'some Object:', { and: 'any type', of: ['data'], 1: 1 },
	'some Array:', [1,2,3,'some other']
);
/* S

	log.DEBUG: true
	
	simple action result: best
	
	some Object: Object { '1': 1, and: 'any type', of: [ 'data' ] }
	
	some Array: [ 1, 2, 3, 'some other' ]
*/
```
