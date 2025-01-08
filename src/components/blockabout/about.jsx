import "./about.css";

export default function BlockAbout (){ 
        return (
    
        <div id="about" className="blockabout">

            <div className="header">
                <h1>О НАС</h1>
            </div>

            <div className="contentabout">  
              
                <div className="contenttextabout">  
                    <ul className="blockinform">
                        <li className="inform">Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
                        все больше людей заказывают жд билеты через интернет.</li>
                        <li className="inform">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
                        Мы расскажем о преимуществах заказа через интернет.</li>
                        <li style={{fontWeight: "bold"}} className="inform">Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                        Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</li>
                    </ul>

                </div>

            </div>
        </div>
        )
}
