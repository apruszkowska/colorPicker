import colors from './colors.json' assert {type: 'json'}

const colorCardTemplate = document.querySelector("[data-color-template]")
const colorCardContainer = document.querySelector("[data-color-card-container]")
const searchInput = document.querySelector("[data-search]")


let color = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    color.forEach(color => {
        const isVisible = color.name.toLowerCase().includes(value)
        color.element.classList.toggle("hide", !isVisible)
    })
    
})

color = colors.map(color  => {
    const card = colorCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent = color.name
    body.textContent = color.hex
    const aColor = color.hex
    card.style.background = aColor;
    colorCardContainer.append(card)
    return { name: color.name, hex: color.hex, element: card }
})