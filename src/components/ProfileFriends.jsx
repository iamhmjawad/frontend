// Importing necessary dependencies and components
import { Card, Button } from 'react-bootstrap'
import '../styles/style.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function SocialMediaPost() {
  // Using the useLocation hook to retrieve data passed from the previous page
  const location = useLocation()
  const data = location.state

  // Setting up state variables
  const [userprofile, setUserprofile] = useState(0)
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState([])
  const [posts, setPosts] = useState([])
  const [items, setItems] = useState([])

  // useEffect hook to fetch data from the server and update state variables
  useEffect(() => {
    // Retrieving items from localStorage
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItems(items)
    }
    // Fetching user profile data and posts from the server
    axios
      .get('http://localhost:5000/user/' + data.fid)
      .then((response) => {
        console.log(response.data)
        setUserprofile(response.data)
        setPosts(response.data.posts)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // Extracting image URLs from the posts and creating an array of image names and relative URLs
  const imageUrls = posts.map((post) => post.image_url)
  let imageName = imageUrls.map((url) => url.split('\\').pop())
  let relativeUrls = imageName.map(
    (name) => process.env.PUBLIC_URL + '/images/' + name
  )

  return (
    <div className='d-flex justify-content-center my-5'>
      <Card className='mx-auto ' style={{ width: '65rem' }}>
        <Card.Body>
          {/* User profile info section */}
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
            <h5>{userprofile ? userprofile.user.name : 'Loading'}</h5>
          </div>

          {/* User profile stats section */}
          <div className='d-flex justify-content-center'>
            <h3 className='px-3 text'>Photo Count:{userprofile.posts_count}</h3>
            <h3 className='px-3'>Friends Count:{userprofile.friends_count}</h3>
          </div>

          {/* User profile photos section */}
          <section className='mt-3'>
            <div className='row'>
              {/* Render all the user's posts as photo cards */}
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div className='col-lg-4 mb-4 mb-lg-0  mt-3'>
                    <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
                      <img
                        src={relativeUrls[posts.indexOf(post)]}
                        alt=''
                        className='w-100'
                      />
                      {/* Display a modal when a photo is clicked */}
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
