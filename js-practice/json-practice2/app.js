function LoadData(){
    return new Promise((resolve,reject) =>{
        fetch('data.json')
        .then(response =>{
            if(!response.ok){
                throw new Error("Respawn not okay")
            }
            return response.json();
        }).then(data =>{
            resolve(data)
        }).catch(data =>{
            reject(data)
        })
    })
   
}
LoadData().then((data)=>{
    start(data)
}).catch((error)=>{
    console.log(error)
})
function start(data){
    console.log("data from start",data)
}