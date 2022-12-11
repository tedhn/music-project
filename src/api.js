import axios from "axios";

export const loginAccount = async ( code ) => {
  const resp = await axios.post( "http://localhost:3001/login", {
    code,
  } );
};

export const getMyData = () => {
  return axios.get( "http://localhost:3001/me" );
};

export const getPlaylist = async () => {
  const data = await axios.get( "http://localhost:3001/playlist" );
  return data.data.items;
};

export const handleSearch = async ( searchData ) => {
  const data = await axios.post( "http://localhost:3001/search", {
    q: searchData,
  } );
  return data.data;

}
export const getPlaylistData = async ( playlistId ) => {
  const data = await axios.post( "http://localhost:3001/getPlaylistData", {
    playlistId
  } );


  return data.data
};

export const getPlaylistTracks = async ( playlistId, offset ) => {
  const data = await axios.post( "http://localhost:3001/getPlaylistTracks", {
    playlistId,
    offset,
  } );
  return data.data.tracks;
};
//savedSongs
export const getSavedSongs = async ( offset ) => {
  const datas = await axios.post( "http://localhost:3001/savedTracks", {
    offset,
  } );

  return datas.data;
};

export const createPlaylist = async ( playlistName, otherDeatils ) => {
  const { data } = await axios.post( 'http://localhost:3001/createPlaylist', { playlistName, otherDetails: {} } )

  return data.body
}

export const addToPlaylist = async ( playlistId, songId ) => {
  axios.post( 'http://localhost:3001/addToPlaylist', { playlistId, song: songId } )


}