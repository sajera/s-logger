
function prefix ( num ) { return '\x1B['+( Number( num ) === num ? num : 0 )+'m'; };
/*-------------------------------------------------
	VARIABLES coloring of logger
---------------------------------------------------*/
var colors = {
		'close': 39,
		'black': 30,
		'red': 31,
		'green': 32,
		'yellow': 33,
		'blue': 34,
		'magenta': 35,
		'cyan': 36,
		'white': 37,
		'grey': 90
	},
	backgrounds = {
		'close': 49,
		'black': 40,
		'red': 41,
		'green': 42,
		'yellow': 43,
		'blue': 44,
		'magenta': 45,
		'cyan': 46,
		'white': 47
	},
	clear = prefix( 0 ),
	key;
// make a colors with prefixe by system
for ( key in colors ) colors[ key ] = prefix( colors[ key ] );
for ( key in backgrounds ) backgrounds[ key ] = prefix( backgrounds[ key ] );


/**
* paint the text
* @privat
* @param: { String } - text
* @param: { String } - text color
* @param: { String } - background color
* @returns: { Array } - by apply to console
*/
function paintText ( text, color, bg ) {
	if ( typeof window !== 'undefined' ) {
		return [
			'%c'+String( text ),
			'color:'+String( color|| 'inherit' )+( bg ? ';background:'+ String( bg || 'transparent' ) : '' )
		];
	} else {
		if ( paintText.isSupportedColor( color ) ) text = colors[ color ]+text+colors['close'];
		if ( paintText.isSupportedBg( bg ) ) text = backgrounds[ bg ]+text+backgrounds['close'];
		return [ clear+text+clear ];
	}
};
// color support validation
paintText.isSupportedColor = function ( color ) { return !!colors[ color ]; };
paintText.isSupportedBg = function ( color ) { return !!backgrounds[ color ]; };

/**
* EXPORTS
*/
module.exports = paintText;