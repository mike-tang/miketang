/** @jsxImportSource theme-ui */
import { Flex, Text } from 'theme-ui'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import { ListItemLink } from '@/components/links'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Connect = () => {
  // framer-motion variant
  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.0,
        delayChildren: 1.0,
        staggerChildren: 0.2
      }
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

  return (
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
                Connect
              </motion.span>
              
              {/* Links */}
              <Flex
                sx={{
                  flexDirection: 'column',
                  gap: 4
                }}
              >
                {/* Link 1 */}
                <motion.div variants={item}>
                  <ListItemLink 
                    icon={<BsTwitter size={24} />}
                    url="https://www.twitter.com/miketang/"
                    textPrimary="Twitter"
                    textSecondary="@miketang"
                  />
                </motion.div>

                {/* Link 2 */}
                <motion.div variants={item}>
                  <ListItemLink 
                    icon={<BsGithub size={24} />}
                    url="https://www.github.com/mike-tang/"
                    textPrimary="GitHub"
                    textSecondary="@mike-tang"
                  />
                </motion.div>

                {/* Link 3 */}
                <motion.div variants={item}>
                  <ListItemLink 
                    icon={<GrLinkedinOption size={24} />}
                    url="https://www.linkedin.com/in/mctang/"
                    textPrimary="LinkedIn"
                    textSecondary="@mctang"
                  />
                </motion.div>

              </Flex>
            </Flex>
          </motion.section>
        </>
      )}
    </InView>
  )
}

export default Connect