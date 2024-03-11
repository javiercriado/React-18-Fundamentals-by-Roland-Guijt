import { useState } from 'react';
import Banner from './banner';
import HouseList from './houseList';
import House from './house';

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();
  return (
    <>
      <Banner>
        <div>Encontrando tu propiedad ideal.</div>
      </Banner>
      { selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouse} /> 
      )}
    </>
  );
};

export default App;