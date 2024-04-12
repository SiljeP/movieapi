"use client"
import { Switch } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function DarkMode({ className }) {
    const [darkMode, setDarkMode] = useState()

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        // Hvis localstorage er DARK, set til True
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <>
            <Switch
                className={className}
                isSelected={darkMode}
                onClick={() => setDarkMode(!darkMode)}
            />
        </>
    )
}

//ALT HERUNDER TROELS LØSNING DER STADIG GIVER PROBLEMER!
// import { Switch } from "@nextui-org/react";
// import { SunIcon } from "../../public/images/sunicon";
// import { MoonIcon } from "../../public/images/moonicon";
// import { useEffect, useState } from "react"


// export default function Darkmode() {

//     const [isLightMode, setIsLightMode] = useState(undefined)

//     useEffect(() => {
//         if (!localStorage.getItem("isLightMode")) {
//             localStorage.setItem("isLightMode", true)
//             setIsLightMode(true)
//         }
//     }, [])

//     useEffect(() => {
//         if (!isLightMode) {
//             document.documentElement.classList.add('dark')
//             localStorage.setItem("isLightMode", false)
//         } else {
//             document.documentElement.classList.remove('dark')
//             localStorage.setItem("isLightMode", true)
//         }
//     }, [isLightMode])

//     console.log(isLightMode)
//     return (
//         <Switch
//             isSelected={!isLightMode} //troels løsning
//             size="lg"
//             color="secondary"
//             thumbIcon={({ isSelected, className }) =>
//                 isSelected ? (
//                     <MoonIcon className={className} />
//                 ) : (
//                     <SunIcon className={className} />
//                 )
//             }
//             onClick={() => {
//                 localStorage.setItem("isLightMode", !isLightMode)
//                 setIsLightMode(!isLightMode)
//             }}
//         >
//         </Switch >
//     );
// }

