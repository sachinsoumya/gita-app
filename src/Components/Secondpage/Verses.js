

import React, { useEffect, useRef, useState } from 'react';
import '../Homepage/Home.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const vurl = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '65c54ae186msh924f4fdd8943cc7p166aa3jsn3f53457fe6d3',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }

};




export default function Verses(props) {



  // console.log(props.chapter);
  

  const isMountedRef = useRef(false);

  const [verses, setVerses] = useState("");

  useEffect(() => {
    if (!isMountedRef.current) {
      const getData = () => {
        fetch(`${vurl}/${props.chapter}/verses/`, options)
          .then((res) => res.json())
          .then((data) => setVerses(data))
          .catch((err)=>console.log(err.message))
      }

      getData();
      isMountedRef.current = true;
    }

  }, [props.chapter]);

  

  


  const getVerse = () =>{
     
    if(verses.length){
      
      return verses.map((item)=>{
        return (
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="card bg-warning h-100 shadow-md">
          <div className="card-header font">
          Slok {item.verse_number}
          </div>
          <div className="card-body font">
              <h5 className="card-title fs-3">{item.text}</h5>
             
              <NavLink to={`/chapter/${props.chapter}/verses/${item.verse_number}`}> <button type="button" class="btn btn-outline-danger font mt-3">Open Slok</button></NavLink>
              
              

          </div>
      </div>
      </div>


        )

      })
      

    }else{
      return(
        <div className='text-center my-3'>
                <div class="spinner-grow text-danger " role="status">
                    <span class="visually-hidden">Loading...</span>
             </div>
             <div className="text-center fs-3 text-danger">Loading....please wait</div>
             </div>
      )

    }
    
}








  return (

    <div>
      <div className="h2 font text-center ">Sloks</div>
      <div className="row  gx-3 gy-3 px-2 py-3">{getVerse()}</div>

      
    </div>
  )
}

