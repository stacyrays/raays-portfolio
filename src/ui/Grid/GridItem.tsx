import {useState} from 'react';
import {Link} from "react-router-dom";
import './Grid.css';

type Props = {
  id: string,
  dogBreeds: [{height: object, id: number, life_span: string, name: string, reference_image_id: string, weight: object}],
  dogPic: string,
  height: number,
  width: number,
}

const GridItem = (props: Props) => {
  const {id, dogBreeds, dogPic, height, width} = props;
  const [isServiceHovered, setServiceHovered] = useState(false);

  const breedCapitalized = () => {
    if (dogBreeds?.length && dogBreeds[0].name) {
      return dogBreeds[0].name;
    }
    return 'Unknown';
  };

  const goToLink = () => {
    return dogPic;
  }
  
  return (
    <>
      <Link className="grid-link" to={goToLink()} target="_blank">
        <div id={id} className='grid-panel-item'
          onMouseEnter={() => setServiceHovered(true)}
          onMouseLeave={() => setServiceHovered(false)}
        > 
          <div className='grid-image'><img src={dogPic} height={height} width={width} /></div>
          <div id={id} className="service-text">{breedCapitalized()}</div>
          <div id={id} className="grid-body-text">(click to see full image)</div>
        </div>
        </Link>
    </>
  )
}

export default GridItem;