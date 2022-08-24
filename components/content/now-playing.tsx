/** @jsxImportSource theme-ui */
import { Flex, Text } from 'theme-ui'
import { IoTriangleSharp } from 'react-icons/io5'
import { AudioAnimation } from '@/components/animation-audio'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { ListItemLink } from '@/components/links'

const NowPlaying = () => {
  const [loading, setLoading] = useState(true)

  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  const { data } = useSWR('/api/now-playing', fetcher)
  
  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  return (
    <>
      <Flex
        as="section"
        variant="layout.section"
      >
        <Flex
          variant="layout.section.inner"
        >
          {/* Section title */}
          <Text 
            variant="overline"
            pb={4}
          >
            Listening to
          </Text>

          {/* Loading */}
          { loading && ''}

          {/* No song playing */}
          { !loading && 
            data &&
            !data.isPlaying &&
            <Flex
              sx={{
                flexDirection: 'column',
                gap: 4
              }}
            >
              <ListItemLink 
                icon={<IoTriangleSharp size={24} />}
                url='https://www.youtube.com/watch?v=Y8ACyHYsb6Q'
                textPrimary='silence'
                textSecondary=''
              />
            </Flex>
          }

          {/* Song is playing */}
          { !loading && 
            data?.isPlaying &&
            <Flex
              sx={{
                flexDirection: 'column',
                gap: 4
              }}
            >
              <ListItemLink 
                icon={<AudioAnimation alt="Listening to" />}
                url={data.songUrl}
                textPrimary={data.title}
                textSecondary={
                  data.type === 'episode' 
                    ? `${data.showName}`
                    : data.artist
                }
              />
            </Flex>
          }
        </Flex>
      </Flex>

    </>
  )
}

export default NowPlaying