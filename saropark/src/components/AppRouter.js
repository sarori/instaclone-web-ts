import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../routes/Home/Home"
import Profile from "../routes/Profile/Profile"
import Projects from "../routes/Projects/Projects"
import Contact from "../routes/Contact/Contact"
import Experiences from "../routes/Experiences/Experiences"

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/projects" component={Projects} />
				<Route path="/profile" component={Profile} />
				<Route path="/experiences" component={Experiences} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</Router>
	)
}

export default AppRouter
