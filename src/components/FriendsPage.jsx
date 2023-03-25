import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function FriendsPage() {
  // Initialize variables
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [friends, setFriends] = useState([])
  const [fproflie, setfProfile] = useState(false)
  const [id, setId] = useState(0)

  // Load friends list from server when the component mounts
  useEffect(() => {
    setfProfile(false)
    // Retrieve the current user's data from local storage
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItems(items)
    }
    // Retrieve the list of friends from the server
    axios
      .get(`http://localhost:5000/user/${items.id}/friends`)
      .then((response) => {
        setFriends(response.data.friends)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // Navigate to a friend's profile when their card is clicked
  function navigateToProfile(id) {
    setfProfile(true)
    setId(id)
    const data = { fid: id }
    navigate('/friendsprofile', { state: data })
  }

  // Render the list of friends as a series of cards
  return (
    <>
      {/* Checks if there are friends to display */}
      {friends.length > 0 ? (
        // Maps through the friends array and creates a container for each friend
        friends.map((friend) => (
          <Container
            key={friend.id}
            onClick={() => navigateToProfile(friend.friend.id)}
          >
            <Row className='d-flex justify-content-center  mt-4'>
              <Col md={8}>
                <div className='people-nearby'>
                  {/* Creates a card with friend details */}
                  <div className='nearby-user bg-dark px-5 rounded-4'>
                    <Row className='d-flex align-items-center'>
                      <Col md={2} sm={2}>
                        {/* Displays friend's profile picture */}
                        <img
                          src='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1679665820~exp=1679666420~hmac=399b3bc6faa5169d653632ed5b2b6bf9dc6572f353617f1a14d44489b57ce46a'
                          alt='user'
                          className='profile-photo-lg'
                        />
                      </Col>
                      <Col md={7} sm={7}>
                        {/*Displays friend's name */}
                        <h5 style={{ paddingLeft: '30px' }}>
                          <a className='profile-link text-white text-decoration-none'>
                            {friend.friend.name}
                          </a>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ))
      ) : (
        // If there are no friends to show
        <h1 className='d-flex justify-content-center mt-5'>No friends found</h1>
      )}
    </>
  )
}

export default FriendsPage
