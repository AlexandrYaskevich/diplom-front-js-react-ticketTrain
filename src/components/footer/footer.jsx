import "./footer.css"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscribe } from "../../redux/slice/subscribeslice";
import { HashLink } from 'react-router-hash-link';


export default function Footer (){
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const {loading, success} = useSelector((state) => state.subscribe);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   };

    useEffect(() => {
        if(success) {
           setShowSuccessMessage(true)
            setTimeout(() => {
              setShowSuccessMessage(false)
            }, 3000);
        }
   }, [success])

 

   const handleSubscribe = () => {
    if (!validateEmail(email)) {
         setShowErrorMessage(true);
       setTimeout(() => {
          setShowErrorMessage(false);
        }, 3000);
     return;
   }

        if(email.trim()){
            dispatch(fetchSubscribe(email));
         setEmail('')
        }
     };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    
    return ( 
    <div id="footer" className="footer">
        <div  className="footerblock">
            <div className="contacts">
                <h2 className="contactstitle">Свяжитесь с нами</h2>
                <div className="contactslist">
                    <div className="telephone">
                        <a className="contactsphone" href="tel:88000000000">8 (800) 000 00 00</a>
                    </div>
                    <div className="mail">
                        <a  className="contactsmail" href="mailto:inbox@mail.ru">inbox@mail.ru</a>
                    </div>
                    <div className="skype">
                        <a className="contactsskype" target="_blank" href="tu.train.tickets">tu.train.tickets</a>
                    </div>
                    <div className="adress">
                        <a className="contactsmap" href="https://www.google.com/maps?ll=55.704329006078645, 37.62439733957285" target="_blank">г. Москва<br /> ул. Московская 27-35 555 555</a>
                    </div>
                </div>
            </div>

            <div className="subscribe">
                <h2 className="subscribetitle">Подписка</h2>
                <form className='subscribeform'>
                <h4 className='subscribeformtitle'>Будьте в курсе событий</h4>
                <input
                className='subscribeforminput'
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={handleEmailChange}
                />
               <button
                 className='subscribebtn'
                 type="button"
                  onClick={handleSubscribe}
                 disabled={loading}
                >
                  {loading ? "Отправка..." : "Отправить"}
                </button>
                 {showErrorMessage && <p className="messageerror">Пожалуйста, введите корректный email!!!</p>}
                 {showSuccessMessage && <p className="message">Спасибо за подписку!</p>}
            </form>
                <div className='subscribelinks'>
                    <h2 className='subscribelinkstitle'>Подписывайтесь на нас</h2>
                    <ul className='subscribelinkslist'>
                    <li className="subscribeyoutube">
                        <a className='subscribelinkyoutube' target="_blank" href="#0">
                        <span className='subscribelogotext'>youtube</span>
                        </a>
                    </li>
                    <li className="listsubscribeimage">
                        <a className='subscribelinklinkedin' target="_blank" href="#0">
                        <span className='subscribelogotext'>linkedin</span>
                        </a>
                    </li>
                    <li className="listsubscribeimage">
                        <a className='subscribelinkgoogle' target="_blank" href="#0">
                        <span className='subscribelogotext'>googleplus</span>
                        </a>
                    </li>
                    <li  className="listsubscribeimage">
                        <a className='subscribelinkfacebook' target="_blank" href="#0">
                        <span className='subscribelogotext'>facebook</span>
                        </a>
                    </li>
                    <li  className="listsubscribeimage">
                        <a className='subscribelinktwitter' target="_blank" href="#0">
                        <span className='subscribelogotext'>twitter</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
        </div>
                <div className='footerline'>
                    <div className='footerlogo'>
                        <h3 className='footerlogotext'>Лого</h3>
                    </div>
                    <HashLink to='/#main' className='footerup'></HashLink>
                    <div className='footerdate'>
                        <p className='footerdatetext'>2025 web</p>
                    </div>
                </div>
                
     </div>
    )
}