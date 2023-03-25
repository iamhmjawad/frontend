import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Messenger = () => {
  // Define the component's state variables
  const [messages, setMessages] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messageInput, setMessageInput] = useState('')
  const [items, setItems] = useState([])
  const [chatsList, setChatsList] = useState([])
  const [friendId, setFriendId] = useState('')
  const [flag, setFlag] = useState(false)

  // Load the chats list from the server when the component is mounted
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItems(items)
      axios
        .get('http://localhost:5000/user/' + items.id + '/friends')
        .then((response) => {
          setChatsList(response.data.friends)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  // Load the messages of the selected chat from the server when the current chat changes
  useEffect(() => {
    if (currentChat) {
      const fetchMessages = async () => {
        await axios
          .get(
            `http://localhost:5000/user/${items.id}/chats/${currentChat.friend.id}`
          )
          .then((response) => {
            setMessages(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      fetchMessages()
    }
  }, [currentChat])

  // Extract the chat ids and names from the chats list
  const ids = []
  const names = []
  chatsList.forEach((friend) => {
    ids.push(friend.friend.id)
    names.push(friend.friend.name)
  })
  const chats = ids.map((id, index) => ({
    id: id,
    name: names[index],
  }))

  // Handle the click event of a chat item
  const handleChatClick = (chat) => {
    setCurrentChat(chat)
    setFriendId(chat.friend.id)
    setFlag(true)
  }

  // Handle the form submission event to send a new message
  const handleMessageSubmit = (e) => {
    e.preventDefault()
    const message = {
      message: messageInput,
    }

    axios
      .post(
        `http://localhost:5000/user/${items.id}/friend/${currentChat.friend.id}/chats`,
        message
      )
      .then((response) => {
        if (response) {
          console.log(response.data)
          setMessageInput('')
          setMessages([...messages, message])
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // This component represents the chat interface that shows the list of chats and the current chat's messages.
  return (
    <div className='mt-3' style={{ height: '80vh' }}>
      <Container fluid style={{ height: '100%' }}>
        <Row style={{ height: '100%' }}>
          {/* This column shows the list of chats */}
          <Col xs={4} className='bg-light' style={{ height: '100%' }}>
            <ListGroup style={{ height: '100%', overflowY: 'auto' }}>
              {/* Map over chatsList and render each chat as a ListGroup item */}
              {chatsList &&
                chatsList.map((chat) => (
                  <ListGroup.Item
                    key={chat.friend.id}
                    action
                    // Set the active state to highlight the current chat
                    active={currentChat && currentChat.id === chat.friend.id}
                    // Set the handleChatClick function to handle clicking on a chat
                    onClick={() => handleChatClick(chat)}
                  >
                    {chat.friend.name}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          {/* This column shows the messages of the current chat */}
          <Col xs={8} className='bg-white' style={{ height: '100%' }}>
            <Row style={{ height: '10%' }}>
              <Col>
                {/* If there is a current chat, display its name */}
                {currentChat ? (
                  <h3>{currentChat.friend.name}</h3>
                ) : (
                  <h3>Select a chat to start messaging</h3>
                )}
              </Col>
            </Row>
            <Row style={{ height: '80%' }}>
              <Col style={{ height: '100%' }}>
                {/* If there is a current chat, map over its messages and render each message */}
                {currentChat && (
                  <div style={{ height: '100%', overflowY: 'auto' }}>
                    {messages &&
                      messages.map((message, index) => (
                        <div key={index}>
                          {/* If the message is from the current chat's friend, align the text to the right */}
                          {message.friend_id === currentChat.friend.id ? (
                            <div
                              style={{ textAlign: 'right', color: 'blue' }}
                              className='text-left'
                            >
                              {message.message}
                            </div>
                          ) : (
                            // Otherwise, align the text to the left
                            <div className='text-right'>{message.message}</div>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </Col>
            </Row>
            <Row style={{ height: '10%' }}>
              <Col>
                {/* If there is a current chat, display the message input form */}
                {currentChat && (
                  <Form
                    onSubmit={handleMessageSubmit}
                    className='d-flex justify-content-between'
                  >
                    <Form.Group controlId='messageInput' className='w-100 mx-3'>
                      {/* Set the value of the message input to messageInput state */}
                      <Form.Control
                        type='text'
                        placeholder='Type a message...'
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                      />
                    </Form.Group>
                    {/* Set the button to submit the message */}
                    <Button variant='primary' type='submit'>
                      Send
                    </Button>
                  </Form>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Messenger
