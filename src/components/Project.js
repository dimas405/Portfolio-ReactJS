import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function Project (){
  const [listProjects] = useState ([
    {
      name : 'Project Web Weather-App',
      des : 'Weather App adalah aplikasi cuaca yang dirancang untuk memberikan informasi cuaca terkini dengan user interface yang sederhana dan intuitif. Aplikasi ini dibuat menggunakan HTML5, CSS3, dan JavaScript untuk mengambil dan menampilkan data cuaca dari API cuaca eksternal.',
      language : 'HTML5, CSS3, JavaScript, API',
      image1 : '/weather-app.png',
      image2 : '/globe.png'
    },
    {
      name : 'Project Web Coffee Shop',
      des : 'Coffee Shop Web adalah aplikasi berbasis web yang dirancang untuk memberikan informasi lengkap tentang menu kopi di sebuah kedai kopi. Aplikasi ini menggunakan HTML, CSS, dan JavaScript untuk menampilkan berbagai informasi tentang produk kopi yang tersedia, termasuk deskripsi, harga, dan gambar.',
      language : 'HTML, CSS, JavaScript',
      image1: '/coffeeshop.png',
      image2 : '/globe.png'
    }
  ])

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='project' id='project' ref={scrollTab}>
      <div className='title-project' ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        Welcome to my project page! Here, you will find various projects I have worked on. Let's create something great together!
      </div>
      <div className='list'>
        { listProjects.map((value, key) => (
          <div key={key} className='item' ref={(el) => el && divs.current.push(el)}>
            <div className='image'>
              <img src={value.image1} alt={value.name}/>
            </div>
            <div className='content'>
              <h3>{value.name}</h3>
              <div className='des'>{value.des}</div>
              <div className='language'>
              <div>
                <img src={value.image2} alt={value.name} className='image-globe'/>
              </div>
              <div>
                <h4>Language</h4>
                <div className='des-language'>{value.language}</div>
              </div>
            </div>
            </div>
           
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default Project