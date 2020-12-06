const fetch = require('node-fetch')

const userIds = ['kazuhi-ra', 'hitode909', 'pastak']

const yo = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(userIds[2])}`
    )
    const userInfo = await response.json()

    // console.log(response)
    console.log(userInfo)
  } catch (e) {
    console.log(e)
  }
}

yo()
