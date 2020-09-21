import React from 'react'

import previews from '../../data/demos.data'
import DemoCard from '../../components/demo-card'
import SectionContainer from '../../components/section-container'
import section from '../../data/container-section'
import './styles.scss'

const Demos = () => {
  const allProps = section[0]
  return (
    <SectionContainer {...allProps}>
      <div className="demos__elements">
        {previews.map((demo) => {
          const { id, imageUrl, header, description, link } = demo
          return <DemoCard key={id} image={imageUrl} header={header} description={description} previewUrl={link} />
        })}
      </div>
    </SectionContainer>
  )
}

export default Demos
