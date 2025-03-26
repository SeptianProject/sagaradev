import { useState, useEffect, useCallback } from 'react'

export default function useMediaQuery(query: string): boolean {
     const [matches, setMatches] = useState<boolean>(false)

     const checkMediaQuery = useCallback(() => {
          const media = window.matchMedia(query)
          if (media.matches !== matches) {
               setMatches(media.matches)
          }
     }, [matches, query])

     useEffect(() => {
          checkMediaQuery()

          const media = window.matchMedia(query)
          const listener = () => checkMediaQuery()

          if (media.addEventListener) {
               media.addEventListener('change', listener)
          }
          else if (media.addListener) {
               media.addListener(listener)
          }

          return () => {
               if (media.removeEventListener) {
                    media.removeEventListener('change', listener)
               } else if (media.removeListener) {
                    media.removeListener(listener)
               }
          }
     }, [checkMediaQuery, query])

     return matches
}
