import { useLottie } from "lottie-react"

const style = {
    width: "200%",
    height: "110%",
    alignSelf: "center",
    position: "fixed",
    opacity: 1,
    zindex: -1,
}

const LottieanimationTwo = () => {
    const options = {
        path: "https://assets2.lottiefiles.com/packages/lf20_a7djbqn2.json",
        loop: true,
        autoplay: true,
    }

    const { View } = useLottie(options, style)

    return View
}

export default LottieanimationTwo
