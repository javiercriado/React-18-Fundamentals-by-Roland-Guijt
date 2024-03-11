import { logo } from "./banner.module.css";

const Banner = ( props ) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src='./propiedades-logo.png' alt='logo-propiedades' 
          className={logo} />
      </div>
      <div className="col-7 mt-5">
        {props.headerText}
      </div>
    </header>
  )
};

export default Banner;