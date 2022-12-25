import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import './SearchPage.css'
import Res from '../res'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material'

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue()
    // live API (100 free per day)
    const { data } = useGoogleSearch(term)
    // const data = Res
    // let term = true

    console.log(data)
    return (
        <div className='searchPage'>

            <div className='searchPage_header'>
                
                <Link to='/'>
                    <img className='searchPage_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png' alt=''/>
                </Link>

                <div className='searchPage_headerBody'>
                    <Search hideButtons/>

                    <div className='searchPage_options'>

                        <div className='options_left'>

                            <div className='option'>
                                <SearchIcon />
                                <Link to='/all'> All </Link>
                            </div>

                            <div className='option'>
                                <DescriptionIcon />
                                <Link to='/news'> News </Link>
                            </div>

                            <div className='option'>
                                <ImageIcon />
                                <Link to='/images'> Images </Link>
                            </div>

                            <div className='option'>
                                <LocalOfferIcon />
                                <Link to='/shopping'> Shopping </Link>
                            </div>

                            <div className='option'>
                                <RoomIcon />
                                <Link to='/maps'> Maps </Link>
                            </div>

                            <div className='option'>
                                <MoreVertIcon />
                                <Link to='/more'> More </Link>
                            </div>

                        </div>

                        <div className='options_right'>

                            <div className='option'>
                                <Link to='/settings'> Settings </Link>
                            </div>

                            <div className='option'>
                                <Link to='/tools'> Tools </Link>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='searchPage_headerRight'>
                    <div className='right_icons'>
                        <SettingsIcon />
                        <AppsIcon />
                        <Avatar />
                    </div>
                </div>

            </div>

            {term && (
                <div className='searchPage_results'>
                    <p className='searchPage_resultCount'> About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} </p>

                    {data?.items.map(item => (
                        <div className='searchPage_result'>
                            
                            <a className='searchPage_resultLink' href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (

                                    <img className='searchPage_resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=''/>

                                )}

                                {item.displayLink} ▽

                            </a>

                            <a className='searchPage_resultTitle' href={item.link}>
                                <h2> {item.title} </h2>
                            </a>

                            <p className='searchPage_resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage