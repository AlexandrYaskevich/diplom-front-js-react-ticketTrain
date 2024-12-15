import "./searchtrain.css"

export default function SearchTrain (){
    return (
    <form className="formSearchTrain">
        <div className="searchTrain">

            <div className="headword">
                 <span>Направление</span>
            </div>
            <div className="inputsway">
                <div className="inputfromway">
                    <input         
                    type="text"/>
                </div>
                <div className="inputwhereway">
                    <input 
                    type="text"/>
                </div>
            </div>

            <div className="headword">
                 <span>Дата</span>
            </div>
            <div className="inputsway">
                <div className="inputfromdata">
                    <input         
                    type="text"/>
                </div>
                <div className="inputwheredata">
                    <input 
                    type="text"/>
                </div>
            </div>

        </div>
    </form>
    )

}