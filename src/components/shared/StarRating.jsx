import { useState } from "react";
import Star from "./Star"

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
};

const starContainerStyle = {
    display: 'flex',
}

const textStyle = {
    lineHeight: '1',
    margin: '0'
}

export default function StarRating({ maxRating = 5 }) {

    const [rating, setRating] = useState(0)
    const [tempRating, setTempRating] = useState(0)

    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }, (_, index) => {
                    return <Star
                        key={index}
                        color="#fcc419"
                        size="30px"
                        clickFn={() => setRating(index + 1)}
                        mouseEnterFn={() => setTempRating(index + 1)}
                        mouseLeaveFn={() => setTempRating(0)}
                        isFull={rating >= (index + 1) || (tempRating >= (index + 1))} />
                })}
            </div>
            <p style={textStyle}>{tempRating || rating || ""}</p>
        </div>
    )
}