import axios from "axios"
const TOKEN = sessionStorage.getItem("token")
export default function fetch(options){
    return new Promise((resolve,reject)=>{
        const  INSTACE = new axios({
            headers:{
                "Content-type":"application/json",
                'DSE-TOKEN': ""+ TOKEN,
            },
            timeout:30*1000,
            withCredentials: true,
            onUploadProgress: function (progressEvent) {
                console.log(progressEvent)
            },
            onDownloadProgress: function (progressEvent) {
                console.log(progressEvent)                
              },
        })
        INSTACE(options).then(res=>{
            resolve(res)
        }).catch(error=>{
            console.log("出错了"+error)
            reject(error)
        })
    })
}