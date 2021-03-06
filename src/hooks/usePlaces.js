import { useEffect, useState } from 'react';

const usePlaces = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://dark-vault-49762.herokuapp.com/places')
            .then(res=> res.json())
            .then(data=> setPlaces(data))
    }, [])

    return [places, setPlaces];
};

export default usePlaces;