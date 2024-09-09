import ServiceItem from './ServiceItem';
import './Services.css';
import '../../App.scss';

const Services = () => {  
  const serviceItems = [
    {
      serviceType: "code",
      title: 'software engineering',
      serviceBodyText: "~6 years experience and proficiency in React, typescript, and redux",
      buttonText: "See Engineering",
    },
    {
      serviceType: "design",
      title: "ux and visual design",
      serviceBodyText: "~17 years experience",
      buttonText: "See Designs",
    },
    {
      serviceType: "sketch",
      title: 'api fun',
      serviceBodyText: "Showcasing some public APIs",
      buttonText: "See APIs",
    },
  ];
  return (
    <>
      <div className="service-panel-section">
        <div className="service-panel-container">
          {serviceItems.map((s, index) => <ServiceItem serviceType={s.serviceType} buttonText={s.buttonText} serviceBodyText={s.serviceBodyText} title={s.title} key={index} />)}
        </div>
        <span className="attribution">2024 Raays Engineering. Image by kjpargeter</span>
      </div>
    </>
  )
}

export default Services;