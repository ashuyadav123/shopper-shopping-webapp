import { useState,useEffect } from "react";
import axios from "axios";

const NasaApi=()=>{
    const [NasaData,setNasaData]=useState([])
     
    useEffect(()=>{
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=>{
        setNasaData(response.data.photos)
        })
    },[])
return(
    <div className="container">
    <main className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
     {
        NasaData.map((item)=>(
            <div key={item.id} className="card m-2 p-2" style={{width:'200px'}}>
             <img src={item.img_src} className="card-img-top" height="150px"/>
             <div className="card-header">
                {item.id}
             </div>
             <div className="card-body">
                <dl>
                    <dt>Camera Name</dt>
                    <dd>{item.camera.full_name}</dd>
                    <dt>Rover Name</dt>
                    <dd>{item.rover.name}</dd>
                </dl>
             </div>
            </div>
        ))
     }
    </main>
    </div>
)
}
export default NasaApi;