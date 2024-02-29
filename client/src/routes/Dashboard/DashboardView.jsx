import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { END_POINTS } from '../../api'

import ErrorAlert from '../../components/ErrorAlert/ErrorAlert'
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal'

import './DashboardView.scss'

const DashboardView = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

  const closeModal = () => {
    setIsShowModal(false)
  }

  useEffect(async () => {
    const getUserList = async () => {
      await END_POINTS.getUserProfile()
      .then((result) => {
        setIsShowModal(!result.data.subscribe_newsletter)
      }).catch(() => {
        setIsError(true)
        setErrorMsg('Something went wrong. Please refresh and try again.')
      })
    }
    getUserList()
  }, [])
  return (
    <div className='page--whole'>
      { isError && <ErrorAlert errMessage={errorMsg} /> }
      {/* Section for the Promotion Banner */}
      <section className='container--md'>
        <div className='d-flex justify-content-end radius-m pv-xl student-bg mv-l'>
          <div className='d-flex flex-column p-xl'>
            <h1 className='promotion-title'>Building A Better World One Student At A Time</h1>
            <p className='promotion-desc'>We have matched more than 100,000 students across the world with their dream universities. Find yours on our site now!</p>
            <Link to='/universities'>
              <button className='btn-primary btn-block'>GO</button>
            </Link>
          </div>
        </div>
      </section>
      <NewsletterModal show={isShowModal} handleClose={closeModal} />
    </div>
  )
}

export default DashboardView