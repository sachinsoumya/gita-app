import React from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom'



const curl = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '65c54ae186msh924f4fdd8943cc7p166aa3jsn3f53457fe6d3',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
};




export default function Chapters() {
    const [chapters, setChapters] = useState("");

    const isMountedRef = useRef(false);


    useEffect(() => {
        if (!isMountedRef.current) {
            const getData = () => {
                fetch(curl, options)
                    .then((res) => res.json())
                    .then((data) => setChapters(data))
                    .catch((err) => console.log(err.message));

            }
            getData();
            isMountedRef.current = true;
        }

    }, []);





    return (
        <div className='container-fluid py-3'>
            <div className="text-danger display-6 text-center my-2 font"> Chapters</div>
            <div className="row justify-content-between gx-5 gy-3">
                {chapters ? chapters.map((item) => {
                    return (



                        <div className="col-12 col-md-6 col-lg-4 text-center">
                            <NavLink to={`/verse/${item.chapter_number}`} className="text-decoration-none">
                                <div className="card bg-warning ">
                                    <div className="card-header font ">
                                        Chapter {item.id}
                                    </div>
                                    <div className="card-body font">
                                        <h5 className="card-title fs-3">{item.name_translated}</h5>
                                        <p className="card-text fs-6 fw-semibold">{item.name_meaning}</p>

                                    </div>
                                </div>
                            </NavLink>




                        </div>







                    )
                }) :
                    <div className='text-center my-3'>
                        <div class="spinner-grow text-danger " role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        </div>


    )

}



