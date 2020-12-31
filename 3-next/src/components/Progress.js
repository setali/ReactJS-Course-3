import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

export default function ProgressBar() {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  // const loadingOn = () => setLoading(true)
  // const loadingOff = () => setLoading(false)
  const loadingOn = setLoading.bind({}, true)
  const loadingOff = setLoading.bind({}, false)

  useEffect(() => {
    // router.events.on('routeChangeStart', setLoading.bind({}, true))
    // router.events.on('routeChangeComplete', setLoading.bind({}, false))
    router.events.on('routeChangeStart', loadingOn)
    router.events.on('routeChangeComplete', loadingOff)

    return () => {
      // router.events.off('routeChangeStart', setLoading)
      // router.events.off('routeChangeComplete', setLoading)
      router.events.off('routeChangeStart', loadingOn)
      router.events.off('routeChangeComplete', loadingOff)
    }
  }, [])

  return loading && 'loading ....'
}
