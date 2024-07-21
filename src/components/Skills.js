import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'HTML5',
      des: 'Saya memiliki pemahaman yang kuat tentang elemen-elemen HTML, termasuk penggunaan tag, atribut, dan struktur dokumen. Saya mampu membuat halaman web yang terstruktur dengan baik menggunakan elemen-elemen HTML5',
      image: '/html.png'
    },
    {
      name: 'CSS3',
      des: 'Saya mampu membuat tampilan web yang menarik dan interaktif dengan CSS, termasuk mengatur tata letak elemen, mengatur gaya warna, dan mengatur tata letak elemen secara responsif.',
      image: '/css-3.png'
    },
    {
      name: 'JavaScript',
      des: 'Saya mampu membuat aplikasi interaktif dan dinamis dengan JavaScript, termasuk membuat animasi, memperbarui tata letak elemen, dan memproses data.',
      image: '/java-script.png'
    },
    {
      name: 'Bootstrap 5',
      des: 'Saya mampu membuat tampilan web yang responsif dengan Bootstrap, termasuk mengatur tata letak elemen, mengatur gaya warna, dan mengatur tata letak elemen secara responsif.',
      image: '/bootstrap.png'
    },
    {
      name: 'React JS',
      des: 'Saya mampu membuat tampilan web yang interaktif dan dinamis dengan React, termasuk membuat komponen, memperbarui tata letak elemen, dan memproses data.',
      image: '/atom.png'
    },
    {
      name: 'Adobe Illustrator',
      des: 'Saya mampu membuat desain grafis yang interaktif dan dinamis dengan Adobe Illustrator, termasuk membuat desain web, membuat desain grafis.',
      image: '/illustrator.png'
    }
  ]);

  const skillRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className='skills' id='skills'>
      <div className='title'>
        This is my Skills
      </div>
      <div className='desc-skills'>
        Hi, I am a Front-End Developer. I am skilled in HTML, CSS, and JavaScript, with expertise in building responsive and interactive web interfaces using frameworks like React. 
      </div>
      <div className='list-skills'>
        {listSkills.map((value, key) => (
          <div className='item-skills fade-out' key={key} ref={addToRefs}>
            <img src={value.image} alt={value.name} />
            <h3>{value.name}</h3>
            <div className='des'>
              {value.des}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
