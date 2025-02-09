import "./lineprogres.css"

export const ProgressLine = () => {

 
  return (
    <div className='progress__line'>
      <div className={'steps__start '}></div>

      <div className={'line__step-one ' }>
        <div className={'step__number '}>
          <p>1</p>
        </div>
        <div className={'step__text '}>Билеты</div>
    
      </div>

       <div class="triangle-right_start"></div> 

      <div className={'line__step-two '}>   
        <div className={'step__number '}>
          <p>2</p>
        </div>
        <div className={'step__text '}>Пассажиры</div>
      </div>

      <div class="triangle-right"></div> 
      <div class="arrow arrow-right"></div>  

      <div className={'line__step-three '}>
        <div className={'step__number '}>
          <p>3</p>
        </div>
        <div className={'step__text '}>Оплата</div>
      </div>

      <div class="triangle-right"></div> 

      <div className={'line__step-four '}>
      
        <div className={'step__number '}>
          <p>4</p>
        </div>
        <div className={'step__text '}>Проверка</div>
      </div>

      <div className={'steps__end '}></div>
    </div>
  );
};