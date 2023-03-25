// This component displays posts fetched from the backend
// It has a state that stores the items fetched from local storage
// and a state that stores the caption and image URL of the post being displayed
// It also has a state that tracks the number of likes for the post being displayed

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import '../styles/style.css'

function Posts() {
  const [items, setItems] = useState([])
  const [caption, setCaption] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  // Fetches the items from local storage and sets the state accordingly
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItems(items)
      // Fetches the post from the backend and sets the caption and image URL states
      axios
        .get('http://localhost:5000/user/' + items.id + '/post')
        .then((response) => {
          setCaption(response.data.caption)
          setImageUrl(response.data.image_url)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  // Extracts the image file name from the image URL
  let imageName = imageUrl.split('\\').pop()

  // State that tracks the number of likes for the post being displayed
  const [likeCount, setLikeCount] = useState(0)

  // Function that increments the like count
  function fetchLikeCount() {
    setLikeCount(likeCount + 1)
  }

  // Component to display a post with its details
  return (
    <div className='d-flex justify-content-center my-5'>
      <Card className='mx-auto ' style={{ width: '65rem' }}>
        <Card.Body>
          {/* Profile Pic and Name */}
          <div
            className='mt-2'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1679665820~exp=1679666420~hmac=399b3bc6faa5169d653632ed5b2b6bf9dc6572f353617f1a14d44489b57ce46a'
              alt='Profile Pic'
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <h5>{items.name}</h5>
          </div>
          {/* Post */}
          <div>
            <div>
              {/* Like count */}
              <h3
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Like Count: {likeCount}
              </h3>
              {/* Caption */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <p>{caption ? caption : ''}</p>
              </div>
              {/* Image */}
              <div
                className='d-flex justify-content-center'
                style={{ border: '1px solid black' }}
              >
                {caption ? (
                  <img
                    src={process.env.PUBLIC_URL + '/images/' + imageName}
                    alt='No Image Found'
                    style={{
                      width: '45%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                  />
                ) : (
                  <h3>No Image Found!</h3>
                )}
              </div>
              {/* Like button */}
              <div className='d-flex justify-content-center mt-3'>
                <Button variant='primary' onClick={fetchLikeCount}>
                  Like
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Posts
