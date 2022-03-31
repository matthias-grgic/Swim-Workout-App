import { useLottie } from 'lottie-react'

const style = {
  width: '200%',
  height: '110%',
  alignSelf: 'center',
  justifyContent: 'center',
  position: 'fixed',
}

const LottieanimationTwo = () => {
  const options = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_lakbmyk5.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieanimationTwo
