export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
    return async dispatch => {

        // logic to fetch houses from API
        const result = await fetch('http://192.168.52.102:5000/api/houses');

        const resultData = await result.json();

        dispatch({
            type: FETCH_HOUSES,
            payload: resultData
        });
    }
}

export const createHouses = ({title,image,homeType,price,yearBuilt,address,description}) => {
    return async dispatch => {
       const response = fetch('http://192.168.52.102:5000/api/houses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                image,
                homeType,
                price,
                yearBuilt,
                address,
                description
            })
        })
        const responseData = await response.json()
        dispatch({
            type: CREATE_HOUSES,
            payload: responseData
        })
    }

}