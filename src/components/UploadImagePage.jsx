import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap'

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [caption, setCaption] = useState('')

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleCaptionChange = (event) => {
    setCaption(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Upload image and caption to server
    console.log(selectedFile, caption)
  }

  return (
    <Card style={{ height: '88vh' }}>
      <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt='Selected'
            className='img-fluid mb-3'
          />
        ) : (
          <Button
            variant='primary'
            className='mb-3'
            onClick={() => document.getElementById('upload-file-input').click()}
          >
            Upload Image
          </Button>
        )}
        <Form onSubmit={handleSubmit} className='d-flex'>
          <Form.Group controlId='caption'>
            <Form.Control
              type='text'
              placeholder='Caption'
              value={caption}
              onChange={handleCaptionChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='mx-3'>
            Add Caption
          </Button>
        </Form>
        <input
          type='file'
          id='upload-file-input'
          onChange={handleFileChange}
          className='d-none'
        />
      </Card.Body>
    </Card>
  )
}

export default UploadImage
