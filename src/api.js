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
  // return console.log("search", data);
}
export const getPlaylistData = async ( playlistId ) => {
  const data = await axios.post( "http://localhost:3001/getPlaylistData", {
    playlistId
  } );

  console.log( data )
  return data.data
};

export const getPlaylistTracks = async ( playlistId ) => {
  const data = await axios.post( "http://localhost:3001/getPlaylistTracks", {
    playlistId,
    offset: 0,
  } );
  return data.data.tracks;
};
//savedSongs
export const getSavedSongs = async () => {
  const datas = await axios.post("http://localhost:3001/savedTracks", {
    offset: 0,
  });
  // console.log(datas.data);
  console.log("Hello", datas.data);

  return datas.data;
  // setTrack(datas.data.items[index].track);
};
