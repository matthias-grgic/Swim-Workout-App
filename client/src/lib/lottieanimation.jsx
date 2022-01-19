import { useLottie } from "lottie-react"

// function LottieLogo() {
//     const style = {
//         height: 100,
//     }
//     const options = {
//         path: "https://assets5.lottiefiles.com/packages/lf20_lakbmyk5.json",
//         loop: true,
//         autoplay: true,
//     }

//     const { View } = useLottie(options, style)

//     return View
// }

function LottieLogo() {
    const style = {
        width: 200,
        position: "absolute",
        left: 100,
        right: 400,
    }
    const options = {
        path: "https://assets9.lottiefiles.com/packages/lf20_w6xlywkv.json",
        loop: true,
        autoplay: true,
    }

    const { View } = useLottie(options, style)

    return View
}

export default LottieLogo
