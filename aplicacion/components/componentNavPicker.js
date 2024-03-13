import navValues from "@/helpers/navValues";
import HouseList from "./houseList";
import House from "./house";

const ComponentNavPicker = ({ currentNavLocation }) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <HouseList />;
            break;
        case navValues.house:
            return <House />;
            break;
        default:
            return (
                <h3>No se ha encontrado un componente 
                    para el valor de navegación {currentNavLocation}
                </h3>
            );
            break;
    }
};

export default ComponentNavPicker;