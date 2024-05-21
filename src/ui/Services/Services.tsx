import ServiceItem from './ServiceItem';
import './Services.css';
import '../../App.scss';

const Services = () => {  
  const serviceItems = [
    {
      serviceType: "code",
      title: 'Software Engineering',
      serviceBodyText: "Years of experience and proficiency in React, typescript, and redux",
      buttonText: "See Engineering",
    },
    {
      serviceType: "design",
      title: 'UX and Visual Design',
      serviceBodyText: "Design work...",
      buttonText: "See Designs",
    },
    {
      serviceType: "sketch",
      title: 'Sketches',
      serviceBodyText: "Some sketches...",
      buttonText: "See Sketches",
    },
  ];
  return (
    <>
      <div className="service-panel-section">
        <div className="service-panel-container">
          {serviceItems.map(s => <ServiceItem serviceType={s.serviceType} buttonText={s.buttonText} serviceBodyText={s.serviceBodyText} title={s.title} />)}
        </div>
      </div>
    </>
  )
}

export default Services;