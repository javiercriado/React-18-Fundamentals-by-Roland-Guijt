import { logo } from "./banner.module.css";
import { useContext } from 'react';
import { navigationContext } from './app';
import navValues from '@/helpers/navValues';

const Banner = ( {children} ) => {
  const {navigate} = useContext(navigationContext);
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img 
          src='./propiedades-logo.png' alt='logo-propiedades' 
          className={logo} 
          onClick={ () => navigate(navValues.home) }/>
      </div>
      <div className="col-7 mt-5">
        {children}
      </div>
    </header>
  )
};

export default Banner;