import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from './NewsLetter';

function MailChimpForm() {

  const postUrl = "https://outlook.us14.list-manage.com/subscribe?u=cfc7e0bcbbba89cdfde803406&id=5eb7fc0a39"; 
  
  //const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;


  return (
    <>
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <NewsLetter
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
          />
      )}
      />
  </>
  )
}

export default MailChimpForm