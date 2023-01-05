import React from 'react'

const Satisfaction = () => {
  return (
    <section className='ca-satisfaction' id='ca-satisfaction'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='row'>
              <div className='col-md-6 mt-5'>
                <div className='row'>
                  <div className='col'>
                    <div className='card bg-purple'>
                      <h2 className='text-center'>70K+</h2>
                      <p className='text-center'>We have more than customers</p>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='card bg-purple'>
                      <h2 className='text-center ca-colors__text__red'>10M+</h2>
                      <p className='text-center'>People who are helped because of our hard work</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className='col-md-6'>
                <div className='row'>
                  <div className='col'>
                    <div className='card bg-purple'>
                      <h2 className='text-center ca-colors__text__orange'>100+</h2>
                      <p className='text-center'>Projects we have completed</p>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='card bg-purple'>
                      <h2 className='text-center ca-colors__text__green'>200+</h2>
                      <p className='text-center'>Support from world-renowned companies</p>
                    </div>
                  </div>

                </div>
              </div>
              
            </div>
          </div>

          <div className='col-md-5'>
            <h2>Customer satisfaction is our first priority</h2>
            <p>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>

            <ul className='ca-list__purple-check'>
              <li><span>Provide idea support from our creative team</span></li>
              <li><span>Provide attractive and professional design services</span></li>
              <li><span>Support for service 24 hours a week</span></li>
              <li><span>Helping our customers to grow their business</span></li>
              <li><span>Provide support to market products through online marketplace</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Satisfaction
