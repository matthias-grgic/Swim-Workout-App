const FetchFromApi = async (url = '', useState = '') => {
  try {
    const response = await fetch(url)
    const api = await response.json()
    const exerciseList = api.map((item) => ({
      id: item._id,
      name: item.name,
      type: item.type,
      video: item.video,
      definition: item.definition,
      length: item.length,
      equipment: item.equipment,
    }))

    return useState(exerciseList)
  } catch (e) {
    console.error(e)
  }
}

export default FetchFromApi
