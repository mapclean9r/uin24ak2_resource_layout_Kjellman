let uu = ""

resources.map(cat => uu += `
<li onClick="updateContext('${cat.category}')"><a>${cat.category}</a></li>
`) 
document.getElementById("headerbox").innerHTML = uu

function updateContext(cur_catagory){

    let p = ""

    resources.map(pre => {
        if(cur_catagory === pre.category){
            p = `
            <article>
            <h2>${pre.category}</h2>
            <p>${pre.category}</p>
            <ul>${pre.sources.map (y => `<li><a href="${y.url}">${y.title}</a></li>`)}</ul>
            </article>
            `
console.log("clicked")
console.log(p)
document.getElementById("infobox").innerHTML = p
        }
    })


}

updateContext()