import { useEffect, useState, useRef } from 'react'

export function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current
    
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (!el.isIntersecting) {
        setShow(false)
      } else {
        setShow(true)
        once && observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, { rootMargin: distance })

      if (element) observer.observe(element) 

    })

    return () => observer && observer.disconnect()
  }, [externalRef])

  return { isNearScreen, fromRef }
}