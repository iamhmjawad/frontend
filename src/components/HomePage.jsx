import { Card, Button } from 'react-bootstrap'
import '../styles/style.css'
import { useState } from 'react'

function Posts() {
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
          {/* Post */}
          {/* <div>
            <h3
              style={{
                display: 'flex',
                justifyContent: 'center',
                // marginTop: '10px',
              }}
            >
              Like Count: {likeCount}
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <p>Caption text goes here.</p>
            </div>
            <div
              className='d-flex justify-content-center'
              style={{ border: '1px solid black' }}
            >
              <img
                src='https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s1100-c50.jpg'
                alt='Post'
                style={{
                  width: '35%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  // marginTop: '10px',
                }}
              />
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <Button variant='primary' onClick={fetchLikeCount}>
                Like
              </Button>
            </div>
          </div> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Posts
