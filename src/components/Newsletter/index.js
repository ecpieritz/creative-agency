import React from 'react'
import Title from '../Titles'

const Newsletter = () => {
  return (
    <section className='ca-newsletter' id='ca-newsletter'>
      <div className='container-fluid'>
        <Title subtitle="Get Notified About Project" title="Subscribe Now" />

        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="news-email" placeholder="Ex.: name@example.com" />
          </div>
          <button type="submit" class="btn btn-yellow-bg ">Send</button>
        </form>
      </div>
    </section>

  )
}

export default Newsletter
