import {useState} from 'react';
import {Link} from "react-router-dom";
import { CodeIcon } from '../icons/CodeIcon';
import { DesignIcon } from '../icons/DesignIcon';
import { ApiIcon } from '../icons/ApiIcon';
import './Services.css';

type Props = {
  serviceType: string;
  buttonText: string;
  serviceBodyText?: string;
  title: string;
}

const ServiceItem = (props: Props) => {
  const {serviceType, buttonText, serviceBodyText, title} = props;
  const [isServiceHovered, setServiceHovered] = useState(false);

  const handleClickService = () => {
    if (serviceType === 'hypnotherapy') {
      return console.log('navigate to hypnotherapy route');
    } else if (serviceType === 'meditation') {
      return console.log('navigate to meditation route');
    } 
    return console.log('navigate to email route');
  }

  const serviceIcon = () => {
    if (serviceType === 'code') {
      return (
        <CodeIcon />
      );
    } else if (serviceType === 'design') {
      return (
        <DesignIcon />
      );
    } 
    return (
      <ApiIcon />
    ); 
  };

  const goToLink = () => {
    if (serviceType === 'code' || serviceType === 'design') {
      return '/projects';
    }
    return '/api-connections';
  }
  
  return (
    <>
      <Link className="service-link" to={goToLink()}>
        <div id={serviceType} className='service-panel-item'
          onMouseEnter={() => setServiceHovered(true)}
          onMouseLeave={() => setServiceHovered(false)}
          onClick={() => handleClickService()}
        >
          {serviceIcon()}
          <div id={serviceType} className="service-text">{title}</div>
          <div id={serviceType} className="service-body-text">{serviceBodyText ? serviceBodyText : ''}</div>
          {/* <div id={serviceType} className={isServiceHovered ? 'service-button-hovered' : 'service-button'}>{buttonText}</div> */}
        </div>
        </Link>
    </>
  )
}

export default ServiceItem;