import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer bg-warning text-danger py-3 ">
       
        <div className="row justify-content-evenly gx-3">
          <div className='col-12 col-md-4 text-center'>
            <div className='fs-4 fw-medium'>BHAGAVADGITA</div>
            <div>Bhagavad Gita is a practical guide to one's life that guides you to re-organise your life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality).
            <span className='fst-italic fw-medium'>BhagavadGita</span> is a modern Bhagavad Gita app with a <span className='fst-italic fw-medium'>simple, beautiful and easy to use interface</span>, helping you focus on reading. It is an app built for Bhagavad Gita readers, by Bhagavad Gita readers.</div>
          </div>
          <div className='col-12 col-md-4 text-center'>
            <div className='fs-4 fw-medium'>USEFUL LINKS</div>
            <div className='mt-2'>ABOUT US</div>
            <div className='mt-2'>CONTACT US</div>
            <div className='mt-2'>API</div>
            <div className='mt-2'>Privacy Policy</div>
            <div className='mt-2'>Terms of Service</div>

          </div>
          <div className='col-12 col-md-4 text-center'>
            <div>
              <div className='fs-4 fw-medium'>FOLLOW US</div>
              <div className="d-flex justify-content-center flex-wrap my-2 ">
                <div ><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" /></div>
                <div className='ps-2'><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"  /></div>
                <div className='ps-2'><img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" /></div>
                <div className='ps-2'><img width="48" height="48" src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1" /></div>


              </div>


            </div>

          </div>

        </div>

      </div>

      <div className='bg-transparent text-center py-2'>
      © 2023 Copyright: BhagavadGita
      </div>

    </div>




  )
}
