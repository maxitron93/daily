import { elements } from '../elements'

const renderTimeDivs = (times) => {
    // Get the number of divs
    let numDivs = times.end - times.start
    
    for (let i = 0; i <= numDivs; i++) {
        // Define the html
        let html = `
        <div class="time-div">
            <p class="hour-marker"><span class="hour-number">${times.start + i}</span>.00</p>
        </div>
        `
        
        // Insert the html
        elements.timesContainer.insertAdjacentHTML('beforeend', html)
        // console.log()
    }
}

export { renderTimeDivs }
