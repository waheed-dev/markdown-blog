export const sortByDate = (a, b) => {
    return new Date(b.postData.date) - new Date(a.postData.date)
}