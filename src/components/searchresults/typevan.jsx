import "./typevan.css"

const Typevan = ({ selectedTicket }) => {
    const hadleChengeActive = ()=> {
    console.log(selectedTicket);
    }
    return(
    <div>

        <div className="choiseVagon">
                <p className="textLabel">Тип вагона</p>
                <div className="type">
                {selectedTicket.departure.have_first_class && (
                <div className="class">
                    <label className="lux">
                        <input type="checkbox" className="toggle" />
                        <div className="iconLux"></div>
                    </label>    
                    <div className="nameTextLux">Люкс</div>
                </div> 
                )}
                {selectedTicket.departure.have_third_class  && (
                <div className="class">
                    <label className="plackart">
                        <input type="checkbox" className="toggle" />
                        <div className="iconPlackart"></div>    
                    </label>
                    <div className="nameText">Плацкарт</div>
                </div> 
                )}
                {selectedTicket.departure.have_fourth_class && (
                <div className="class">
                    <label className="seat">
                        <input type="checkbox" className="toggle" />
                        <div className="iconSeat"></div>    
                    </label>
                    <div className="nameText">Сидячий</div>
                </div> 
                )}
                {selectedTicket.departure.have_second_class && (
                <div className="class">
                    <label className="cupe">
                        <input type="checkbox" className="toggle" />
                        <div className="iconCupe"></div>    
                    </label>
                    <div className="nameTextCupe">Купе</div>
                </div> 
                )}
            </div>
        </div>

        <div className="seatsinvan">
            <div className="numbervan">
                <p className="labelVan">Вагоны</p>
                <button onClick={hadleChengeActive} className="numberclass">{selectedTicket.departure._id}</button>
                <p className="labelInfo">Нумерация вагонов начинается с головы поезда</p>
            </div>

        </div>

    </div>
    );
}

export default Typevan;