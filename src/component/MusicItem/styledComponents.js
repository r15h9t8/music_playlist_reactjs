import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: transparent;
`

export const MusicTrackImage = styled.img`
  height: 18vh;
  width: 18vw;
  margin: 10px;
`

export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-left: 10px;
  height: 15vh;
  width: 60vw;
`

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 20vw;
`

export const Duration = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`
