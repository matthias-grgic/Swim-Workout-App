import { useLottie } from "lottie-react"

const style = {
    height: 300,
}

const LottieLogo = () => {
    const options = {
        path: "https://assets5.lottiefiles.com/packages/lf20_lakbmyk5.json",
        loop: true,
        autoplay: true,
    }

    const { View } = useLottie(options, style)

    return View
}

export default LottieLogo
