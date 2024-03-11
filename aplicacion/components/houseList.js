import HouseRow from './houseRow';
import useHouses from "../hooks/useHouses";
import LoadingIndicator from './loadingIndicator';
import loadingStatus from '../helpers/loadingStatus';

const HouseList = ({ selectHouse }) => {
    const { houses, setHouses, loadingState } = useHouses();
    
    if (loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />;

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "Ribera Norte 777, San Bartolo, Lima",
                country: "Peru",
                price: 750000,
            },
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Propiedades en venta
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Direccion</th>
                        <th>Pais</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Agregar
            </button>
        </>
    )
};

export default HouseList;