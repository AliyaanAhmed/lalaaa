import myimage from '../img/festive2.png'
import './About.css'
import img1 from '../img/fess.jpg'

function About() {
  return (
  
    <div className="container-about">
      <section className="about-section">
      
        <div className="container">
          <div className="row">
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
              <div className="inner-column wow fadeInRight">
                <div className="author-desc">
                  <h2>THE FESTIVE SOLUTIONS</h2>
                  <span>IDEAS DELIVERED</span>
                </div>
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img title="THE FESTIVE SOLUTIONS" src={img1} alt="" />
                  </a>
                </figure>
              </div>
            </div>
        


            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-1">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>ABOUT US</h2>
                </div>
                <div className="text">
                  I am Rahul Yaduvanshi works at Css3 Transition since last 3 years. We are here to provide touch notch
                  solution for your website or web application that helps you to make your website look attractive &
                  efficient in handling by creating useful plugins that you need.
                </div>
                <div className="text">
                  We are here to serve you next-level tutorial that is currently in trend to match you with your expertise.
                  Css3 transition is a learning website where you can find many good quality content related to web
                  development and tutorials about plugins. Here we are using HTML, HTML5, CSS, CSS3, jQuery & JavaScript
                  along with inspirational UI design layout by professionals by using Photoshop and Adobe Illustrator.
                </div>
                <div className="btn-box">

                  <div class="bcontainer">
                    <button class="ubtn btn1">Contact Us</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;