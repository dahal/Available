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
				<li className='letter'><a href=''>{n}</a></li>
				);				
		})
		return(
			<ul onClick={this.handleClick}>
			{nodes}
			</ul>
			);
	}
})

// var TldSelection = React.createClass({
// 	handleSelect: function(e){
// 		e.preventDefault();
// 		console.log(e.target)
// 	},
// 	render: function(){
// 		return(
// 			<select className='tlds' onChange={this.handleSelect}>
// 			<option></option>
// 			<option>academy  </option>
// 			<option>actor  </option>
// 			<option>agency </option>
// 			<option>archi</option>
// 			<option>associates </option>
// 			<option>audio  </option>
// 			<option>bar  </option>
// 			<option>bargains</option>
// 			<option>berlin </option>
// 			<option>best </option>
// 			<option>bid  </option>
// 			<option>bike</option>
// 			<option>bio  </option>
// 			<option>blackfriday  </option>
// 			<option>blue </option>
// 			<option>boutique</option>
// 			<option>build  </option>
// 			<option>builders </option>
// 			<option>buzz </option>
// 			<option>cab</option>
// 			<option>camera </option>
// 			<option>camp </option>
// 			<option>capital  </option>
// 			<option>cards</option>
// 			<option>care </option>
// 			<option>careers  </option>
// 			<option>cash </option>
// 			<option>catering</option>
// 			<option>center </option>
// 			<option>cheap  </option>
// 			<option>christmas  </option>
// 			<option>claims</option>
// 			<option>cleaning </option>
// 			<option>clinic </option>
// 			<option>clothing </option>
// 			<option>club</option>
// 			<option>codes  </option>
// 			<option>coffee </option>
// 			<option>community  </option>
// 			<option>company</option>
// 			<option>computer </option>
// 			<option>condos </option>
// 			<option>construction </option>
// 			<option>consulting</option>
// 			<option>contractors  </option>
// 			<option>cool </option>
// 			<option>credit </option>
// 			<option>cruises</option>
// 			<option>dance  </option>
// 			<option>dating </option>
// 			<option>democrat </option>
// 			<option>dental</option>
// 			<option>diamonds </option>
// 			<option>directory  </option>
// 			<option>discount </option>
// 			<option>domains</option>
// 			<option>education  </option>
// 			<option>email  </option>
// 			<option>engineering  </option>
// 			<option>enterprises</option>
// 			<option>equipment  </option>
// 			<option>estate </option>
// 			<option>events </option>
// 			<option>exchange</option>
// 			<option>expert </option>
// 			<option>exposed  </option>
// 			<option>fail </option>
// 			<option>farm</option>
// 			<option>financial  </option>
// 			<option>fish </option>
// 			<option>fitness  </option>
// 			<option>flights</option>
// 			<option>florist  </option>
// 			<option>foundation </option>
// 			<option>fund </option>
// 			<option>furniture</option>
// 			<option>futbol </option>
// 			<option>gallery  </option>
// 			<option>gift </option>
// 			<option>glass</option>
// 			<option>graphics </option>
// 			<option>gratis </option>
// 			<option>gripe  </option>
// 			<option>guitars</option>
// 			<option>guru </option>
// 			<option>hamburg  </option>
// 			<option>haus </option>
// 			<option>hiphop</option>
// 			<option>holdings </option>
// 			<option>holiday</option>  
// 			<option>house  </option>
// 			<option>immobilien</option>
// 			<option>industries</option> 
// 			<option>ink  </option>
// 			<option>institute </option> 
// 			<option>international</option>
// 			<option>investments </option> 
// 			<option>juegos</option> 
// 			<option>kaufen </option>
// 			<option>kim</option>
// 			<option>kitchen </option> 
// 			<option>kiwi </option>
// 			<option>land </option>
// 			<option>lighting</option>
// 			<option>limited </option> 
// 			<option>limo </option>
// 			<option>link </option>
// 			<option>maison</option>
// 			<option>management</option> 
// 			<option>marketing </option> 
// 			<option>media </option> 
// 			<option>menu</option>
// 			<option>moda </option>
// 			<option>moe </option> 
// 			<option>nagoya</option> 
// 			<option>ninja</option>
// 			<option>partners</option> 
// 			<option>parts </option> 
// 			<option>photo  </option>
// 			<option>photography</option>
// 			<option>photos</option> 
// 			<option>pics </option>
// 			<option>pictures </option>
// 			<option>pink</option>
// 			<option>plumbing </option>
// 			<option>productions</option>  
// 			<option>properties </option>
// 			<option>pub</option>
// 			<option>qpon </option>
// 			<option>recipes </option> 
// 			<option>red </option> 
// 			<option>reise</option>
// 			<option>reisen</option> 
// 			<option>rentals </option> 
// 			<option>repair </option>
// 			<option>report</option>
// 			<option>rest </option>
// 			<option>reviews</option>  
// 			<option>rocks </option> 
// 			<option>schule</option>
// 			<option>services </option>
// 			<option>sexy </option>
// 			<option>shiksha</option>  
// 			<option>shoes</option>
// 			<option>singles </option> 
// 			<option>social </option>
// 			<option>solar </option> 
// 			<option>solutions</option>
// 			<option>supplies </option>
// 			<option>supply </option>
// 			<option>support </option> 
// 			<option>surgery</option>
// 			<option>systems </option> 
// 			<option>tattoo </option>
// 			<option>tax  </option>
// 			<option>technology</option>
// 			<option>tienda </option>
// 			<option>tips </option>
// 			<option>today </option> 
// 			<option>tokyo</option>
// 			<option>tools  </option>
// 			<option>town </option>
// 			<option>toys </option>
// 			<option>trade</option>
// 			<option>training </option>
// 			<option>university </option>
// 			<option>uno  </option>
// 			<option>vacations</option>
// 			<option>ventures</option> 
// 			<option>viajes </option>
// 			<option>villas </option>
// 			<option>vision</option>
// 			<option>voting </option>
// 			<option>voyage </option>
// 			<option>watch </option> 
// 			<option>webcam</option>
// 			<option>wien </option>
// 			<option>wiki </option>
// 			<option>works </option> 
// 			<option>wtf</option>
// 			<option>xyz </option> 
// 			<option>zone</option>
// 			</select>
// 			);
// 	}
// });
var DomainRiver = React.createClass({
	handleDomainSearch: function(l){
		$.ajax({
			url: 'domains/letter',
			dataType: 'json',
			type: 'POST',
			data: {letter: l},
			success: function(data){
				this.setState({data: data})
			}.bind(this),
			error: function(err){
				console.log(err)
			}
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
		<DomainRiver url='domains/all_domains'/>,
		document.getElementById('container')
		);
}

$(document).ready(function(){
	renderRiver();	
})

