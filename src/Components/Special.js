import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Special.css'
import './font.css'

const surl = "https://bhagavadgitaapi.in/slok"






export default function Special() {

  const history = useHistory();

  const [slok, setSlok] = useState("");
  const isMountedRef = useRef(false);



  useEffect(() => {

    let chapter
    let verseNum
    if (!isMountedRef.current) {
      const getData = () => {
        chapter = Math.floor(Math.random() * 18) + 1;
        verseNum = Math.floor(Math.random() * 10) + 1;
        fetch(`${surl}/${chapter}/${verseNum}`)
          .then((res) => res.json())
          .then((data) => sessionStorage.getItem("slok") ? getSlok() : setData(data))
          .catch((err) => console.log(err.message))


      }
      getData();
      isMountedRef.current = true;

    }


    const setData = (data) => {
      sessionStorage.setItem("slok", JSON.stringify(data));
      getSlok();
    }


    const getSlok = () => {
      let s = JSON.parse(sessionStorage.getItem('slok'));
      setSlok(s);
    }






  }, []);


  // const getSlok = () => {
  //   let s = JSON.parse(sessionStorage.getItem('slok'));
  //   setSlok(s);
  // }













  return (
    <div className='my-5'>

      <div className='text-center  px-2 px-lg-0'>
        <img src="https://e0.pxfuel.com/wallpapers/54/421/desktop-wallpaper-shri-krishna-mahabharat-arjun-mahabharat.jpg" alt="specialimage" className=' my-4 speWidth object-fit-cover rounded shadow-lg' />
      </div>

      <div className="text-center text-danger display-6 my-3 font">
        <div className='my-2'><i className="fas fa-om mx-2 display-3 fw-bold"></i></div>
        Slok Of The Day  <div className='fs-5 text-dark my-1'>{new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()} / {new Date().getMonth() < 10 ? "0" + new Date().getMonth() : new Date().getDate()} / {new Date().getFullYear()}</div>
      </div>


      {slok ?

        <div className="card text-center bg-warning ">
          <div className="card-header">
            <i className="fas fa-om fs-3"></i>
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
            <i className="fas fa-om fs-3"></i>
          </div>
        </div>
        : <div className='text-center my-3'>
          <div className="spinner-grow text-danger " role="status">
            <span className="visually-hidden">Loading...</span>

          </div>
          <div className='text-danger fs-4'>Loading ..please wait</div>
        </div>}


      <button type="button" className="btn btn-dark mx-3 mt-4 btn-sm " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Back" onClick={() => history.push('/')} > Back to Home</button>

    </div>
  )
}
