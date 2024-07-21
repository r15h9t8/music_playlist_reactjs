import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  const deleteBtn = <AiOutlineDelete size={20} />

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
        <DurationDeleteContainer>
          <Duration>{duration}</Duration>
          <DeleteButton
            type="button"
            data-testid="delete"
            onClick={onDeleteTrack}
          >
            {deleteBtn}
          </DeleteButton>
        </DurationDeleteContainer>
      </TrackInfoContainer>
    </MusicListItem>
  )
}

export default MusicItem
