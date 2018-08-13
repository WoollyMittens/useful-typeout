// extend the class
TypeOut.prototype.Main = function(config, context) {

	// PROPERTIES

	this.context = context;
	this.config = config;
	this.config.complete = false;

	// METHODS

	this.init = function() {
		// get all the text nodes from the tree walker
		var container, value, chars, nodes = this.getTextNodes(config.element);
		// for all text nodes
		for (var a = 0, b = nodes.length; a < b; a += 1) {
			// get the text content
			chars = nodes[a].nodeValue.split('');
			// create a container
			container = document.createElement('span');
			// fill it with the processed string
			container.innerHTML = '<span class="hide">' + chars.join('</span><span class="hide">') + '</span>';
			// replace the text node with the container
			nodes[a].parentNode.replaceChild(container, nodes[a]);
		}
		// if were to wait until the element is on screen
		if (config.waitUntilVisible) {
			// watch the scroll event
			window.addEventListener('scroll', this.scrolled.bind(this));
			this.scrolled();
		} else{
			// trigger the animation immediately
			window.requestAnimationFrame(this.animate.bind(this));
		}
	};
	this.getTextNodes = function(element) {
		var nodeList = [];
		var treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
		while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
		return nodeList;
	};
	this.scrolled = function() {
		if (!this.config.complete) {
			console.log('scroll');
			var rect = config.element.getBoundingClientRect();
			var height = (window.innerHeight || document.documentElement.clientHeight);
			var offset = config.element.offsetHeight;
			var visible = (rect.top <= height && rect.bottom >= 0);
			// if the element is on screen, trigger the animation
			if (rect.top <= height - offset && offset > 0) {
				window.requestAnimationFrame(this.animate.bind(this));
				this.config.complete = true;
			}
		}
	};
	this.animate = function() {
		// reveal every span in turn
		var spans = this.config.element.querySelectorAll('.hide');
		this.reveal(spans, 0);
	};
	this.reveal = function(spans, index) {
		// if there are spans left
		if (index < spans.length) {
			// reveal a span
			spans[index].className = 'show';
			// order the next reveal
			setTimeout(this.reveal.bind(this, spans, index + 1), this.config.delay);
		}
	};

	// EVENTS

	this.init();

};
