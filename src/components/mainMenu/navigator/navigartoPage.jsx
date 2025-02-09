import "./navigatorPage.css"
import { HashLink } from 'react-router-hash-link';


export default function NavigatorPage ({setClicksearch}){
    const handleClick = () => {
        setClicksearch(false); 
      };
    return (
    <div className="navigatorPage">
        <ul className="navigatorMenu">
            <li className="about" onClick={handleClick} >
                <HashLink to='/#about'>О нас</HashLink>
            </li>    
            <li className="howThisWork" onClick={handleClick}>
                <HashLink to='/#how'> Как это работает</HashLink>
            </li>
            <li className="feedback" onClick={handleClick}>
                <HashLink to='/#feedbcak'>Отзывы</HashLink>
            </li>
            <li className="footer" onClick={handleClick}>
                <HashLink to='/#footer'>Контакты</HashLink>
            </li>       
        </ul>
     </div>
    )

}