const getFetch = (token) => {
    const options = token ? {
        headers: {
            Authorization : `Bearer ${token}`
        }
    } : null
    return async (url, search) => {
        if (url) {
            const searchString = search ? new URLSearchParams(search) : '';
            const response = await fetch(`${url}?${searchString}`, options);
            return response.json();
        }
        return null;
    }

}
const fetchWithAuth = getFetch(null);

export { fetchWithAuth };
export default getFetch;



