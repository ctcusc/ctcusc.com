import Link from 'next/link'
import Header from '../../components/header'
import sharedStyles from '../../styles/shared.module.css'

const Index = () => {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <h1>Join us.</h1>
        <p>We're a group of students on a mission</p>
        <h2>Our roles</h2>
        <p>hi safsd sdsd fsd fsd sdfsd dsf sdfsd sdf sd</p>
        <h3>Developer</h3>
        <h3>Designer</h3>
        <h3>Product Manager</h3>
        <h3>Tech Lead</h3>
      </div>
    </>
  )
}

export default Index
