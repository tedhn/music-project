import axios from "axios";

// const url = "http://localhost:3001/"
const url = "https://s-clone-server.up.railway.app/"

export const loginAccount = async ( code ) => {
  console.log( code )
  const resp = await axios.post( `${ url }login`, {
    code,
  } );

  console.log( resp )
};

export const getMyData = () => {
  return axios.get( `${ url }me` );
};

export const getPlaylist = async () => {
  const data = await axios.get( `${ url }playlist` );
  return data.data.items;
};

export const handleSearch = async ( searchData ) => {
  const data = await axios.post( `${ url }search`, {
    q: searchData,
  } );
  return data.data;
};
export const getPlaylistData = async ( playlistId ) => {
  const data = await axios.post( `${ url }getPlaylistData`, {
    playlistId,
  } );

  return data.data;
};

export const getPlaylistTracks = async ( playlistId, offset ) => {
  const data = await axios.post( `${ url }getPlaylistTracks`, {
    playlistId,
    offset,
  } );
  return data.data.tracks;
};
//savedSongs
export const getSavedSongs = async ( offset ) => {
  const datas = await axios.post( `${ url }savedTracks`, {
    offset,
  } );

  return datas.data;
};

export const createPlaylist = async ( playlistName, otherDeatils ) => {
  const { data } = await axios.post( `${ url }createPlaylist`, {
    playlistName,
    otherDetails: {},
  } );

  return data.body
}

export const addToPlaylist = async ( playlistId, songId ) => {
  const { data } = await axios.post( `${ url }addToPlaylist`, { playlistId, song: songId } )

  return data.body;
};

export const savedTracks = async ( trackId ) => {
  const data = await axios.post( `${ url }addToMySavedTracks`, {
    id: trackId,
  } );
  console.log( "savedata", data );
};

export const checkTracks = async ( trackId ) => {
  const data = await axios.post( `${ url }checkTracks`, {
    idList: trackId,
  } );
  return data.data;
};

export const removeFromMySavedTracks = async ( trackId ) => {
  const data = await axios.post(
    `${ url }removeFromMySavedTracks`,
    {
      id: trackId,
    }
  );
  console.log( data );
};
