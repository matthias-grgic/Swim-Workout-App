const postToAPI = async (url = "", data = {}) => {
    try {
        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        const fetchResponse = await fetch(url, settings)
        const dataFetched = await fetchResponse.json()
        return dataFetched
    } catch (e) {
        console.error(e)
    }
}

export default postToAPI
