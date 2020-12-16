const url = "http://localhost:8080/api"
const heroku = "https://planme-al.herokuapp.com/api"

// const url = heroku;

export const getFavoritesByFollowerId = (uid) => {
  return fetch(`${url}/followers/${uid}/favorites`)
  .then(response => response.json())
}

export const getFavoriteById = (fid) => {
  return fetch(`${url}/favorites/${fid}`)
  .then(response => response.json())
}

export const getAllRecentFavorites = (uid) => {
  return fetch(`${url}/followers/${uid}/recentfavorites`)
  .then(response => response.json())
}

export const deleteFavorite = (fid) => {
  return fetch(`${url}/favorites/${fid}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

export const addFavorite = (favorite) => {
  return fetch(`${url}/favorites`, {
    method: 'POST',
    body: JSON.stringify(favorite),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

export default {
  getFavoriteById,
  getFavoritesByFollowerId,
  getAllRecentFavorites,
  deleteFavorite,
  addFavorite
}
