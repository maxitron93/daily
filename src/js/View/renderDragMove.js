const renderDragMove = (event) => {
	let target = event.target
  	// keep the dragged position in the data-x/data-y attributes
  	let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  	let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  	// Translate the element
	target.style.webkitTransform =
		target.style.transform =
		'translate(' + x + 'px, ' + y + 'px)'

	// Update the posiion attributes
	target.setAttribute('data-x', x)
	target.setAttribute('data-y', y)
}

export { renderDragMove }
