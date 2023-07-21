import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer() {
  return (
    <div>
      <div className="footer bg-warning text-danger py-3 ">

        <div className="row justify-content-evenly gx-3">
          <div className='col-12 col-md-4 text-center'>
            <div className='fs-4 fw-bold'>BHAGAVADGITA</div>
            <div>Bhagavad Gita is a practical guide to one's life that guides you to re-organise your life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality).
              <span className='fst-italic fw-medium'>BhagavadGita</span> is a modern Bhagavad Gita app with a <span className='fst-italic fw-medium'>simple, beautiful and easy to use interface</span>, helping you focus on reading. It is an app built for Bhagavad Gita readers, by Bhagavad Gita readers.</div>
          </div>
          <div className='col-12 col-md-4 text-center py-2 py-md-0'>
            <div className='fs-4 fw-bold'>USEFUL LINKS</div>
            <NavLink to='/about' className="text-decoration-none text-danger"><div className='mt-2'>ABOUT US</div></NavLink>
            <NavLink to='/contact' className="text-decoration-none text-danger"><div className='mt-2 text-uppercase'>CONTACT US</div></NavLink>
            <div className='mt-2 text-uppercase'>API</div>
            <div className='mt-2 text-uppercase'>Privacy Policy</div>
            <div className='mt-2 text-uppercase'>Terms of Service</div>

          </div>
          <div className='col-12 col-md-4 text-center py-2 py-md-0'>
            <div>
              <div className='fs-4 fw-bold'>FOLLOW US</div>
              <div className="d-flex justify-content-center flex-wrap my-2 ">
                <div ><a href="https://www.instagram.com/sachinsoumya/" target='_blank' rel='noreferrer'><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" /></a></div>
                <div className='ps-2'><a href="https://www.youtube.com/channel/UC3WgqcI1eJaLSfg2h6fLTyg" target='_blank' rel='noreferrer'><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play" /></a></div>
                <div className='ps-2'><a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" /></a></div>
                <div className='ps-2'><a href="https://github.com/sachinsoumya" target='_blank' rel='noreferrer'><img width="48" height="48" src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1" /></a></div>


              </div>


            </div>

          </div>

        </div>

      </div>

      <div className='bg-transparent text-center py-2'>
        <div>© 2023 Copyright: BhagavadGita</div>
        <div>Dev by - @sachinsoumya</div>
      </div>

    </div>




  )
}
