

/* 
    Specific styles for whether a button is available
    If unavailable pointer events are disabled
*/

export const buttonAvailable = {
    fontSize: '.8em',
    borderStyle: 'none',
    minWidth: '5em',
    backgroundColor: '#DA7422',
    minHeight: '2.3em',
    cursor: "pointer",
    margin: "0 0.5em",
    borderRadius: ".2em"
}
export const buttonUnavailable = {
    fontSize: '.8em',
    borderStyle: 'none',
    minWidth: '5em',
    minHeight: '2.3em',
    backgroundColor: 'grey',
    pointerEvents: 'none',
    cursor: "default",
    margin: "0 0.5em",
    borderRadius: ".2em"
}