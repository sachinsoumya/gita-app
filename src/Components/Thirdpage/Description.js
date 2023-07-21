import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSpeechSynthesis } from 'react-speech-kit'
import '../font.css'


const surl = 'https://bhagavadgitaapi.in/slok'




export default function Description(props) {
    const isMountedRef = useRef(false);
    const [slok, setSlok] = useState("");

    const { speak } = useSpeechSynthesis()
    // const [text , setText] = useState("");
    // console.log(props.pic)

    useEffect(() => {
        if (!isMountedRef.current) {
            const getData = () => {
                fetch(`${surl}/${props.chapter}/${props.verse}`)
                    .then((res) => res.json())
                    .then((data) => setSlok(data))
                    .catch((err) => console.log(err.message))
            }

            getData();
            isMountedRef.current = true;
        }

    }, [props.chapter, props.verse])


    const history = useHistory();


    const backTrack = () => {
        history.push(`/verse/${props.chapter}`)

    }


    return (

        <div>
            {slok ?

                <div className="card text-center bg-warning-subtle ">
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
                </div>
            }

            <div className="row my-4 justify-content-center">
                <div className="col-12 col-md-6 my-2 my-md-0">
                    <div className='text-center w-100 font'><a href={`${props.pic}`} download className="btn btn-danger w-75 fs-5 fw-medium">Download Slok <i className="fas fa-download mx-2"></i></a></div>

                </div>
                <div className="col-12 col-md-6 my-2 my-md-0">
                    <div className=' text-center w-100 font'><button type="button" className="btn btn-dark w-75 fs-5 fw-medium " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Back" onClick={() => speak({ text: slok.adi.et })}>Listen Meaning<i className="fas fa-volume-up mx-2"></i></button></div>

                </div>




            </div>

            {/* <div className='text-center my-3'><a href={`${props.pic}`} download class="btn btn-danger w-75 fs-5 fw-bolder">Download Slok </a></div> */}
            <button type="button" className="btn btn-dark mx-3 my-2 btn-sm " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Back" onClick={backTrack}> <i className="fas fa-arrow-circle-left"></i></button>



        </div>



    )
}
