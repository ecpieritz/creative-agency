import React from 'react'
import Title from '../Titles'

const Contact = () => {
  return (
    <section className='ca-contact' id='ca-contact'>
      <div className='container-fluid'>
        <Title subtitle="Interested?" title="Then get in touch" />

        <form>
          <div className="form-group">
            <label for="contact-email">Email address</label>
            <input type="email" className="form-control" id="contact-email" placeholder="Ex.: name@example.com" />
          </div>
          <div className="form-group">
            <label for="contact-name">Your Name</label>
            <input type="text" className="form-control" id="contact-name" placeholder="Ex.: John Doe" />
          </div>
          <div className="form-group">
            <label for="contact-message">Your message</label>
            <textarea className="form-control" id="contact-message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-purple-bg">Send</button>
        </form>
      </div>
    </section>

  )
}

export default Contact
