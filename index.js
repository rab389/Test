import React from "react"
import { PageLayout } from "../components/Layout"
import TextSectionBackground from "../components/TextSectionBackground"
import { PageHeader } from "../components/Headings 1"
import { useStaticQuery, graphql } from "gatsby"
import ImageRow from "../components/ImageRow"
import SEO from "../components/SEO"
import { ActionButton } from "../components/buttons"
import EnquireButton from "../components/EnquireButton"
import styled from "styled-components"

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 5rem;
  @media only screen and (max-width: 980px) {
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 3rem;
  }
  .section {
    @media only screen and (max-width: 980px) {
      width: 100%;
    }
    width: 47.25%;
    &.img {
      max-width: 610px;
    }
  }
  `

const ButtonWrapper = styled.div`
  button {
    margin-right: 20px;
  }

`

const Lodge = () => {
  const {
    contentfulActivityPagePangolinExperience: { line },
  } = useStaticQuery(graphql`
    {
      contentfulActivityPagePangolinExperience {
        line {
          header
          description {
            json
          }
          imageDesction {
            fluid(maxWidth: 610, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  return (
    <PageLayout>
      <SEO 
      title="Pangolin Experience - Mavela Game Lodge" 
      description="Join us on an experience that will allow you to observe and follow a pangolin on foot through the Manyoni Game Reserve."
      />
      <TextSectionBackground pa="4% 10%">
          <PageHeader>Pangolin Experience</PageHeader>
        {line.map((about: any, i: number) => (
          <ImageRow
            key={about.header}
            reverse={!!(i % 2)}
            pic={about.imageDesction.fluid}
            text={about.description.json}
          ></ImageRow>
        ))}
        <Columns>
        <div className="section"></div>
        <div className="section">
        <ButtonWrapper>
          <EnquireButton />
          <ActionButton>
            <a
              href="/rates"
              rel="noopener noreferrer"
              target="self"
            >
              Rates
            </a>
          </ActionButton>
        </ButtonWrapper>
        </div>
        </Columns>
      </TextSectionBackground>
    </PageLayout>
  )
}

export default Lodge