
const BASE_URL = "https://hacker-news.firebaseio.com/v0"

export async function fetchPath(path) {
    const response = await fetch(`${BASE_URL}/${path}.json`)
    return await response.json()
}

function limitTo(list, total) {
    return (list || []).filter((x, i) => i < total)
}


export async function fetchTopStoriesIds(maxItems = 10) {
    const topStories = await fetchPath("topstories")
    console.log({ topStories })
    return limitTo(topStories, maxItems)
}

export async function fetchTopStories(maxItems = 10) {
    const topStories = await fetchTopStoriesIds(maxItems)
    return await Promise.all(topStories.map(fetchItem))
}

export async function fetchItem(itemId) {
    return await fetchPath(`item/${itemId}`)
}


export async function fetchItemWithComments(itemId) {
    const item = await fetchItem(itemId)
    const kids = item.kids || []
    const kidItems = await Promise.all(kids.map(fetchItem))
    const comments = kidItems.filter(x => x.type == "comment")
        .filter(x => !x.deleted)
        .map(x => ({ ...x, totalReplies: x.kids?.length || 0 }))
    return { item, comments }
}