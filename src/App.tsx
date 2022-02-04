import { HashRouter, BrowserRouter as Router, Route } from 'react-router-dom'

import TalentCalculator from './components/talent-calculator'
import PatchNotes from './components/patch-notes'
import ExampleItems from './components/example-items'
import NavBar from './components/nav-bar'
import styles from './index.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      {/* <HashRouter> */}
      <Router>
        <NavBar />
        <Route exact path='/' component={PatchNotes} />
        <Route path='/tc' component={TalentCalculator} />
        <Route path='/items' component={ExampleItems} />
      </Router>
      {/* </HashRouter> */}
    </div>
  )
}

export default App
