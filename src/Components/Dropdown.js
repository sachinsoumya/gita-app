import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import './Dropdown.css'

const churl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18"
const vsurl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters"

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '65c54ae186msh924f4fdd8943cc7p166aa3jsn3f53457fe6d3',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
};

export default function Dropdown() {

    const [chnumber, setChnumber] = useState("");

    const [versenum, setVersenum] = useState("");

    const [chapter, setChapter] = useState("");

    const isMountedRef = useRef(false);

    const history = useHistory();


    useEffect(() => {
        if (!isMountedRef.current) {
            const getData = () => {
                fetch(churl, options)
                    .then((res) => res.json())
                    .then((data) => setChnumber(data))
                    .catch((err) => console.log(err.message));

            }
            getData();
            isMountedRef.current = true;
        }

    }, []);

    const handleChap = (event) => {

        const chapter = event.target.value;
        setChapter(chapter);
        fetch(`${vsurl}/${chapter}/verses/`, options)
            .then((res) => res.json())
            .then((data) => setVersenum(data));
    }


    const handleVerse = (event) => {
        const verse = event.target.value;

        history.push(`/chapter/${chapter}/verses/${verse}`)

    }





    return (
        <div>

            <div className="row gx-3 mt-5 justify-content-center px-4 px-md-0">
                <div className="col-md-6 col-12 mx-auto px-md-5">




                    <select className="form-select fc2 bg-warning-subtle " aria-label="Default select example" onChange={handleChap}>
                        <option value="1">-----Select Chapter----</option>

                        {chnumber ? chnumber.map((item) => {
                            return <option key={item.id} value={item.chapter_number}>{item.chapter_number}</option>

                        }) : <option >Data is coming</option>}



                    </select>

                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0 px-md-5 ">


                    <select className="form-select fc2 bg-warning-subtle " aria-label="Default select example" onChange={handleVerse}>
                        <option value="1">-----Select Sloks----</option>
                        {versenum ? versenum.map((item) => {
                            return <option key={item.id} value={item.verse_number}>{item.verse_number}</option>
                        }) : <option >Data is coming</option>}


                    </select>
                </div>

            </div>



        </div>
    )
}
