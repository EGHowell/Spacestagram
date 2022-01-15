import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'


function LikeButton() {
    const [userLike, setUserLike] = useState(false)

    const dislikeHeartButton = <FontAwesomeIcon icon={faHeart} />
    const likeHeartButton = <FontAwesomeIcon icon={faHeartSolid} />



    const toggleClass = () => {
        setUserLike(!userLike);
    };


    return (
            
            <button onClick={toggleClass}>
                {userLike ? likeHeartButton : dislikeHeartButton }
            </button>   
       
    )
}

export default LikeButton;