// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import AboutMe from '../components/aboutme'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Brandon White">
        <AboutMe></AboutMe>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
