import { Switch } from "@nextui-org/react";
import { SunIcon } from "../../public/images/sunicon";
import { MoonIcon } from "../../public/images/moonicon";

export default function Darkmode() {
    return (
        <Switch
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SunIcon className={className} />
                ) : (
                    <MoonIcon className={className} />
                )
            }
        >
        </Switch>
    );
}