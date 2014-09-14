/** @jsx React.DOM */

var LetterSelection = React.createClass({
	handleClick: function(e){
		e.preventDefault();
		var letter = e.target.innerHTML;
		this.props.onLetterClick(letter)
	},
	render: function() {
		var arr = []
		for (var i = 'a'.charCodeAt(0), end='z'.charCodeAt(0); i <= end; ++i){
			arr.push(String.fromCharCode(i));
		}
		var nodes = arr.map(function(n){
			return (
				<li><a href=''>{n}</a></li>
				);				
		})
		return(
			<ul onClick={this.handleClick}>
			{nodes}
			</ul>
			);
	}
})

var DomainRiver = React.createClass({
	handleDomainSearch: function(letter){
		$.ajax({
			url: 'domains/letter',
			dataType: 'json',
			type: 'POST',
			data: {letter: letter},
			success: function(data){
				this.setState({data: data})
			}.bind(this)
		})
	},
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
			<LetterSelection onLetterClick={this.handleDomainSearch} />
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
		<DomainRiver url='domains/all_domains' pollInterval={2000}/>,
		document.getElementById('container')
		);
}


$(document).ready(function(){
	renderRiver();	
})
