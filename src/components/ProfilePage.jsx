// Importing necessary dependencies and styles
import { Card, Button } from 'react-bootstrap'
import '../styles/style.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function SocialMediaPost() {
  // Setting up states using useState hooks
  const [userprofile, setUserprofile] = useState(0)
  const [items, setItems] = useState([])
  const [imageUrl, setImageUrl] = useState([])
  const [posts, setPosts] = useState([])

  // Fetching user data using useEffect hook
  useEffect(() => {
    // Retrieving data from local storage
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItems(items)
    }
    // Fetching user data from API
    axios
      .get('http://localhost:5000/user/' + items.id)
      .then((response) => {
        setUserprofile(response.data)
        setPosts(response.data.posts)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // Generating relative URLs for images
  const imageUrls = posts.map((post) => post.image_url)
  let imageName = imageUrls.map((url) => url.split('\\').pop())
  let relativeUrls = imageName.map(
    (name) => process.env.PUBLIC_URL + '/images/' + name
  )

  // Render the component JSX
  return (
    // Use Bootstrap classes for layout
    <div className='d-flex justify-content-center my-5'>
      <Card className='mx-auto ' style={{ width: '65rem' }}>
        <Card.Body>
          {/* Display the user's profile picture and name */}
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
          {/* Display the user's photo count and friend count */}
          <div className='d-flex justify-content-center'>
            <h3 className='px-3 text'>
              Photo Count: {userprofile.posts_count}
            </h3>
            <h3 className='px-3'>Friends Count: {userprofile.friends_count}</h3>
          </div>

          {/* Display the user's photos */}
          <section className='mt-3'>
            <div className='row'>
              {/* Check if there are any posts */}
              {posts.length > 0 ? (
                // If there are posts, map through them and display them
                posts.map((post) => (
                  <div className='col-lg-4 mb-4 mb-lg-0  mt-3'>
                    <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
                      <img
                        src={relativeUrls[posts.indexOf(post)]}
                        alt=''
                        className='w-100'
                      />
                      <a
                        href='#!'
                        data-mdb-toggle='modal'
                        data-mdb-target='#exampleModal2'
                      >
                        <div
                          className='mask'
                          style={{
                            backgroundColor: 'rgba(251, 251, 251, 0.2)',
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                // If there are no posts, display nothing
                <div></div>
              )}
            </div>
          </section>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SocialMediaPost
