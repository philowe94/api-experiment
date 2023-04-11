import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id='error'>
			<h1>Error</h1>
			<i>{error.statusText || error.message}</i>
		</div>
	)
}
