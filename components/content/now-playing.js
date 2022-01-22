/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import { AudioAnimation } from '@/components/animation-audio'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { ListItemLink } from '@/components/links'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const NowPlaying = () => {
  const [loading, setLoading] = useState(true)

  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data } = useSWR('/api/now-playing', fetcher)

  // framer-motion variant
  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      // transition: {
      //   delay: 1.0,
      //   delayChildren: 1.0,
      //   staggerChildren: 0.2
      // }
    }
  }

  // framer-motion variant
  const item = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.5, 
        ease: "linear"
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5, 
        ease: "linear"
      }
    }
  }
  
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
        <InView 
          threshold={0.25}
          triggerOnce={true}
        >
          {({ ref, inView }) => (
            <>
              <motion.section
                ref={ref}
                variants={container}
                initial={"hidden"}
                animate={inView ? "visible" : "hidden"}
                sx={{
                  variant: 'layout.section'
                }}
              >
                <Flex
                  variant="layout.section.inner"
                >
                  {/* Section title */}
                  <motion.span
                    variants={item}
                    sx={{
                      variant: 'text.overline',
                      pb: 4
                    }}
                  >
                    Now playing
                  </motion.span>

                  {/* Widget */}
                  <Flex
                    sx={{
                      flexDirection: 'column',
                      gap: 4
                    }}
                  >
                    <motion.div variants={item}>
                      <ListItemLink 
                        icon={<AudioAnimation />}
                        url={data.songUrl}
                        textPrimary={data.title}
                        textSecondary={data.artist}
                      />
                    </motion.div>
                  </Flex>
                </Flex>
              </motion.section>
            </>
          )}
        </InView>
          
      }

    </>
  )
}

export default NowPlaying