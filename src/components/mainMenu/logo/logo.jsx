import "./logo.css";
import { HashLink } from 'react-router-hash-link';

export default function Logo({setClicksearch}) {
  const handleClick = () => {
    setClicksearch(false); 
  };
    return (
      <div className="logo">
        <div className="logowords" onClick={handleClick}>
          <HashLink to='/'>Лого</HashLink>
        </div>
      </div>
    )
}