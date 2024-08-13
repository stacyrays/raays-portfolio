import { useEffect, useState } from "react";
import GridItem from './GridItem';
import { fetchRandomDogs, fetchDog } from "../../api/dogApi";
import './Grid.css';
import '../../App.scss';

type DogBaseItem = {
  id: number,
  url: string,
  width: number,
  height: number,
};

type DogItem = {
  id: string,
  url: string,
  breeds: [{height: object, id: number, life_span: string, name: string, reference_image_id: string, weight: object}],
  width: number,
  height: number,
};

const Grid = () => {  
  const [dogList, setDogList] = useState<Array<DogBaseItem>>([]);
  const [dogInfoList, setDogInfoList] = useState<Array<DogItem>>([]);

  const staticIds = ['rkVlblcEQ', 'BkMQll94X', 'keAvlc5K', 'tUDJdHuO7', 'bhF8zbrRq', 'S1KMGg5Vm', 'lq5gBjy4s']

  useEffect(() => {
    (async () => {
        const response = await fetchRandomDogs();
        setDogList(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
        // const responses = await Promise.all(dogList?.map(dog => fetchDog(dog.id)));
        // setDogInfoList(responses);
        const staticResponses = await Promise.all(staticIds?.map(id => fetchDog(id)));
        setDogInfoList(staticResponses.filter(Boolean));

    })();
  }, [dogList[0]]);

  return (
    <>
      <div className="grid-panel-section">
        <div className="grid-panel-container">
          {dogInfoList ? dogInfoList.map(d => <GridItem id={d.id} dogBreeds={d.breeds} dogPic={d.url} height={d.height} width={d.width} />) : null}
        </div>
      </div>
    </>
  )
}

export default Grid;