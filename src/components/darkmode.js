import { Switch } from "@nextui-org/react";
import { SunIcon } from "../../public/images/sunicon";
import { MoonIcon } from "../../public/images/moonicon";
import { useEffect, useState } from "react"


export default function Darkmode() {

    const [isLightMode, setIsLightMode] = useState(undefined)

    useEffect(() => {
        if (!localStorage.getItem("isLightMode")) {
            localStorage.setItem("isLightMode", true)
            setIsLightMode(true)
        }
    }, [])

    useEffect(() => {
        if (!isLightMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("isLightMode", false)
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("isLightMode", true)
        }
    }, [isLightMode])

    console.log(isLightMode)
    return (
        <Switch
            isSelected={!isLightMode}
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <MoonIcon className={className} />
                ) : (
                    <SunIcon className={className} />
                )
            }
            onClick={() => {
                localStorage.setItem("isLightMode", !isLightMode)
                setIsLightMode(!isLightMode)
            }}
        >
        </Switch >
    );
}

