let str = ""
resources.map(x => str += `
    <article>
    <h2>${x.category}</h2>
    <p>${x.text}</p>
    <ul>
    ${x.sources.map (y => `<li><a href="${y.url}">${y.title}</a></li>`)}
    </ul>
    </article>
`)

console.log(resources)
document.getElementById("infobox").innerHTML = str

function updateContent(){
    
}