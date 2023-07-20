import React from 'react'
// import {  useEffect , useRef  } from 'react'


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '65c54ae186msh924f4fdd8943cc7p166aa3jsn3f53457fe6d3',
//         'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
//     }
// };



export default function Special() {
    
//     const isMountedRef = useRef(false);
//     let chapter =1;
//     let verseNum = 1;
//     let verse ;

//     // const [verse , setVerse] = useState("");
//     // const [slok , setSlok] = useState("");


    


//     useEffect(() => {
//         if (!isMountedRef.current) {
//             const getData = () => {
//                 fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`, options)
//                     .then((res) => res.json())
//                     .then((data) => goVerse(data))
//                     .catch((err) => console.log(err.message));

//                     console.log(isMountedRef.current)

//             }
        
//             getData();
//             isMountedRef.current = true;
//         }
        

//     },[chapter ,  isMountedRef ]);


//     console.log('hiii')


//     const goVerse = (datas) => {
       
//             // console.log(datas);
//             verse = datas
//             console.log(verse);
//             goRandom(verse);
        
//     }

   

// const goRandom = (verse)=>{




//     setInterval(()=>{

        

       
//         if (verseNum <= verse.length) {
//             console.log(verse.length)
//             fetch(`https://bhagavadgitaapi.in/slok/${chapter}/${verseNum}` , {method:'GET'})
//                 .then((res) => res.json())
//                 .then((data) => console.log(data));
//             verseNum++;
    
//         } else {
//             if (chapter < 2) {
//                 chapter++;
//                 verseNum = 1;
//                 fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`, options)
//                     .then((res) => res.json())
//                     .then((data) => goVerse(data))
    
//             }else{
//                 chapter=1;
//                 verseNum = 1;
//                 fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`, options)
//                     .then((res) => res.json())
//                     .then((data) => goVerse(data))
    
//             }
    
//         }
    

//     },20000)
// }





  return (
    <div>Special</div>
  )
}
