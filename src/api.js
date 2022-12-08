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

export const handleSearch = async (searchData) => {
  const data = await axios.post("http://localhost:3001/search", {
    q: searchData,
  });
  return data.data;
};
export const getPlaylistData = async (playlistId) => {
  const data = await axios.post("http://localhost:3001/getPlaylistData", {
    playlistId,
  });

  return data.data;
};

export const getPlaylistTracks = async (playlistId) => {
  const data = await axios.post("http://localhost:3001/getPlaylistTracks", {
    playlistId,
    offset: 0,
  });
  return data.data.tracks;
};
//savedSongs
export const getSavedSongs = async () => {
  const datas = await axios.post("http://localhost:3001/savedTracks", {
    offset: 0,
  });

  return datas.data;
};

export const createPlaylist = async (playlistName, otherDeatils) => {
  const { data } = await axios.post("http://localhost:3001/createPlaylist", {
    playlistName,
    otherDetails: {},
  });

  return data.body;
};

export const savedTracks = async (trackId) => {
  const data = await axios.post("http://localhost:3001/addToMySavedTracks", {
    id: trackId,
  });
  console.log("savedata", data);
};

export const checkTracks = async (trackId) => {
  const data = await axios.post("http://localhost:3001/checkTracks", {
    idList: trackId,
  });
  return data.data;
};

export const removeFromMySavedTracks = async (trackId) => {
  const data = await axios.post(
    "http://localhost:3001/removeFromMySavedTracks",
    {
      id: trackId,
    }
  );
  console.log(data);
};
