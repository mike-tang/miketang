import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '@/lib/spotify'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

  console.log('Track:', track)

  const isPlaying = track.is_playing
  const type = track.item.type // episode, track
  const title = track.item.name
  const artist = track.item.artists?.map((_artist: any) => _artist.name).join(', ')
  const showName = track.item.show?.name
  const imageUrl = track.item.album?.images[0].url
  const trackUrl = track.item.external_urls?.spotify

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
    imageUrl,
    trackUrl
  })
}

export default handler 