import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
  return (
    <div class="container my-5">
    <h1 class="text-center mb-5">About Us</h1>
    <div class="row">
      <div class="col-md-6">
        <img src="https://via.placeholder.com/500x300" alt="About Us" class="img-fluid rounded mb-4"/>
      </div>
      <div class="col-md-6">
        <h2>Who We Are</h2>
        <p>We are a team of passionate individuals dedicated to providing high-quality products and services to our customers. Our mission is to create innovative solutions that make a positive impact on the world.</p>
        <h2>Our History</h2>
        <p>Our company was founded in 2010 with the goal of revolutionizing the industry. Over the years, we have grown to become a leading provider of cutting-edge technology and services.</p>
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Teamwork</li>
          <li>Customer Satisfaction</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

About.propTypes = {

}

export default About
