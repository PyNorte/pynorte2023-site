import { useEffect, useState } from "react"

const useReadingScroll = () => {
  const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScroll = window.scrollY
        console.log(updateScroll)
        return updateScroll
    })
    window.addEventListener('scroll', updateScrollCompletion)
}

export default useReadingScroll