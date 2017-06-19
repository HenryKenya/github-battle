var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Popular = require('./Popular');
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');


class App extends React.Component{
  render()
  {
    return (
    	<Router>
    		<div className='container'>
    			<Nav />
    			<Switch>
    			
    			<Route exact path='/' component={Home} />
    			<Route exact path = '/battle' component={Battle}/>
					<Route path='/battle' component={Results} />
    			<Route path='/popular' component={Popular} />
    			<Route render={function(){
            return <h4 className='loading'>Ooops...Something is missing!</h4>
          }} />
    			</Switch>
    			
    		</div>
    	</Router>
      )
  }
}

module.exports = App;