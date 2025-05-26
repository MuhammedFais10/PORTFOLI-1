import React, { useEffect, useState } from 'react'
import { Col, Row, Alert } from "react-bootstrap";

function NewsLetter({ status, message, onValidated }) {

  const [email, setEmail] = useState('');
  console.log(email);


  // useEffect(() => {
  //   if (status === 'success') clearFields();
  // }, [status])

  useEffect(() => {
    if (status === 'success') {
      setEmail('');
    }
  }, [status]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //     email.indexOf("@") > -1 &&
  //     onValidated({
  //       EMAIL: email
  //     })
  // }

  // const clearFields = () => {
  //   setEmail('');
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();


    // if (email && email.includes("@")) {
    //   onValidated({ EMAIL: email });
    // }

 if (email && email.includes("@")) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        onValidated({ EMAIL: email }); // Optional: could just show success directly
        alert(data.message); // Or setStatus('success') to display the Bootstrap alert
        setEmail('');
      } else {
        alert(data.message || 'Something went wrong');
      }

    } catch (err) {
      console.error(err);
      alert('An error occurred while submitting');
    }
  }

  };


  return (

    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert variant="info">Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{typeof message === 'string' ? message : message?.message || 'An error occurred.'}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>

  )
}

export default NewsLetter