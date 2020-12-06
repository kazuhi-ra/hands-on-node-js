const fetch = require('node-fetch')

const userIds = ['kazuhi-ra', 'hitode909', 'pasta-k']

const yo = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(userIds[2])}`
    )

    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

yo()
