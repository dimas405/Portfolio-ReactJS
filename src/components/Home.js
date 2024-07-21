import React from 'react'

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='content'>
        <div className='title'>
          <p>Front-End <span>Developer</span></p>
        </div>
        <div className='desc'>
          <p>Hello, i'm Dimas A. Pradana, and I'm Undergraduate Student Majoring Informatics Engineering in PGRI Madiun University ||<span class="color-acsent"> Front-End Developer.</span></p>
        </div>
        <a href='https://drive.google.com/file/d/1jqYmktJkWuFHXdnzGL0ec0QFeAt6aNJT/view?usp=drive_link' target='_blank' rel='noreferrer' className='btn-cv'> Download CV </a>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img src='/portofolio.jpg' alt='avatar' />
        </div>
      </div>
    </section>
  )
}

export default Home