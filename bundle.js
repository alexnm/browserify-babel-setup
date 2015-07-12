(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Block-level variables

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var x = 2;
function blockLevelVariable() {
	if (x == 2) {
		var _y = 4;
	}

	console.log(y);
}

// Arrow functions

[1, 2, 3, 4].map(function (n) {
	return n + 1;
}).reduce(function (a, b) {
	return a + b;
});

[1, 2, 3, 4].filter(function (n) {
	return n % 2 == 0;
});

var closure = (function () {
	var _this = this;

	var member = 3;

	[1, 2, 3].map(function (n) {
		_this.member = n;
	});
})();

// Parameters

function f(x) {
	var y = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

	return x * y;
}

function f() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	return numbers.reduce(function (a, b) {
		return a + b;
	});
}

function f(x, y, z) {
	return x + y + z;
}

f.apply(undefined, [1, 2, 3]);

// String templates

'In JavaScript this is\n not legal.';

var action = 'concatenate';
'You no longer need to ' + action + ' strings';

// Destructuring

var _a$b = { a: 1, b: 2 };
var a = _a$b.a;
var b = _a$b.b;
var _ref = [1, 2, 3];
var a = _ref[0];
var b = _ref[2];

function f(x, _ref2) {
	var y = _ref2.y;
	var z = _ref2.z;

	return x + y + z;
}

f(2, { y: 5, z: 1 });

function division(x, y) {
	return {
		r: x / y,
		q: x % y
	};
}

var _division = division(5, 2);

var r = _division.r;
var q = _division.q;

var _keyValue$split = 'key-value'.split('-');

var _keyValue$split2 = _slicedToArray(_keyValue$split, 2);

