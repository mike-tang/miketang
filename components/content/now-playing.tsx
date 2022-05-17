/** @jsxImportSource theme-ui */
import { Flex, Text } from 'theme-ui'
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
      {/* Loading */}
      { loading && ''}

      {/* No song playing */}
      { !loading && 
        data &&
        !data.isPlaying &&
        ''
      }

      {/* Song is playing */}
      { !loading && 
        data?.isPlaying &&
        
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
              Now playing
            </Text>

            {/* Widget */}
            <Flex
              sx={{
                flexDirection: 'column',
                gap: 4
              }}
            >
              <ListItemLink 
                icon={<AudioAnimation alt="Now playing" />}
                url={data.songUrl}
                textPrimary={data.title}
                textSecondary={
                  data.type === 'episode' 
                    ? `${data.showName}`
                    : data.artist
                }
              />
            </Flex>
          </Flex>
        </Flex>
      }

    </>
  )
}

export default NowPlaying