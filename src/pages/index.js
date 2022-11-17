// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import { StaticImage } from 'gatsby-plugin-image'
import {
  flexparent,
  flexchild
} from '../componenets/util.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Semper CLImb">
      <StaticImage
        alt="A picture of the Flatirons facing south taken from the top of the Red Devil"
        src="../images/flatirons_1.jpg"
      />
      <Post></Post>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
