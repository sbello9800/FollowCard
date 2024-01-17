import { useState } from "react"

export function TwitterFollowCard ({children, username, name, initialIsFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    {/*Funcion que define el texto que en el boton del component */}
    const text = isFollowing?
    'siguiendo':
    'seguir'
    
    {/*Funcion para cambiar las propiedades css de el boton */}
    const buttonClassName = isFollowing ? 
    'followCard-button is-following':         
    'followCard-button'

    {/*Funcio para cambiar el estado del component */}
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    
return (
<article className="followCard">
    <header className="followCard-header">
        
        <img src={`https://unavatar.io/${username}`} alt="Avatar" className="followCard-avatar"/>
        <div className="followCard-info">
            @{children}
        <span className="followCard-infoUserName">@{username}</span>
        </div>
    </header>
    <aside>
        <button className={buttonClassName} onClick={handleClick}>
        <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-topFollow">Dejar de seguir</span></button>
    </aside>
</article>)
    
}