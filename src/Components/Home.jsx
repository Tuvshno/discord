import React, { useState } from 'react';

import plus_green from '../assets/plus.png'
import explore_green from '../assets/explore.png'
import plus_white from '../assets/plus-white.png'
import explore_white from '../assets/explore-white.png'
import discord_gray from '../assets/discord-gray.png'
import discord_white from '../assets/discord-white.png'
import download_green from '../assets/download-green.png'
import download_white from '../assets/download-white.png'

function Home() {

  /*Button Hover State */
  const [discord, setDiscord] = useState(discord_gray)
  const [plus, setPlus] = useState(plus_green)
  const [explore, setExplore] = useState(explore_green)
  const [download, setDownload] = useState(download_green)

  /*Tool Tip State */
  const [discordToolTip, setDiscordToolTip] = useState(false)
  const [plusToolTip, setPlusToolTip] = useState(false)
  const [exploreToolTip, setExploreToolTip] = useState(false)
  const [downloadToolTip, setDownloadToolTip] = useState(false)

  /* On Server Button Hover */
  const discordHoverEnter = () => {
    console.log("Mouse Entered Discord Button")
    setDiscord([discord_white])
  }
  const discordHoverLeave = () => {
    console.log("Mouse Left Discord Button")
    setDiscord([discord_gray])
  }
  const plusHoverEnter = () => {
    console.log("Mouse Entered Plus Button")
    setPlus([plus_white])
  }
  const plusHoverLeave = () => {
    console.log("Mouse Left Plus Button")
    setPlus([plus_green])
  }
  const exploreHoverEnter = () => {
    console.log("Mouse Entered Explore Button")
    setExplore([explore_white])
  }
  const exploreHoverLeave = () => {
    console.log("Mouse Left Explore Button")
    setExplore([explore_green])
  }
  const downloadHoverEnter = () => {
    console.log("Mouse Entered Download Button")
    setDownload([download_white])
  }
  const downloadHoverLeave = () => {
    console.log("Mouse Left Download Button")
    setDownload([download_green])
  }

  return (
    <div>
      <div class="servers-nav-container flex">
        <button class="server-button discord-button" data-text="Direct Messages" onMouseEnter={discordHoverEnter} onMouseLeave={discordHoverLeave}>
          <img class="discord-button-image" src={discord} />
        </button>

        <hr class="line-break"/>

        <button class="server-button" data-text="Add a Server" onMouseEnter={plusHoverEnter} onMouseLeave={plusHoverLeave}>
          <img class="server-button-image" src={plus} alt="plus" />
        </button>
        <button class="server-button" data-text="Explore Public Servers" onMouseEnter={exploreHoverEnter} onMouseLeave={exploreHoverLeave}>
          <img class="server-button-image" src={explore} alt="explore" />
        </button>
        
        <hr class="line-break"/>

        <button class="server-button" data-text="Download Apps" onMouseEnter={downloadHoverEnter} onMouseLeave={downloadHoverLeave}>
          <img class="discord-button-image" src={download} alt="download" />
        </button>
      </div>
    </div>
  )
}

export default Home