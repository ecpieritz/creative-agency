import React from 'react'
import Titles from '../Titles'

const Faq = () => {
  return (
    <section className='ca-faq' id='ca-faq'>
      <div className='container-fluid'>
        <Titles subtitle='Frequently Ask Question' title="Some of our frequently asked questions" />

        <div className="accordion" id="accordion-faq">
          <div className="card purple-outline">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What are the services provided to customers?
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion-faq">
              <div className="card-body">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
              </div>
            </div>
          </div>

          <div className="card purple-outline">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How can I submit a proposal for cooperation?
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion-faq">
              <div className="card-body">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
              </div>
            </div>
          </div>
   
          <div className="card purple-outline">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                I come from a faraway place, can collaboration be done full time online through several meeting applications?
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion-faq">
              <div className="card-body">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
              </div>
            </div>
          </div>
   
          <div className="card purple-outline">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                How do I get the payment complete?
                </button>
              </h2>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion-faq">
              <div className="card-body">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
              </div>
            </div>
          </div>
   
          <div className="card purple-outline">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                How long can the collaboration last?
                </button>
              </h2>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion-faq">
              <div className="card-body">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
