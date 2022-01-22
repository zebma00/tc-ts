import { useState } from 'react'

const useChanged = () => {
    const [isNew, setIsNew] = useState<boolean>(false)
    const [isChanged, setIsChanged] = useState<boolean>(false)
    const [isMoved, setIsMoved] = useState<boolean>(false)

    const toggleIsNew = () => setIsNew(!isNew)
    const toggleIsChanged = () => setIsChanged(!isChanged)
    const toggleIsMoved = () => setIsMoved(!isMoved)
    console.log("USE", isNew, isChanged, isMoved)

    return {
        isNew, toggleIsNew,
        isChanged, toggleIsChanged,
        isMoved, toggleIsMoved
    }
}

export default useChanged