const API = "http://localhost:5000/api"

export const register = (user)=>{
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            "content-type":"applications/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}