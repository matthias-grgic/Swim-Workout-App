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
        height: 300,
    }
    const options = {
        path: "https://assets10.lottiefiles.com/packages/lf20_zg93gQ.json",
        loop: true,
        autoplay: true,
    }

    const { View } = useLottie(options, style)

    return View
}

export default LottieLogo
