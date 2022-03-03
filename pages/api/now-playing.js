import { getNowPlaying } from '@/utils/spotify'

const handler = async (req, res) => {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ 
      isPlaying: false 
    })
  }

  const track = await response.json()

  if (track.item === null) {
    return res.status(200).json({ 
      isPlaying: false 
    })
  }

  const isPlaying = track.is_playing
  const type = track.context.type // show, playlist, artist
  const title = track.item.name
  const artist = track.item.artists?.map((_artist) => _artist.name).join(', ')
  const showName = track.item.show?.name
  const showPublisher = track.item.show?.publisher
  const imageUrl = track.item.album?.images[0].url
  const trackUrl = track.item.external_urls.spotify
  const playlistUrl = track.context.external_urls.spotify

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({
    isPlaying,
    type,
    title,
    artist,
    showName,
    showPublisher,
    imageUrl,
    trackUrl,
    playlistUrl
  })
}

export default handler 