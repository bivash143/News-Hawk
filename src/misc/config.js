const API_BASE_URL = '127.0.0.1:5000'

export const apiGet = async (data) => {

    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const result = await fetch(`${API_BASE_URL}/predict`, option)
        .then((response) => response.json())

    return result;

}