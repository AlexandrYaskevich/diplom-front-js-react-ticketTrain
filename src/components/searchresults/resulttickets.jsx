import { useSearchParams } from 'react-router-dom';

const Tickets = () => {
    const [searchParams] = useSearchParams();
    const fromCityId = searchParams.get('from');
    const toCityId = searchParams.get('to');


    return(
        <div>
            <div>{fromCityId}</div>
            <div>{toCityId}</div>
        </div>
    );

}

export default Tickets;