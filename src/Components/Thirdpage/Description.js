import React, { useEffect ,useRef ,useState } from 'react';
import '../Homepage/Home.css'


const surl = 'https://bhagavadgitaapi.in/slok'




export default function Description(props) { 
    const isMountedRef = useRef(false);
    const [slok , setSlok] = useState("");
    console.log(props.pic)

    useEffect(()=>{
        if (!isMountedRef.current){
            const getData = ()=>{
               fetch(`${surl}/${props.chapter}/${props.verse}` )
               .then((res)=>res.json())
               .then((data)=>setSlok(data))
               .catch((err)=>console.log(err.message))
            }
        
            getData();
            isMountedRef.current = true;
          }

    },[props.chapter , props.verse])
   

    return (
        
        <div>
            {slok ?

            <div className="card text-center bg-warning-subtle">
                <div className="card-header">
                <i class="fas fa-om fs-3"></i>
                </div>
                <div className="card-body">
                    <div className="my-3 my-lg-5">
                    <div className="h4 font text-center text-decoration-underline ">Slok</div>
                    <h5 className="card-title font  fw-bold fs-2">{slok.slok}</h5>
                    </div>
                  
                    <div className='my-3 my-lg-5'>
                    <div className="h4 font text-center text-decoration-underline ">Transliteration</div>

                    <div className="card-text fs-4">{slok.transliteration}</div>

                    </div>
                    <div className="my-3 my-lg-5">
                    <div className="h4 font text-center text-decoration-underline ">Translation in Hindi</div>
                    <p className="card-text fs-4 font">{slok.tej.ht}</p>

                    </div>
                    <div className="my-3 my-lg-5">
                    <div className="h4 font text-center text-decoration-underline ">Translation in English</div>
                    <p className="card-text fs-4 font">{slok.adi.et}</p>

                    </div>
                    
                    
                   
                </div>
                <div className="card-footer text-body-secondary">
                <i class="fas fa-om fs-3"></i>
                </div>
            </div>
            
            :  <div className='text-center my-3'>
                <div class="spinner-grow text-danger " role="status">
                    <span class="visually-hidden">Loading...</span>
             </div>
             </div>
          }

         <div className='text-center my-3'><a href={`${props.pic}`} download class="btn btn-danger w-75 fs-5 fw-bolder">Download Slok </a></div>
        </div>
       
    )
}