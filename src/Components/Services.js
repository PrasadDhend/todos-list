import React from 'react'


const Services = () => {
  return (
    <div class="container my-5">
    <h1 class="text-center mb-5">Our Todo List Services</h1>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Task Management</h3>
            <p class="card-text">Easily create, organize, and manage your tasks with our intuitive Todo List app.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Collaboration</h3>
            <p class="card-text">Invite your team members to collaborate on tasks and projects, ensuring everyone stays on the same page.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Reminders</h3>
            <p class="card-text">Never miss a deadline with our powerful reminder system, keeping you on track and productive.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services
