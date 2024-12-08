const buildMatrix = (data) => {
    return data.map(row => row.split(''))
}

export { buildMatrix }