import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Description from './Description';
import '../font.css'

const iurl = "https://bhagavadgitaapi.in/slok"


export default function Third() {

    const { chapter, verse_num } = useParams();
    console.log(chapter);
    console.log(verse_num);
    const isMountedRef = useRef(false);
    const [image, setImage] = useState("");

    useEffect(() => {


        if (!isMountedRef.current) {
            const getData = () => {
                fetch(`${iurl}/${chapter}/${verse_num}/gita.svg`, { method: "GET" })
                    .then((res) => setImage(res))


            }

            getData();
            isMountedRef.current = true;
        }

    }, [chapter,verse_num])

    return (
        <div className='mt-5'>
            
             
            
            <div className='h2  font text-center my-2 text-decoration-underline pt-4'><i class="fas fa-om mx-2"></i>Chapter:{chapter} , Sloak : {verse_num}<i class="fas fa-om mx-2"></i></div>
            {image ?
                <div className='h2 text-center'>
                    <div className='my-4' ><img src='https://bhagavadgitaapi.in/slok/krishna.png' alt='krishna' className='img-fluid rounded-circle border border-warning' /></div>
                    
                



                </div> : <div className='text-center my-3 fs-3 text-danger'>Loading....,please wait</div>
                          
                }

            <Description chapter={chapter} verse={verse_num} pic={image.url} />
            
        </div>


    )
}
