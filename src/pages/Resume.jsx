import { StyledButton } from '../styles/Button.style'
import { GeometricShape } from '../styles/Containers.style'
import { Heading, ResumeContent, ResumeWrapper, SubHeading } from '../styles/Resume.style'
import ResumeCard from '../components/ResumeCard'
import { useState, useEffect } from 'react'
import experiences from '../data/experience.json'
import communities from '../data/community.json'
import achivements from '../data/achivements.json'

const Resume = () => {
  const [experience, setExperience] = useState(null)
  const [community, setCommunity] = useState(null)
  const [achivement, setAchivement] = useState(null)
  const resumeLink =
    'https://drive.google.com/file/d/1ZCdYvhRq1aFi2oi06QTL0KXrXi27P2Sv/view?usp=sharing'

  useEffect(() => {
    setExperience(experiences)
    setCommunity(communities)
    setAchivement(achivements)
  }, [experiences, communities, achivements])
  return (
    <>
      <ResumeWrapper>
        <Heading>
          <GeometricShape />
          <h1>Resume</h1>
        </Heading>
        <ResumeContent>
          <SubHeading>
            <h2>Experience</h2>
            <StyledButton width="150px" size="10px">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </StyledButton>
          </SubHeading>
          {experience?.map((data, index) => {
            return <ResumeCard content={data} key={index} />
          })}
          <SubHeading>
            <h2>Communities</h2>
          </SubHeading>
          {community?.map((data, index) => {
            return <ResumeCard content={data} key={index} />
          })}
          <SubHeading>
            <h2>Achievements</h2>
          </SubHeading>
          {achivement?.map((data, index) => {
            return <ResumeCard content={data} key={index} />
          })}
        </ResumeContent>
      </ResumeWrapper>
    </>
  )
}

export default Resume
