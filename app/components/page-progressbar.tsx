import { useEffect, useState } from "react";
import { useNavigation } from "react-router";
import { Progress } from "./ui/progress";

export function PageProgressBar() {
    const [progressVal, setProgressVal] = useState(0);
    let navigation = useNavigation();


    useEffect(() => {
        if (navigation.state !== 'idle') {
            setProgressVal(25)
            setTimeout(() => {
                setProgressVal(90)
            }, 500);
        } else {
            setProgressVal(0)
        }
    }, [navigation.state]);

    return navigation.state === 'idle' || <Progress value={progressVal} className={'fixed top-0 z-50 w-full'} />

}