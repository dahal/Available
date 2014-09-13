/** @jsx React.DOM */


var data = [
{name: 'my.org'},
{name: 'poop.com'},
{name: 'schteev.com'},
{name: 'mike.com'}
]

var DomainRiver = React.createClass({
	render: function() {
		return (
			<div className='domainRiver'>
			<DomainList data={this.props.data} />
			</div>
			)
	}
});

var DomainList = React.createClass({
	render: function() {
		var domainNodes = this.props.data.map(function(domain) {
			return (
				<Domain>{domain.name}</Domain>
				)
		});
		return (
			<div className='domainList'>
			{domainNodes}
			</div>	
			);
	}
});


var Domain = React.createClass({
	render: function() {
		return (
			<div className='domain'>
			{this.props}
			</div>
			);
	}
});

var renderRiver = function() {
	React.renderComponent(
		<DomainRiver data={data} />,
		document.getElementById('container')
		);
}
$(document).ready(function(){
	renderRiver();
})