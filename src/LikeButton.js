import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'


function LikeButton() {
    const [userLike, setUserLike] = useState(false)

    const likeHeartButton = <FontAwesomeIcon icon={faHeart} className='likeButton' />
    const dislikeHeartButton = <FontAwesomeIcon icon={faHeartSolid} />

    const toggleClass = () => {
        setUserLike(!userLike);
    };

    return (
            
        <button onClick={toggleClass}>
            {userLike ? dislikeHeartButton : likeHeartButton }
        </button>   
       
    )
}

export default LikeButton;