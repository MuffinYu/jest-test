export const testFetch = (cb) => {
  fetch('http://localhost:3000').then((res) => {
    if(cb) cb(res)
    return res
  })
}