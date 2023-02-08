// function parse(equation) {
//     const step = getNextStep()
//     const result = solve()
//     replaceNextStep(equation, step, result)
// }

const inpuElement = document.getElementById('equation')
const outputElement = document.getElementById('results')
const form = document.getElementById('equation-form')

const MULTIPLY_DIVIDE_REGEX = 

form.addEventListener('submit', e => {
e.preventDefault()

const result = parse(inpuElement.value)
outputElement.textContent = result
})
// 2 + 3 * 4 / 7

function parse(equation) {
    return equation
}