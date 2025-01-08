import "./navigatorPage.css"
import { HashLink } from 'react-router-hash-link';


export default function NavigatorPage (){
    return (
    <div className="navigatorPage">
        <ul className="navigatorMenu">
            <li className="about">
                <HashLink to='/#about'>О нас</HashLink>
            </li>    
            <li className="howThisWork">
            <HashLink to='/#how'> Как это работает</HashLink>
            </li>
            <li className="feedback">
            <HashLink to='/#feedbcak'>Отзывы</HashLink>
            </li>
            <li className="contacts">
            <HashLink to='/#contacts'>Контакты</HashLink>
            </li>       
        </ul>
     </div>
    )

}