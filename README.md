# typeout.js: An animated typing effect.

Reveals text through an typing animation.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-typeout">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/typeout.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/typeout.js"></script>
```

## How to start the script

```javascript
var typeOut = new TypeIn({
	'element': document.querySelector('.type-out'),
	'delay': 50,
	'waitUntilVisible': true
});
```

**'element' : {DOM node}** - The element to watch and/or affect.

**'delay' : {integer}** - Controls typing speed.

**'waitUntilVisible' : {boolean}** - Waits until the element is scrolled into view.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
