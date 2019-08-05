import React from 'react'
import { TriggerSchema, TriggerAPI } from '../endpoint'

export function NotifyButton(): JSX.Element {
    function handleClick(event: React.MouseEvent<HTMLElement>): void {
        event.preventDefault()
        const msg: TriggerSchema = {
            msg: new Date().toLocaleString(),
        }
        fetch(TriggerAPI, {
            method: "POST",
            body: JSON.stringify(msg)
        })
        console.log("Just triggered server to publish notificatrions.")
    }
    return <button onClick={handleClick}>{'Notify'}</button>
}


export default NotifyButton;
