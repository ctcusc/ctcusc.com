import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/header'
import sharedStyles from '../../styles/shared.module.css'

const Index = () => {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <h1>About us.</h1>
        <h2>Our Mission</h2>
        <p>hi safsd sdsd fsd fsd sdfsd dsf sdfsd sdf sd</p>
        <h2>Our Values</h2>
        <h3>1.</h3>
        <h3>2.</h3>
        <h3>3.</h3>
      </div>
    </>
  )
}

export default Index
