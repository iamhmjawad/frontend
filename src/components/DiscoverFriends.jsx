import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'

function FriendsPage() {
  // State variables for items, friends, and fAdded
  const [items, setItems] = useState({})
  const [friends, setFriends] = useState([])
  const [fAdded, setfAdded] = useState(false)

  // Fetching items from local storage and friends suggestions from server
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItems(items)
    }
    axios
      .get(`http://localhost:5000/user/${items.id}/friends/suggestions`)
      .then((response) => {
        setFriends(response.data.users)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [fAdded])

  // Function to add friend
  function addFriend(friendid) {
    axios
      .post(`http://localhost:5000/user/${items.id}/friends/${friendid}/add`)
      .then((response) => {
        setfAdded(!fAdded)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Rendering the page with the fetched friends
  return (
    <>
      {/* Logging the number of friends */}
      {console.log(friends.length)}
      {/* Conditional rendering based on the length of friends */}
      {friends.length > 0 ? (
        friends.map((friend) => (
          <Container key={friend.id}>
            <Row className='d-flex justify-content-center mt-4'>
              <Col md={8}>
                <div className='people-nearby'>
                  {/* Card with friend details */}
                  <div className='nearby-user bg-dark px-5 rounded-4'>
                    <Row className='d-flex align-items-center'>
                      <Col md={2} sm={2}>
                        {/* Displays friend's profile picture */}
                        <img
                          src='https://cdn-icons-png.flaticon.com/512/636/636912.png?w=740&t=st=1679665940~exp=1679666540~hmac=1e561f56fe7a0a49b880f3ce3b8209d82a848bf2c3b7680a301a262a6517e5d4'
                          alt='user'
                          className='profile-photo-lg'
                        />
                      </Col>
                      <Col md={7} sm={7}>
                        {/* Displays friend's name */}
                        <h5 style={{ paddingLeft: '30px' }}>
                          <a className='profile-link text-white text-decoration-none'>
                            {friend.name}
                          </a>
                        </h5>
                      </Col>
                      <Col md={3} sm={3}>
                        {/* Button to add friend */}
                        <Button
                          className='btn btn-primary pull-right'
                          onClick={() => addFriend(friend.id)}
                        >
                          Add Friend
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  {/* Ends card */}
                </div>
              </Col>
            </Row>
          </Container>
        ))
      ) : (
        // If there are no friends to show
        <h1 className='d-flex justify-content-center mt-5'>Nothing to Show</h1>
      )}
    </>
  )
}

export default FriendsPage
