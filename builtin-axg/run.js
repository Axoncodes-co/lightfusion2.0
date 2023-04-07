let searchQueries = {}
// localStorage.setItem('axgRegisteredFunctionsDone', JSON.stringify([]))
// localStorage.setItem("axgRegisteredFunctions", JSON.stringify([]))
// localStorage.setItem('axgRegisteredFunctionsDone', JSON.stringify([]))

export function registerFunctions(name) {
    const SSN = 'axgRegisteredFunctions'
    if (!localStorage.getItem(SSN)) localStorage.setItem(SSN, JSON.stringify([]))
    const prevSession = JSON.parse(localStorage.getItem(SSN))
    if (prevSession.map(item => item).indexOf(name) < 0) {
        prevSession.push(name)
        localStorage.setItem(SSN, JSON.stringify(prevSession))
    }
}

export default function implementScripts() {
    !window ? console.log('runScript cancelled') : console.log('runScript activated')
    const funcs = JSON.parse(localStorage.getItem('axgRegisteredFunctions'))
    if (!localStorage.getItem("axgRegisteredFunctionsDone")) localStorage.setItem("axgRegisteredFunctionsDone", JSON.stringify([]))
    window.addEventListener('load', () => {
        // const donefuncs = JSON.parse(localStorage.getItem('axgRegisteredFunctionsDone'))
        funcs.forEach(funName => {
            // check if the function is loaded
            if (!funName || !window[funName]) return;
            // check if it's been alreadyl processed
            if (JSON.parse(localStorage.getItem('axgRegisteredFunctionsDone')).filter(item => item == funName).length > 0) return;
            console.info(funName);
            window[funName]()
            const doneregistered = JSON.parse(localStorage.getItem('axgRegisteredFunctionsDone'))
            doneregistered.push(funName)
            localStorage.setItem('axgRegisteredFunctionsDone', JSON.stringify(doneregistered))
        })
    })
}
