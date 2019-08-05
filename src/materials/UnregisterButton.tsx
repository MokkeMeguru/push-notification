import React from 'react'
import * as serviceWorker from '../serviceWorker'

export function UnregisterButton(): JSX.Element  {
    function handleClick(event: React.MouseEvent<HTMLElement>): void {
        event.preventDefault()
        serviceWorker.unregister()
        console.log('ServiceWorker unregistered')
    }
    return <button onClick={handleClick}>{"Unregistered"}</button>
}

export default UnregisterButton
