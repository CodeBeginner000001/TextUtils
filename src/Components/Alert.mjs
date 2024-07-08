import React from 'react'


export default function Alert({ alert }) {
    let FirstLetter = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{FirstLetter(alert.type)}</strong>: {alert.msg}
            </div>}
        </div>
    )
}
