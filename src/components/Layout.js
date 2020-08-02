import React from 'react'

import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

const Layout = (props) => {
    return (    
    <div>
        <Header />
        <Hero />
        <section style={{ minHeight: `100vh` }}
        {props.children}
        </section>
        <Footer />
    </div>
    )
}

export default Layout