const url = "http://localhost:8080/api"

export const getFollowingsByFollower = (uid) => {
  fetch(`${url}/follower/${uid}/followings`)
  .then(response => response.json())
}

export const getFollowingById = (fid) => {
  fetch(`${url}/followings/${fid}`)
  .then(response => response.json())
}

export const getAllRecentFollowing = (uid) => {
  fetch(`${url}/users/${uid}/recentfollowers`)
  .then(response => response.json())
}

export const deleteFollowing = (fid) => {
  fetch(`${url}/followings/${fid}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

export const addFollowing = (newFollowing) => {
  fetch(`${url}/followings`, {
    method: 'POST',
    body: JSON.stringify(newFollowing),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

export default {
  getFollowingById,
  getAllRecentFollowing,
  deleteFollowing,
  addFollowing,
  getFollowingsByFollower
}