var key = _keyValue$split2[0];
var value = _keyValue$split2[1];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbGV4bm0vV29yay9zYW5kYm94L2Jyb3dzZXJpZnktYmFiZWwtc2V0dXAvc2NyaXB0cy9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDRUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsU0FBUyxrQkFBa0IsR0FBSTtBQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUc7QUFDYixNQUFJLEVBQUMsR0FBRyxDQUFDLENBQUM7RUFDVjs7QUFFRCxRQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDO0NBQ2pCOzs7O0FBSUQsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsVUFBQSxDQUFDO1FBQUksQ0FBQyxHQUFHLENBQUM7Q0FBQSxDQUFFLENBQUMsTUFBTSxDQUFFLFVBQUUsQ0FBQyxFQUFFLENBQUM7UUFBTSxDQUFDLEdBQUcsQ0FBQztDQUFBLENBQUUsQ0FBQzs7QUFFeEQsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsVUFBQSxDQUFDO1FBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0NBQUEsQ0FBRSxDQUFDOztBQUVwQyxJQUFJLE9BQU8sR0FBRyxDQUFBLFlBQVk7OztBQUN6QixLQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7O0FBRWYsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxVQUFBLENBQUMsRUFBSTtBQUFFLFFBQUssTUFBTSxHQUFHLENBQUMsQ0FBQTtFQUFFLENBQUUsQ0FBQztDQUN4QyxDQUFBLEVBQUcsQ0FBQzs7OztBQUlMLFNBQVMsQ0FBQyxDQUFFLENBQUMsRUFBVTtLQUFSLENBQUMseURBQUcsQ0FBQzs7QUFDbkIsUUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxDQUFDLEdBQWU7bUNBQVYsT0FBTztBQUFQLFNBQU87OztBQUNyQixRQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUUsVUFBRSxDQUFDLEVBQUUsQ0FBQztTQUFNLENBQUMsR0FBRyxDQUFDO0VBQUEsQ0FBRSxDQUFDO0NBQzNDOztBQUVELFNBQVMsQ0FBQyxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHO0FBQ3JCLFFBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDakI7O0FBRUQsQ0FBQyxrQkFBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQzs7OztBQUloQixxQ0FDWTs7QUFFWixJQUFJLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFDM0IsMkJBQTBCLE1BQU0sY0FBWTs7OztXQUk3QixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUF2QixDQUFDLFFBQUQsQ0FBQztJQUFFLENBQUMsUUFBRCxDQUFDO1dBQ08sQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRTtJQUF0QixDQUFDO0lBQUksQ0FBQzs7QUFFWixTQUFTLENBQUMsQ0FBRSxDQUFDLEVBQUUsS0FBUSxFQUFHO0tBQVQsQ0FBQyxHQUFILEtBQVEsQ0FBTixDQUFDO0tBQUUsQ0FBQyxHQUFOLEtBQVEsQ0FBSCxDQUFDOztBQUNwQixRQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2pCOztBQUVELENBQUMsQ0FBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDOztBQUV2QixTQUFTLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHO0FBQ3pCLFFBQU87QUFDTixHQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDUixHQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDUixDQUFBO0NBQ0Q7O2dCQUVjLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFOztJQUF6QixDQUFDLGFBQUQsQ0FBQztJQUFFLENBQUMsYUFBRCxDQUFDOztzQkFFUyxXQUFXLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBRTs7OztJQUF0QyxHQUFHO0lBQUUsS0FBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBCbG9jay1sZXZlbCB2YXJpYWJsZXNcblxubGV0IHggPSAyO1xuZnVuY3Rpb24gYmxvY2tMZXZlbFZhcmlhYmxlKCApIHtcblx0aWYgKCB4ID09IDIgKSB7XG5cdFx0bGV0IHkgPSA0O1xuXHR9XG5cblx0Y29uc29sZS5sb2coIHkgKTtcbn1cblxuLy8gQXJyb3cgZnVuY3Rpb25zXG5cblsxLDIsMyw0XS5tYXAoIG4gPT4gbiArIDEgKS5yZWR1Y2UoICggYSwgYiApID0+IGEgKyBiICk7XG5cblsxLDIsMyw0XS5maWx0ZXIoIG4gPT4gbiAlIDIgPT0gMCApO1xuXG52YXIgY2xvc3VyZSA9IGZ1bmN0aW9uKCApIHtcblx0dmFyIG1lbWJlciA9IDM7XG5cblx0WzEsMiwzXS5tYXAoIG4gPT4geyB0aGlzLm1lbWJlciA9IG4gfSApO1xufSggKTtcblxuLy8gUGFyYW1ldGVyc1xuXG5mdW5jdGlvbiBmKCB4LCB5ID0gMiApIHtcblx0cmV0dXJuIHggKiB5O1xufVxuXG5mdW5jdGlvbiBmKCAuLi5udW1iZXJzICkge1xuXHRyZXR1cm4gbnVtYmVycy5yZWR1Y2UoICggYSwgYiApID0+IGEgKyBiICk7XG59XG5cbmZ1bmN0aW9uIGYoIHgsIHksIHogKSB7XG5cdHJldHVybiB4ICsgeSArIHo7XG59XG5cbmYoIC4uLlsxLDIsM10gKTtcblxuLy8gU3RyaW5nIHRlbXBsYXRlc1xuXG5gSW4gSmF2YVNjcmlwdCB0aGlzIGlzXG4gbm90IGxlZ2FsLmBcblxubGV0IGFjdGlvbiA9ICdjb25jYXRlbmF0ZSc7XG5gWW91IG5vIGxvbmdlciBuZWVkIHRvICR7IGFjdGlvbiB9IHN0cmluZ3NgO1xuXG4vLyBEZXN0cnVjdHVyaW5nXG5cbnZhciB7IGEsIGIgfSA9IHsgYTogMSwgYjogMiB9O1xudmFyIFsgYSwgLCBiIF0gPSBbIDEsIDIsIDMgXTtcblxuZnVuY3Rpb24gZiggeCwgeyB5LCB6IH0gKSB7XG5cdHJldHVybiB4ICsgeSArIHo7XG59XG5cbmYoIDIsIHsgeTogNSwgejogMSB9ICk7XG5cbmZ1bmN0aW9uIGRpdmlzaW9uKCB4LCB5ICkge1xuXHRyZXR1cm4ge1xuXHRcdHI6IHggLyB5LFxuXHRcdHE6IHggJSB5XG5cdH1cbn1cblxubGV0IHsgciwgcSB9ID0gZGl2aXNpb24oIDUsIDIgKTtcblxubGV0IFtrZXksIHZhbHVlXSA9ICdrZXktdmFsdWUnLnNwbGl0KCAnLScgKTsiXX0=
