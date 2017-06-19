var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component{
	render(){
		return(
				<div className='home-container'>
					<h1>Github Battle: Battle your friends on github and crown the king...</h1>
					<Link to="/battle" className="button">Battle</Link>
				</div>
			)
	}
}

module.exports = Home;