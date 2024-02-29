import { useEffect, useState } from 'react'

import Chart from "chart.js/auto"
import { Bar, Pie } from "react-chartjs-2"
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table'
import { useTheme } from '@table-library/react-table-library/theme'
import { getTheme } from '@table-library/react-table-library/baseline'
import { usePagination } from "@table-library/react-table-library/pagination"

import { END_POINTS } from '../../api'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert'
import Loading from '../../components/Loading/Loading'
import ChevronRight from '../../components/Icons/General/ChevronRight'

import './UniversitiesView.scss'

const randomDigit = Math.floor(Math.random() * 3) + 1

const UniversitiesView = () => {
  const [data, setData] = useState({ universityList: [] })
  const [value, setValue] = useState({ continent: '', major: '' })
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

  useEffect(async () => {
    getUniversitiesList()
  }, [])

  const getUniversitiesList = async () => {
    setIsFetching(true)
    await END_POINTS.getUniversitiesList({
      continent: value.continent,
      major: value.major
    })
    .then((result) => {
      setData({ universityList: result.data })
      setIsFetching(false)
    }).catch(() => {
      setIsError(true)
      setIsFetching(false)
      setErrorMsg('Something went wrong. Please refresh and try again.')
    })
  }

  const handleValueChange = (type, result) => {
    setValue({ ...value, [type]: result })
  }

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 5,
    }
  })

  const generateBarChartData = () => {
    const countContinentObject = (continent) => {
      const countContinent = data.universityList.filter((obj) => obj.continent === continent).length
      return countContinent
    }

    const uniqueContinentSet = new Set(data.universityList.map(item => item.continent))
    const uniqueContinentArray = [...uniqueContinentSet]
    const chartData = {
      labels: uniqueContinentArray,
      datasets: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(201, 203, 207, 0.8)'
          ],
          borderColor: 'rgba(0, 0, 0, 0)',
          data: uniqueContinentArray.map(continent => countContinentObject(continent)),
        }
      ]
    }
    return chartData
  }

  const generatePieChartData = () => {
    const countMajorObject = (major) => {
      const countMajor = data.universityList.filter((obj) => obj.popular_major === major).length
      return countMajor
    }

    const uniqueMajorSet = new Set(data.universityList.map(item => item.popular_major))
    const uniqueMajorArray = [...uniqueMajorSet]
    const chartData = {
      labels: uniqueMajorArray,
      datasets: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(201, 203, 207, 0.8)'
          ],
          borderColor: 'rgba(0, 0, 0, 0)',
          data: uniqueMajorArray.map(major => countMajorObject(major)),
        }
      ]
    }
    return chartData
  }

  return (
    <div className='page--whole'>
      <section className='container--md'>
        <div className={`d-flex flex-column radius-m ph-l pv-xxl univ-bg background-${randomDigit}`}> {/* Randomize between 3 background images each time the page refreshes */}
          <h1 className='search-title'>Find your dream university through our HUGE library across the world</h1>
        </div>
      </section>
      { isError && <ErrorAlert errMessage={errorMsg} /> }
      <section className='container--sm mt-m'>
        <div className='d-flex justify-content-center align-items-center'>
          <Bar data={generateBarChartData()} options={{ plugins: { legend: { display: false } } }}></Bar>
          <Pie data={generatePieChartData()}></Pie>
        </div>
      </section>

      <section className='container--lg mt-xxl'>
        <div className='d-flex justify-content-start align-items-center'>
          <label className='mr-s'>Filter by:</label>
          <select className='mr-l' onChange={(e) => handleValueChange('continent', e.target.value)}>
            <option value=''>All Continent</option>
            <option value='Africa'>Africa</option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Australia'>Australia</option>
            <option value='Europe'>Europe</option>
          </select>
          <select className='mr-l' onChange={(e) => handleValueChange('major', e.target.value)}>
            <option value=''>All Popular Major</option>
            <option value='Business'>Business</option>
            <option value='Engineering'>Engineering</option>
            <option value='Law'>Law</option>
            <option value='Literature'>Literature</option>
            <option value='Science'>Science</option>
          </select>
          <button
            className='btn-primary text-medium text-14'
            type='submit'
            onClick={getUniversitiesList}
          >
            Apply Filter
          </button>
        </div>
      </section>

      <section className='container--lg mt-m'>
        { isFetching
          ? <Loading />
          : <>
            <Table data={{ nodes: data.universityList }} theme={useTheme(getTheme())} pagination={pagination} className='mb-l'>
              {(tableList) => (
                <>
                  <Header>
                    <HeaderRow>
                      <HeaderCell resize>Name</HeaderCell>
                      <HeaderCell resize>Country</HeaderCell>
                      <HeaderCell resize>Continent</HeaderCell>
                      <HeaderCell resize>Popular Major</HeaderCell>
                      <HeaderCell resize>Website</HeaderCell>
                    </HeaderRow>
                  </Header>
                  <Body>
                    {tableList.map((item, index) => (
                      <Row key={index} item={item}>
                        <Cell>{item.name}</Cell>
                        <Cell>{item.country}</Cell>
                        <Cell>{item.continent}</Cell>
                        <Cell>{item.popular_major}</Cell>
                        <Cell>
                          <div className='d-flex flex-wrap-wrap'>
                            <a key={index} className='d-flex align-items-center site-box mt-xs' href={item.web_page} target='_blank' rel='noreferrer'>
                              <div className='mr-s'>{ item.web_page }</div>
                              <ChevronRight />
                            </a>
                          </div>
                        </Cell>
                      </Row>
                    ))}
                  </Body>
                </>
              )}
            </Table>

            <div className='d-flex justify-content-between'>
              <span>Total Pages: {pagination.state.getTotalPages(data.universityList)}</span>
              <span>
                Page:{" "}
                { pagination.state.getPages(data.universityList).map((_, index) => (
                  <button
                    key={index}
                    type='button'
                    style={{
                      fontWeight: pagination.state.page === index ? "bold" : "normal",
                    }}
                    onClick={() => pagination.fns.onSetPage(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </span>
            </div>
          </>
        }
      </section>
    </div>
  )
}

export default UniversitiesView