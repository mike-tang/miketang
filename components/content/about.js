/** @jsxImportSource theme-ui */
import { Themed, Flex } from 'theme-ui'
import { TextLink } from '@/components/links'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const About = () => {
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
      y: 24,
      transition: {
        duration: 0.5, 
        ease: "linear"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
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
                sx={{
                  py: [9, 9, 9],
                  minHeight: '64vh',
                  justifyContent: 'center'
                }}
              >
                <motion.h1
                variants={item}
                sx={{
                  variant: 'styles.h1',
                  lineHeight: 'heading',
                  textAlign: 'left',
                  fontWeight: 'heading',
                  pb: 4,
                  letterSpacing: ['-2px', '-3px', '-4px']
                }}
              >
                Mike Tang
              </motion.h1>
              <motion.p 
                variants={item}
                sx={{
                  variant: 'styles.p',
                  fontSize: 3,
                  color: 'foreground.secondary',
                  lineHeight: 'body',
                  textAlign: 'left',
                  fontWeight: 'body'
                }}
              >
                {`Designing systems and interfaces. Developing performant software and digital services. Building `}
                <TextLink
                  text="Ko"
                  url="https://ko.education"
                  sx={{
                    variant: 'links.text',
                    color: '#7755FF'
                  }}
                />
                {` to support the education economy.`}
              </motion.p>
              </Flex>
            </motion.section>
          </>
        )}
      </InView>
  )
}

export default About