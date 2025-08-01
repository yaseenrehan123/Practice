loadImages().then((images)=>{
    start(images);
})
  
function loadImages(){
    return new Promise((resolve,reject)=>{
        fetchData('imagesData.json')
        .then((data)=>{

               const keys = Object.keys(data);
               let images = {};
               let loadedCount = 0;

               keys.forEach((key)=>{
                const img = new Image();
                img.src = data[key];
                img.onload = () => {
                    images[key] = img;
                    loadedCount++;
                    if(loadedCount === keys.length){
                        resolve(images);
                    }
                }
                img.onerror = ()=>{
                    reject(new Error(`Failed to laod img ${data[key]}`))
                }
               }) 
        })
        .catch(()=>{
            reject(data);
        })
        
    })
    
}
function fetchData(url){
    return fetch(url)
    .then((response)=>{
        return response.json();
    })
    .catch((error)=>{
        throw new Error(error);
    })
}
function start(images){
    console.log(images["player"]);
}