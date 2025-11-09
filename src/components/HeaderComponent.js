// eslint-disable-next-line
import React, { useEffect, useState } from 'react'

import { useMediaQuery, useTheme, Box, Link } from '@mui/material'

import image from '../assets/mini-developer-logo.png'

import Courses from '../pages/Courses'
import HeaderDrawerComponent from './HeaderDrawerComponent'
import HeaderMenuTabs from './HeaderMenuTabs'
import TermDates from '../pages/TermDates'
import Testimonials from '../pages/Testimonials'
import AddTestimonial from '../pages/addTestimonial'
import AddCourse from '../pages/EditCourse'

export default function HeaderComponent() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'));// ('md'));

    // eslint-disable-next-line
    const [selectedTab, setSelectedTab] = useState(1)

    // eslint-disable-next-line
    const [pages, setPages] = useState([
        {
            position: 0,
            label: 'Our Courses',
            link: '/',
            component: <Courses />,
            isSelected: false
        },
        {
            position: 2,
            label: 'Term Dates',
            link: '/term-dates',
            component: <TermDates />
        },
        {
            position: 3,
            label: 'Testimonials',
            link: '/testimonials',
            component: <Testimonials />
        },
        {
            position: 3,
            label: 'Add Testimonial',
            link: '/add-testimonial',
            component: <AddTestimonial />
        },
        {
            position: 4,
            label: 'Add Course',
            link: '/add-course',
            component: <AddCourse />
        },
    ])

    function handleSelected(selectedItem) {
        setSelectedTab(selectedItem.position)
    }
    return (
        <React.Fragment>
            <Box
                className={'header'}>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '5vmin', flexGrow: 1 }}>
                    <Link key={pages[0].position}
                        href={pages[0].link} >
                        <img src={image} className={'App-logo'} loading="lazy" alt="logo" />
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: '5vmin' }}>
                    {
                        isMatch ? (<HeaderDrawerComponent pages={pages} handleSelected={handleSelected} sx={{ marginLeft: 'auto' }} />)
                            : (<HeaderMenuTabs pages={pages} handleSelected={handleSelected} />)
                    }
                </Box>
            </Box>
        </React.Fragment>
    )
}