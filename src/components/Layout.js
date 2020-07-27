import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'

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