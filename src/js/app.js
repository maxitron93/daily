import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import interact from 'interactjs';
import { Sortable } from '@shopify/draggable';
// To enable the swap animation
import { Plugins } from '@shopify/draggable';

import { importImages } from './importImages'
import { elements } from './elements'
import { changeHeadingColor } from './Controller/headingController'

// Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
importImages()

// Add state here
const state = {
    items: [
		{type: 'task', xStart: 0, width: 50, color: 1},
		{type: 'task', xStart: 50, width: 100, color: 2},
		{type: 'task', xStart: 150, width: 50, color: 3},
		{type: 'deadline', xStart: 200, color: 5},
		{type: 'task', xStart: 200, width: 120, color: 4}
	]
}

// Add event listeners here








const sortable = new Sortable(elements.itemsContainer, {
	draggable: '.item',
	
	// Start of additional code to enable animation on sortable:sorted
	swapAnimation: {
		duration: 200,
		easingFunction: 'ease-in-out',
	},
	plugins: [Plugins.SwapAnimation]
	// End of additional code to enable animation on sortable:sorted
});

sortable.on('sortable:sort', (event) => {
	// Hides the div that is selected upon selection
	event.data.dragEvent.data.source.style.opacity = "0"
});

sortable.on('sortable:stop', () => {
	console.log('Add code here to adjust state')
});

// Start of code to cancel the drag event when a child element is selected
sortable.on('drag:start', (event) => {
	const currentTarget = event.originalEvent.target;
	
	if (isPrevented(currentTarget, ['btn-remove', 'color-picker', 'description','task', 'deadline'])) {
		event.cancel();
  }
});

const isPrevented = (element, classesToPrevent) => {
	let currentElem = element;
	let isParent = false;
	
	while (currentElem) {
		const hasClass = Array.from(currentElem.classList).some((cls) => classesToPrevent.includes(cls));
		if (hasClass) {
		isParent = true;
		currentElem = undefined;
		} else {
		currentElem = currentElem.parentElement;
		}
	}
	return isParent;
}
// End of code to cancel the drag event when a child element is selected





const updateState = (target) => {
	console.log('Add code here to update state')
	console.log(`x-start: ${target.getAttribute('data-x')}`)
	console.log(`width: ${target.offsetWidth}`)
}




function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

interact('.task')
	.draggable({
		onmove: window.dragMoveListener,
		modifiers: [
		interact.modifiers.restrictRect({
			restriction: 'parent'
		})
		],
		onend: function (event) {
			updateState(event.target)
		}
	})
	.resizable({
		// enable snapping
		snap: {
			targets: [
				interact.createSnapGrid({ x: 2, y: 2 })
			],
			range: Infinity,
			relativePoints: [ { x: 0, y: 0 } ]
		},
		// resize from all edges and corners
		edges: { 
			left: true, 
			right: true, 
			bottom: false, 
			top: false 
		},

		// keep the edges inside the parent
		restrictEdges: {
			outer: 'parent',
			// endOnly: true,
		},

		// minimum size
		restrictSize: {
			min: { 
				width: 20
			},
		},
		inertia: false, 
		onend: function (event) {
			updateState(event.target)
		}
  })
  .on('resizemove', function (event) {
    var target = event.target
    var x = (parseFloat(target.getAttribute('data-x')) || 0)
    var y = (parseFloat(target.getAttribute('data-y')) || 0)

    // update the element's style
    target.style.width = event.rect.width + 'px'
    target.style.height = event.rect.height + 'px'

    // translate when resizing from top or left edges
    x += event.deltaRect.left
    y += event.deltaRect.top

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)'

    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
  })

interact('.deadline')
  .draggable({
    onmove: window.dragMoveListener,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent'
      })
	],
	onend: function (event) {
		console.log('Add code here to update state')
		console.log(`x-start: ${event.target.getAttribute('data-x')}`)
	}
  })
