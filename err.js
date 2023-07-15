const makeFakeRequest = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            const random = Math.random();
            if (random > 0.5) {
                resolve({data:'lol', status: 200});
            }
            reject({message: "NOt found", status: 404});
        });
    });
};

const file = makeFakeRequest()
file 
    .then((data)=>{
        onsole.log(data);
    })
    .catch((e)=>{
        console.log(e);
    }) 

 
async function asyncCall() {
    console.log('start');
    try{
        const result = await makeFakeRequest();
        console.log(result);
    }catch (e){
        console.log(e);
    }
  
}

asyncCall();