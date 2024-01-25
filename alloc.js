let uu = ""

resources.map(cat => uu += `
<li onClick="updateContext('${cat.category}')"><a id=${cat.category}>${cat.category}</a></li>
`) 
document.getElementById("headerbox").innerHTML = uu



function updateContext(cur_catagory){

    let p = ""
    console.log(cur_catagory)

    resources.map(pre => {
        if(cur_catagory === pre.category){
            p = `
            <article>
            <h2>${pre.category}</h2>
            <p>${pre.text}</p>
            <ul>${pre.sources.map (y => `<li><a href="${y.url}">${y.title}</a></li>`)}</ul>
            </article>
            `
console.log("clicked")
console.log(p)
document.getElementById("infobox").innerHTML = p


        }
    })
    const allElements = document.querySelectorAll("*")

    allElements.forEach(element => {
        element.classList.remove("active")
    });

    document.getElementById(cur_catagory).classList.add("active");

}

updateContext("HTML")