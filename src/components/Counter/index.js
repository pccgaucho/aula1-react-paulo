import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(1)
    const handleAdd = () => {
        setCount(count + 1)
      }
    return (
        <React.Fragment>
            <button onClick={handleAdd}>Add +</button>
            <h3>{count}</h3>
        </React.Fragment>
    )
}