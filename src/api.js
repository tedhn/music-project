import axios from "axios";

export const loginAccount = async ( code ) => {
  const resp = await axios.post( "https://s-clone-server.up.railway.app/login", {
    code,
  } );
};

export const getMyData = () => {
  return axios.get( "https://s-clone-server.up.railway.app/me" );
};

export const getPlaylist = async () => {
  const data = await axios.get( "https://s-clone-server.up.railway.app/playlist" );
  return data.data.items;
};

export const handleSearch = async ( searchData ) => {
  const data = await axios.post( "https://s-clone-server.up.railway.app/search", {
    q: searchData,
  } );
  return data.data;
};
export const getPlaylistData = async ( playlistId ) => {
  const data = await axios.post( "https://s-clone-server.up.railway.app/getPlaylistData", {
    playlistId,
  } );

  return data.data;
};

export const getPlaylistTracks = async ( playlistId, offset ) => {
  const data = await axios.post( "https://s-clone-server.up.railway.app/getPlaylistTracks", {
    playlistId,
    offset,
  } );
  return data.data.tracks;
};
//savedSongs
export const getSavedSongs = async ( offset ) => {
  const datas = await axios.post( "https://s-clone-server.up.railway.app/savedTracks", {
    offset,
  } );

  return datas.data;
};

export const createPlaylist = async ( playlistName, otherDeatils ) => {
  const { data } = await axios.post( "https://s-clone-server.up.railway.app/createPlaylist", {
    playlistName,
    otherDetails: {},
  } );

  return data.body
}

export const addToPlaylist = async ( playlistId, songId ) => {
  axios.post( 'https://s-clone-server.up.railway.app/addToPlaylist', { playlistId, song: songId } )



  return data.body;
};

export const savedTracks = async ( trackId ) => {
  const data = await axios.post( "https://s-clone-server.up.railway.app/addToMySavedTracks", {
    id: trackId,
  } );
  console.log( "savedata", data );
};

export const checkTracks = async ( trackId ) => {
  const data = await axios.post( "https://s-clone-server.up.railway.app/checkTracks", {
    idList: trackId,
  } );
  return data.data;
};

export const removeFromMySavedTracks = async ( trackId ) => {
  const data = await axios.post(
    "https://s-clone-server.up.railway.app/removeFromMySavedTracks",
    {
      id: trackId,
    }
  );
  console.log( data );
};
