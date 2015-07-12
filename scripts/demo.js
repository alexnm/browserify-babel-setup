// Block-level variables

let x = 2;
function blockLevelVariable( ) {
	if ( x == 2 ) {
		let y = 4;
	}

	console.log( y );
}

// Arrow functions

[1,2,3,4].map( n => n + 1 ).reduce( ( a, b ) => a + b );

[1,2,3,4].filter( n => n % 2 == 0 );

var closure = function( ) {
	var member = 3;

	[1,2,3].map( n => { this.member = n } );
}( );

// Parameters

function f( x, y = 2 ) {
	return x * y;
}

function f( ...numbers ) {
	return numbers.reduce( ( a, b ) => a + b );
}

function f( x, y, z ) {
	return x + y + z;
}

f( ...[1,2,3] );

// String templates

`In JavaScript this is
 not legal.`

let action = 'concatenate';
`You no longer need to ${ action } strings`;

// Destructuring

var { a, b } = { a: 1, b: 2 };
var [ a, , b ] = [ 1, 2, 3 ];

function f( x, { y, z } ) {
	return x + y + z;
}

f( 2, { y: 5, z: 1 } );

function division( x, y ) {
	return {
		r: x / y,
		q: x % y
	}
}

let { r, q } = division( 5, 2 );

let [key, value] = 'key-value'.split( '-' );