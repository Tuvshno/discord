import friends_white from '../assets/friends-white.png'
import friends_gray from '../assets/friends-gray.png'
import nitro_gray from '../assets/racing-gray.png'
import plus_white from '../assets/plus-white.png'


function Friends() {
  return (
    <div class="friends-container">
      <button class="friend-search-button">Find or start a conversation</button>
    
      <hr class="line-break-header"/>

      <div class="friend-container-buttons">
        <div class="large-button-container">
          <button class="large-button-active large-button flex">
            <img src={friends_white} class="button-img" alt="friends" />
            <span>Friends</span>
          </button>
        </div>

        <div class="large-button-container">
          <button class="large-button flex">
            <img src={nitro_gray} class="button-img" alt="friends" />
            <span>Nitro</span>
          </button>
        </div>

      </div>

      <div class="direct-messages-button-container">
        <span class="direct-messages-title">Direct Messages</span>
        <button class="small-button">
          <img class="small-button-image" src={plus_white} alt="plus" />
        </button>
      </div>



    </div>
  )
}

export default Friends