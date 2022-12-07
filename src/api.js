import axios from "axios";

export const loginAccount = async (code) => {
  const resp = await axios.post("http://localhost:3001/login", {
    code,
  });
};

export const getMyData = () => {
  return axios.get("http://localhost:3001/me");
};

export const getPlaylist = async () => {
  const data = await axios.get("http://localhost:3001/playlist");
  return data.data.items;
};
export const getPlaylistData = async (playlistId) => {
  const data = await axios.post("http://localhost:3001/getPlaylistData", {
    playlistId
  });
 return data
};

export const getPlaylistTracks = async (playlistId) => {
  const data = await axios.post("http://localhost:3001/getPlaylistTracks", {
    playlistId,
    offset: 0,
  });
  return data.data.tracks;
};
