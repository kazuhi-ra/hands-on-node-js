const fetch = require('node-fetch')

const usersId = ['kazuhi-ra', 'hitode909', 'pastak']

const fetchGithubUsersInfo = async (usersId) => {
  try {
    const promises = usersId.map(userId =>
      fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    )
    const responses = await Promise.all(promises)
    const transformResponses = responses.map(res => res.json())

    // return Promise.all(transformResponses)
    return Promise.all(transformResponses)
  } catch (e) {
    console.log(e)
  }
}

fetchGithubUsersInfo(usersId).then(res => console.log(res))
