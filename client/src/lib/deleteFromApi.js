const deleteFromApi = async (url = "") => {
    try {
        const settings = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const fetchResponse = await fetch(url, settings)
        const dataFetched = await fetchResponse.json()
        return dataFetched
    } catch (e) {
        console.error(e)
    }
}

export default deleteFromApi
