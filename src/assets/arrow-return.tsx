import { FunctionComponent as FC } from "preact/compat"
import { HTMLAttributes } from "preact/compat"
import { numbPxToRem } from "@style-guide"

export const ArrowReturnIco: FC<HTMLAttributes<SVGElement>> = (props) => (
    <svg
        width={numbPxToRem(61)}
        height={numbPxToRem(34)}
        viewBox="0 0 68 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M52.3493 38H21.5V34.499H52.3493C58.5112 34.499 63.5284 30.5708 63.5284 25.7465C63.5284 20.9221 58.5112 16.9939 52.3493 16.9939H8.55869L17.4903 24L14.3333 26.4787L0 15.2434L14.3289 4.02478L17.4903 6.5L8.55869 13.4929H52.3493C60.9795 13.4929 68 18.9895 68 25.7465C68 32.5034 60.9795 38 52.3493 38Z"
            fill="#585858"
        />
    </svg>
)
