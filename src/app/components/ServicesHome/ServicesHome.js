import { Link } from 'react-router-dom';
import IconDiscovery from '../../assets/img/icons/icon-discovery.svg'
import IconImaging from '../../assets/img/icons/icon-imaging.svg';
import IconPrinting from '../../assets/img/icons/icon-printing.svg';
import IconProcess from '../../assets/img/icons/icon-process.svg';
import './ServicesHome.scss';

function ServicesHome() {
  return (
    <div className="services">
      <div className="services-item">
        <Link to="/services/document-imaging" className="services-icon">
          <img src={IconImaging} alt="Imaging Fort Worth" width="100" height="101" />
        </Link>
        <h2 className="services-hdr">Imaging</h2>
        <div className="services-body">
          Do you have paper ﬁles you prefer to work with and store digitally? 
          Our document imaging services can take your paper ﬁles and convert 
          them into keyword searchable electronic ﬁles to give you quick access 
          and eliminate the need to store paper ﬁles. Converting ﬁles to an electronic 
          format not only saves space but also allows you to ﬁnd information faster 
          and easier.
        </div>
      </div>
      <div className="services-item">
        <Link to="/services/printing-copying" className="services-icon">
          <img src={IconPrinting} alt="Printing Services Fort Worth" width="120" height="106" />
        </Link>
        <h2 className="services-hdr">Printing</h2>
        <div className="services-body">
          Do you have electronic ﬁles you need printed? Our quality commercial printing 
          services will turn your job around quickly. We have extensive experience working 
          with architects and construction contractors on large format printing projects 
          as well as scanning and digital imaging jobs to provide you with the quality and 
          exceptional service you've come to expect from Falcon.
        </div>
      </div>
      <div className="services-item">
        <Link to="/services/e-discovery" className="services-icon">
          <img src={IconDiscovery} alt="E-Discovery Fort Worth" width="100" height="113" />
        </Link>
        <h2 className="services-hdr">E-Discovery</h2>
        <div className="services-body">
          E-Discovery is the process of converting different ﬁle types into one easy-to-use ﬁle type: 
          Word documents, PDFs, Power Point, Excel spreadsheets, emails, etc. which can be opened with 
          one click in one program. Our e-discovery process is designed to ﬁnd important information fast. 
          It streamlines and organizes the evidence needed for your civil or criminal case so you know 
          what has been reviewed and what hasn't. Ninety-ﬁve percent of cases settle before trial. 
          Falcon Document Solutions helps you build the production to help you settle your case.
        </div>
      </div>
      <div className="services-item">
        <Link to="/services/process-service" className="services-icon">
          <img src={IconProcess} alt="Process Services Fort Worth" width="100" height="123" />
        </Link>
        <h2 className="services-hdr">Process Services</h2>
        <div className="services-body">
          We provide quick and reliable process service to the Fort Worth, Dallas and surrounding areas. 
          One of the things that sets our process servers apart from others is our focus on making quality 
          and logical attempts. We don't go to people's homes if they are at work. Once we serve someone, 
          we immediately communicate it to our clients and return paperwork promptly resulting in very 
          happy customers.
        </div>
      </div>
    </div>
  );
}

export default ServicesHome;