import React from 'react';
import { Form, InputGroup, Button, Container } from 'react-bootstrap';

export default function NewsletterSection() {
  return (
    <div class="row m-0 p-0"style={{backgroundColor:"#F8FDFF"}}>
    <div className="col-8 offset-2 bg-primary" style={{ borderRadius: '20px' }}>
        <div className="row m-0 p-0">
            <div className="col-12 d-flex justify-content-center text-white pt-5">
                <h2 className="p-0 m-0">Subscribe to NewsLetter</h2>
            </div>
        </div>
        <div className="row m-0 p-0">
            <div className="col-12 d-flex justify-content-center mt-3 text-white text-center" style={{fontSize: "1rem"}}>
                We have a wide experience in experience design and strategy,<br/>
                with locally-rooted knowledge.
            </div>
        </div>
        <div className="row m-0 p-0 my-5"><Form className="col-8 offset-2 d-flex bg-white rounded justify-content-center">
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              style={{
                border: 'none',
                borderRadius: '8px',
              }}
              className='h-100 decorationNone'
            />
            <Button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '30px',
                fontSize: '11px',
                whiteSpace: 'nowrap'
              }}
              className='m-3 px-4 py-3'
            >
              Send Now
            </Button>
          </InputGroup>
        </Form></div>
    </div>
</div>
  );
}
