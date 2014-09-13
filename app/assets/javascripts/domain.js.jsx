/** @jsx React.DOM */

var DomainRiver = React.createClass({
	getInitialState: function() {
		return { data: [] };
	},
	componentDidMount: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				this.setState({ data: data });
			}.bind(this),
			error: function(xhr, status, err){
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function() {
		return (
			<div className='domainRiver'>
			<h1>Available Domains</h1>
			<DomainList data={this.state.data} />
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
		<DomainRiver url='domains/all_domains' />,
		document.getElementById('container')
		);
}


$(document).ready(function(){
	renderRiver();
})
