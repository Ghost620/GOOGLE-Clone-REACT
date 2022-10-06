import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import './SearchPage.css'
import Res from '../res'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue()
    // live API (100 free per day)
    //const { data } = useGoogleSearch(term)
    const data = Res

    console.log(data)
    return (
        <div className='searchPage'>

            <div className='searchPage_header'>
                
                <Link to='/'>
                    <img className='searchPage_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png' alt=''/>
                </Link>

                <div className='searchPage_headerBody'>
                    <Search hideButtons/>
                </div>

            </div>

            <div className='searchPage_results'>

            </div>
        </div>
    )
}

export default SearchPage