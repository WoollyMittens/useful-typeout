# typeout.js: An animated typing effect.

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Reveals text through an typing animation.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/typeout.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/typeout.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/typeout.js'
], function(TypeOut) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {TypeIn} from "js/typeout.js";
```

## How to start the script

```javascript
var typeOut = new TypeOut({
	'element': document.querySelector('.type-out'),
	'delay': 50,
	'waitUntilVisible': true
});
```

**'element' : {DOM node}** - The element to watch and/or affect.

**'delay' : {integer}** - Controls typing speed.

**'waitUntilVisible' : {boolean}** - Waits until the element is scrolled into view.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
