
export default async function fetchup() {
    return fetch(`https://homapilot.com/api`)
    .then(res => res.text())
    .then(res => JSON.parse(res))
}