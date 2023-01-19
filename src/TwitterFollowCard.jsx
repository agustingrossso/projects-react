import React from 'react'

const TwitterFollowCard = () => {
  return (
    <article className="tw-followCard">
    <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar"
        src="https://unavatar.io/somwhere" 
        alt="El avatar de alguien"/>

        <div className="tw-followCard-info">
            <strong>Perro Feliz</strong>
            <span className="tw-followCard-infoUserName">@perrofeliz</span>
        </div>

    </header>

    <aside>
        <button className="tw-followCard-button">
            Seguir
        </button>
    </aside>
</article>
  )
}

export default TwitterFollowCard
