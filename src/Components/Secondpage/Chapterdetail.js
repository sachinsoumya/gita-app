import React from 'react'
import  { useEffect , useRef ,useState } from 'react';




import   '../Homepage/Home.css';

const durl = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '65c54ae186msh924f4fdd8943cc7p166aa3jsn3f53457fe6d3',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};



export default function Chapterdetail(props) {
    const [des , setDes] = useState("")

    const isMountedRef = useRef(false);

    useEffect(()=>{
        if (!isMountedRef.current){
        const getData = ()=>{
           fetch(`${durl}/${props.chapter}/` , options)
           .then((res)=>res.json())
           .then((data)=>setDes(data))
        }
    
        getData();
        isMountedRef.current = true;
      }
    } , [props.chapter])
    

    // // const { chapter } = useParams();
    // // console.log(chapter);
    // console.log(props.ch)
  return (
    <div>
         <div  className='h2  font text-center my-2 text-decoration-underline pt-4 '><i className="fas fa-om mx-2"></i>Chapter {des.chapter_number} - {des.name_translated}<i className="fas fa-om mx-2"></i></div>
         <div  className=' fs-4 font text-center my-2'> {des.name_meaning}</div>
         <div className="font text-center my-2">{des.chapter_summary}</div>
  

        </div>
  )

   
}
