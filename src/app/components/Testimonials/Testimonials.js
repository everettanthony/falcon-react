import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.scss';

function Testimonials() {
  return (
    <Carousel id="testimonials">
      <Carousel.Item>
        <Carousel.Caption>
          <div className="carousel-caption-inner">
            "Falcon Documents Solutions has been our 'go to' for process service since the 
            first time we used them. David and his team are always available and willing to 
            help with whatever we ask, not only in serving documents, but also in setting hearings, 
            presenting Orders to the Court and copy jobs. They are always prompt and courteous; 
            Our clients even love working with them. Regardless of the circumstances, Falcon has 
            a 100 percent success rate in effectuating service. I highly recommend Falcon Document 
            Solutions for all of your service needs; we wouldn't use anyone else."
            <div className="carousel-caption-author">— Kelly Turner, Law Office of Kyle Whitaker</div>
          </div>        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="carousel-caption-inner">
            "We really appreciate Falcons tremendous urgency and accuracy on delivering large format 
            prints as it is crucial to our company's success on hitting major deadlines. They are 
            always a quick phone call away and respond immediately when they have received the print 
            request and are working on it. This provides us with a peace of mind that it is in process 
            and in good hands."
            <div className="carousel-caption-author">— Ryan Hill, P.E., CFM, Shield Engineering Group, PLLC</div>
          </div>         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="carousel-caption-inner">
            "I have worked with David and Gerard for many years and I have found Falcon Document Solutions 
            to be a great company to handle my e-Discovery issues and manage document productions. They are 
            very responsive, do great work, and always come through on a tight deadline. Their QC is reliable, 
            pricing is straightforward, and they consistently keep me apprised of the status of my project and 
            any problems they may anticipate. We're also very happy with InControl to review and produce documents 
            and have found it to be user friendly and reliable."
            <div className="carousel-caption-author">— Alyson Fillers, Winstead</div>
          </div>      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="carousel-caption-inner">
            "Falcon has been an invaluable resource for us in the preparation of trial exhibit binders and large copy 
            notebook projects. I have requested large, complicated jobs on short notice and have always received prompt, 
            quality, friendly service in return. We will continue to rely on Falcon for our copy service and process 
            service needs. Thank you for doing such a wonderful job for us!"
            <div className="carousel-caption-author">— Melissa Matej, Kelly Hart | Attorneys at Law</div>
          </div>     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;