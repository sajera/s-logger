s-logger
===============
### A simple log with DEBUG state and light customization

```shell
npm i s-logger --save
```

Usage:
---------------
```javascript
var log = require('s-logger');

log.DEBUG = true;

log( typeOflog, 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
```

**Note:** DEBUG you can change any time. But it was conceived as a response to the setting when initializing the application in the states DEBUG = true/false. This means that after the change log flag ceases to work in all parts of the application.


```javascript
var log = require('s-logger');

log.DEBUG // default false, but inherit previos changes

log( typeOflog, 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
```

**Note:** since version 1.1.2 adds the ability to change the color scheme of shortcut.
**Colors:** black, red, green, yellow, blue, magenta, cyan, white, grey.
**Backgrounds:**  black, red, green, yellow, blue, magenta, cyan, white.

Configure:
---------------
```javascript
var log = require('s-logger');

log.DEBUG // default false, but inherit previos changes

// a shortcut for each message, in addition to the default
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

```

Example out in chrome devtool:
---------------
```javascript
log( 'log', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S LOG:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'info', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S INFO:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'warn', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S WARN:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'error', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S WARN:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}
```
Example out in cmd:
---------------
```javascript
log( 'log', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S LOG:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'info', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S INFO:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'warn', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S WARN:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

log( 'error', 'log.DEBUG = true', 'any', 'count', 1,2,3,4, { and: 'any type', of: ['data'] } );
// S WARN:
//	log.DEBUG = true any count 1 2 3 4 Object {and: "any type", of: Array[1]}

// 

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