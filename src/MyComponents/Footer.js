import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        width: "100vw",
        top: "92.9vh"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
           <p className="text-center py-2"> CopyRight &copy; MyTodosList</p>
        </footer>
    )
}
