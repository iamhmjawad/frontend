import React, { useState } from 'react'
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap'

const Messanger = () => {
  const [messages, setMessages] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messageInput, setMessageInput] = useState('')

  const chats = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    // ...
  ]

  const handleChatClick = (chat) => {
    setCurrentChat(chat)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (messageInput.trim() === '') return
    const newMessage = { text: messageInput, sender: 'me' }
    setMessages([...messages, newMessage])
    setMessageInput('')
  }

  return (
    <div className='mt-3' style={{ height: '80vh' }}>
      <Container fluid style={{ height: '100%' }}>
        <Row style={{ height: '100%' }}>
          <Col xs={4} className='bg-light' style={{ height: '100%' }}>
            <ListGroup style={{ height: '100%', overflowY: 'auto' }}>
              {chats.map((chat) => (
                <ListGroup.Item
                  key={chat.id}
                  action
                  active={currentChat && currentChat.id === chat.id}
                  onClick={() => handleChatClick(chat)}
                >
                  {chat.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col xs={8} className='bg-white' style={{ height: '100%' }}>
            <Row style={{ height: '10%' }}>
              <Col>
                {currentChat ? (
                  <h3>{currentChat.name}</h3>
                ) : (
                  <h3>Select a chat to start messaging</h3>
                )}
              </Col>
            </Row>
            <Row style={{ height: '80%' }}>
              <Col style={{ height: '100%' }}>
                {currentChat && (
                  <div style={{ height: '100%', overflowY: 'auto' }}>
                    {messages.map((message, index) => (
                      <div key={index}>
                        {message.sender === 'me' ? (
                          <div className='text-right'>{message.text}</div>
                        ) : (
                          <div className='text-left'>{message.text}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Col>
            </Row>
            <Row style={{ height: '10%' }}>
              <Col>
                {currentChat && (
                  <Form onSubmit={handleMessageSubmit}>
                    <Form.Group controlId='messageInput'>
                      <Form.Control
                        type='text'
                        placeholder='Type a message...'
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                      />
                    </Form.Group>
                    {/* <Button variant='primary' type='submit'>
                      Send
                    </Button> */}
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

export default Messanger
