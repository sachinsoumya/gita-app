

import React, { useEffect, useRef, useState } from 'react';
import '../font.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init({
  offset: 300,
  duration: 1200
});


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
          .catch((err) => console.log(err.message))
      }

      getData();
      isMountedRef.current = true;
    }

  }, [props.chapter]);

  const history = useHistory()

  const backTrack = () => {
    history.push(`/`)

  }








  const getVerse = () => {

    if (verses.length) {

      return verses.map((item) => {
        return (
          <div className="col-12 col-md-6 col-lg-4 text-center" key={item.id} >
            <div className="card bg-warning h-100 shadow-md" >
              <div className="card-header font" >
                Slok {item.verse_number}
              </div>
              <div className="card-body font" data-aos="fade-up">
                <h5 className="card-title fs-3">{item.text}</h5>

                <NavLink to={`/chapter/${props.chapter}/verses/${item.verse_number}`}> <button type="button" className="btn btn-outline-danger font mt-3">Open Slok</button></NavLink>



              </div>
            </div>
          </div>


        )

      })


    } else {
      return (
        <div className='text-center my-3'>
          <div className="spinner-grow text-danger " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="text-center fs-3 text-danger">Loading....please wait</div>
        </div>
      )

    }

  }








  return (

    <div className='pt-2'>
      {/* <div className="d-flex justify-content-between">
       
        
        
        </div> */}


      <div className="h2 font text-center "> Sloks </div>



      <div className="row  gx-3 gy-3 px-2 py-3" >{getVerse()}</div>

      <button type="button" className="btn btn-dark mx-3 my-2 btn-sm " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Back" onClick={backTrack} > <i className="fas fa-arrow-circle-left"></i></button>


    </div>
  )
}

