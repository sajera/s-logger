
var log = require('./index.js');

log.DEBUG = false;

log('log', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('info', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('warn', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('group', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('custom', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log.DEBUG = true;

log( 'log',
	'log.DEBUG = true',
	'any', 'count',
	1,2,3,4,
	{ and: 'any type', of: ['data'] }
);

log('info',
	'log.DEBUG = true',
	'any', 'count',
	1,2,3,4,
	{ and: 'any type', of: ['data'] }
);

log('warn',
	'log.DEBUG = true',
	'any', 'count',
	1,2,3,4,
	{ and: 'any type', of: ['data'] }
);

log('group',
	'log.DEBUG = true',
	'any', 'count',
	1,2,3,4,
	{ and: 'any type', of: ['data'] }
);

log('custom',
	'log.DEBUG', log.DEBUG,
	'simple action', 'BEST'.toLowerCase(),
	'Object', { and: 'any type', of: ['data'], 1: 1 },
	'Array', [1,2,3,'some other']
);

log.DEBUG = false;

log('log', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('info', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('warn', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('group', 'log.DEBUG = false', 1,2,3,4,5,6,7 );

log('custom', 'log.DEBUG = false', 1,2,3,4,5,6,7 );