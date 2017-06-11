import React from 'react';

function ListView(props) {
	let i=0;
	const list = props.items.map( x => <div key={i++}>{x}</div> )
	return (
		<ul>{list}</ul>
	);
}

export default ListView;