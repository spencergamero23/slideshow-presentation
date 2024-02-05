import React, { useEffect } from 'react';
import './App.css';
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
const App = () => {

  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  // Next/previous Controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div className="App">
      <div className='SlideshowContainer'>

        <div className='mySlides fade'>
          <div className='numbertext'>1 / 8</div>
          <img src= {img1} style={{ width: '100%' }} />
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>2 / 8</div>
          <img src= {img2} style={{ width: '100%' }} />
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>3 / 8</div>
          <img src={img3} style={{ width: '100%' }} />
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>4 / 8</div>
          <img src={img4} style={{ width: '100%' }} />
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>5 / 8</div>
          <img src={img5} style={{ width: '100%' }} />
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>6 / 8</div>
          <img src={img6} style={{ width: '100%' }} />
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>7 / 8</div>
          <img src={img7} style={{ width: '100%' }} />
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>8 / 8</div>
          <img src={img8} style={{ width: '100%' }} />
        </div>



        <a className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className='next' onClick={() => plusSlides(1)}>&#10095;</a>

      </div>

      <div style={{ textAlign: 'center' }}>
        <span className='dot' onClick={() => currentSlide(1)}></span>
        <span className='dot' onClick={() => currentSlide(2)}></span>
        <span className='dot' onClick={() => currentSlide(3)}></span>
        <span className='dot' onClick={() => currentSlide(4)}></span>
        <span className='dot' onClick={() => currentSlide(5)}></span>
        <span className='dot' onClick={() => currentSlide(6)}></span>
        <span className='dot' onClick={() => currentSlide(7)}></span>
        <span className='dot' onClick={() => currentSlide(8)}></span>
        
      </div>
    </div>
  );
}

export default App;