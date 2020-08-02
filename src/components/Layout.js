import React from 'react'

import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

const Layout = (props) => {
    return (    
    <div>
        <Header />
        <Hero />
        {props.children}
        <Footer />
    </div>
    )
}

export default Layout