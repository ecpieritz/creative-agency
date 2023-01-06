import React from 'react'

import quoteIcon from '../../assets/img/Icon/ca-icon__quote.png'

const Quotes = () => {
  return (
    <section className='ca-quotes' id='ca-quotes'>
      <div className='container-fluid'>
        <div id="ca-quotes__carousel" class="carousel slide ca-quotes__carousel" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#ca-quotes__carousel" data-slide-to="0" class="active"></li>
            <li data-target="#ca-quotes__carousel" data-slide-to="1"></li>
            <li data-target="#ca-quotes__carousel" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active ca-quotes__carousel__item">
              <div>
                <img className='' src={quoteIcon} alt="quote icon" />

                <h4 className='ca-colors__text__yellow'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</h4>

                <p>Mark Garfield</p>
                <p>CEO & Head of Marketing</p>
              </div>
            </div>

            <div class="carousel-item ca-quotes__carousel__item">
              <div>
              <img className='' src={quoteIcon} alt="quote icon" />

              <h4 className='ca-colors__text__yellow'>They will constantly strive to research knowledge based eBusiness solutions for today is market-driven eBusinesses.</h4>

              <p>Suzanne Tilly</p>
              <p>Head of Development</p>
              </div>
            </div>

            <div class="carousel-item ca-quotes__carousel__item">
              <div>
              <img className='' src={quoteIcon} alt="quote icon" />

              <h4 className='ca-colors__text__yellow'>They are continually evolving, helping to deliver highly effective database solutions for today is Scandinavian market leaders.</h4>

              <p>Marcel Calleigh</p>
              <p>Head of Design</p>
              </div>
            </div>
          </div>

          <a class="carousel-control-prev" href="#ca-quotes__carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a class="carousel-control-next" href="#ca-quotes__carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Quotes
