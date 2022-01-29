import { HashRouter, Redirect, Route } from 'react-router-dom'

import TalentCalculator from './components/talent-calculator'
import PatchNotes from './components/patch-notes'
import ExampleItems from './components/example-items'
import NavBar from './components/nav-bar'
import styles from './index.module.css'

const App = () => {
<<<<<<< HEAD
  return (
    <div id={styles.app}>
      <HashRouter>
        <NavBar />
        <Route exact path='/'>
          <Redirect to='/tc/druid' />
        </Route>
        <Route path='/tc/:playerClass/:talentPoints?' component={TalentCalculator} />
        <Route exact path='/patch-notes' component={PatchNotes} />
        <Route path='/items' component={ExampleItems} />
      </HashRouter>
    </div>
  )
=======
	return (
		<div id={styles.app}>
			<Router>
				<NavBar />
				<Route exact path='/' component={PatchNotes} />
				<Route path='/tc' component={TalentCalculator} />
				<Route path='/items' component={ExampleItems} />
			</Router>
		</div>
	)
>>>>>>> 1ddb4f1 (patch notes)
}

export default App
