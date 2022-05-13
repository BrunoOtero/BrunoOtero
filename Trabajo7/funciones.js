fetch(`https://randomuser.me/api`)
.then(response=>response.json())
.then(data=>{
    console.log(data)})

function Ver(){
    fetch(`https://randomuser.me/api`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("A").data.name.first

    })
        
}