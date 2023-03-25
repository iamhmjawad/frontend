/* eslint-disable jsx-a11y/alt-text */
// import { Modal } from 'react-bootstrap'

// const ProfilePage = () => {
//   return (
//     <section className=''>
//       {/* Section: Images */}
//       <section className=''>
//         <div className='row'>
//           <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
//             <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
//               <img
//                 src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp'
//                 className='w-100'
//               />
//               <a
//                 href='#!'
//                 data-mdb-toggle='modal'
//                 data-mdb-target='#exampleModal1'
//               >
//                 <div
//                   className='mask'
//                   style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                 ></div>
//               </a>
//             </div>
//           </div>

//           <div className='col-lg-4 mb-4 mb-lg-0'>
//             <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
//               <img
//                 src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp'
//                 className='w-100'
//               />
//               <a
//                 href='#!'
//                 data-mdb-toggle='modal'
//                 data-mdb-target='#exampleModal2'
//               >
//                 <div
//                   className='mask'
//                   style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                 ></div>
//               </a>
//             </div>
//           </div>

//           <div className='col-lg-4 mb-4 mb-lg-0'>
//             <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
//               <img
//                 src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp'
//                 className='w-100'
//               />
//               <a
//                 href='#!'
//                 data-mdb-toggle='modal'
//                 data-mdb-target='#exampleModal3'
//               >
//                 <div
//                   className='mask'
//                   style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                 ></div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   )
// }

// export default ProfilePage

// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

// function SocialMediaPost() {
//   return (
//     <div className='d-flex justify-content-center my-5'>
//       <Card className='mx-auto' style={{ width: '65rem' }}>
//         <Card.Body>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <img
//               src='https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s1100-c50.jpg'
//               alt='Profile Pic'
//               style={{
//                 width: '40px',
//                 height: '40px',
//                 borderRadius: '50%',
//                 marginRight: '10px',
//               }}
//             />
//             <h5>User Name</h5>
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               marginTop: '10px',
//             }}
//           >
//             <p>Caption text goes here.</p>
//             <p>17th March, 2023</p>
//           </div>
//           <div className='d-flex justify-content-center'>
//             <img
//               src='https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s1100-c50.jpg'
//               alt='Post'
//               style={{
//                 width: '40%',
//                 objectFit: 'contain',
//                 objectPosition: 'center',
//                 marginTop: '10px',
//               }}
//             />
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               marginTop: '10px',
//             }}
//           >
//             <Button variant='primary'>Like</Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }

// export default SocialMediaPost

import { Card, Button } from 'react-bootstrap'
import '../styles/style.css'
import { useState } from 'react'

function SocialMediaPost() {
  const [likeCount, setLikeCount] = useState(0)

  // Function to fetch the like count from backend and update state
  const fetchLikeCount = async () => {
    const response = await fetch('/api/like-count')
    const data = await response.json()
    setLikeCount(data.likeCount)
  }
  return (
    <div className='d-flex justify-content-center my-5'>
      <Card className='mx-auto ' style={{ width: '65rem' }}>
        <Card.Body>
          <div
            className='mt-2'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src='https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s1100-c50.jpg'
              alt='Profile Pic'
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <h5>User Name</h5>
          </div>
          {/*  */}
          <div className='d-flex justify-content-center'>
            <h3 className='px-3 text'>Photo Count:4</h3>
            <h3 className='px-3'>Friends Count:4</h3>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          ></div>
          {/* <div className='d-flex'>
            <div className='d-flex justify-content-center'>
              <img
                src='https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s1100-c50.jpg'
                alt='Post'
                style={{
                  width: '25%',
                  // marginTop: '10px',
                }}
              />
            </div>

            <div className='d-flex justify-content-center'>
              <img
                src='https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s1100-c50.jpg'
                alt='Post'
                style={{
                  width: '25%',
                  // marginTop: '10px',
                }}
              />
            </div>

            <div className='d-flex justify-content-center'>
              <img
                src='https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s1100-c50.jpg'
                alt='Post'
                style={{
                  width: '25%',
                  // marginTop: '10px',
                }}
              />
            </div>
          </div> */}
          <section className='mt-3'>
            <div className='row'>
              <div className='col-lg-4 col-md-12 mb-4 mb-lg-0 mt-3'>
                <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp'
                    className='w-100'
                  />
                  <a
                    href='#!'
                    data-mdb-toggle='modal'
                    data-mdb-target='#exampleModal1'
                  >
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className='col-lg-4 mb-4 mb-lg-0  mt-3'>
                <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp'
                    className='w-100'
                  />
                  <a
                    href='#!'
                    data-mdb-toggle='modal'
                    data-mdb-target='#exampleModal2'
                  >
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className='col-lg-4 mb-4 mb-lg-0  mt-3'>
                <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp'
                    className='w-100'
                  />
                  <a
                    href='#!'
                    data-mdb-toggle='modal'
                    data-mdb-target='#exampleModal3'
                  >
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className='col-lg-4 mb-4 mb-lg-0  mt-3'>
                <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp'
                    className='w-100'
                  />
                  <a
                    href='#!'
                    data-mdb-toggle='modal'
                    data-mdb-target='#exampleModal3'
                  >
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SocialMediaPost
