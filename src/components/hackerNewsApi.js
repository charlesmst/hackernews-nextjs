
const BASE_URL = "https://hacker-news.firebaseio.com/v0"

export async function fetchPath(path) {
    const response = await fetch(`${BASE_URL}/${path}.json`)
    return await response.json()
}

function limitTo(list, total) {
    return list.filter((x, i) => i < total)
}

export async function fetchTopStories(maxItems = 10) {
    const topStories = await fetchPath("topstories")
    return await Promise.all(limitTo(topStories, maxItems).map(fetchItem))
}

export async function fetchItem(item) {
    return await fetchPath(`item/${item}`)
}