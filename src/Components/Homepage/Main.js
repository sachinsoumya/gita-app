import React from 'react'
import './Home.css'
import '../font.css'


export default function Home() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="d-flex justify-content-center "><img src="../image/logo.png" alt="Hii" className="logoWidth" /></div>
        <div className="my-3">

          <div className="text-center text-danger display-6 my-3 font">
            <div><i className="fas fa-om mx-2 display-3 fw-bold"></i></div>
            Introduction to Bhagavad Gita
          </div>
          <div className="border border-warning p-2 text-center fw-semibold fs-lg-5 fs-6 rounded shadow-lg font">
            <span className='fs-5'>Bhagavad Gita</span>, also known as the <span className='fs-5'>Gita</span> - "The Song of God" is a practical guide to one's life that guides one to re-organise their life, achieve inner peace and approach the Supreme (the Ultimate Reality). It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in the Bhishma-Parva section of the <span className='fs-5'>Mahabharata</span>.

            The Bhagavad Gita is a dialogue between <span className='fs-5'>Arjuna</span>, a supernaturally gifted warrior and his guide and charioteer <span className='fs-5'>Lord Krishna</span> on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, the Bhagavad Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life.
          </div>
        </div>


      </div>



    </div>
  )
}
