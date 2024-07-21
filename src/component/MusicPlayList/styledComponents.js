import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: #152850;
`

export const ArtistBg = styled.div`
  height: 450px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  color: #ffffff;
  font-size: 42px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const ArtistInfo = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 400;
`

export const PlayListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlayListHeading = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const SearchInput = styled.input`
  height: 4vh;
  width: 26vw;
  color: #cbd5e1;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding-left: 10px;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`
