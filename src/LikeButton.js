import { useState } from 'react'

function LikeButton() {
    const [likedPhoto, setLikedPhoto] = useState(false)

    const toggleClass = () => {
        setLikedPhoto(!likedPhoto);
    };

    return (
        <button className={likedPhoto ? "favorite" : null} onClick = {toggleClass}>
            {likedPhoto ? "yes" : "no"}
        </button>
    )
}

export default LikeButton;