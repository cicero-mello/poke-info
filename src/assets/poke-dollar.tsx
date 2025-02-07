import { FunctionComponent as FC } from "preact/compat"
import { HTMLAttributes } from "preact/compat"
import { numbPxToRem } from "@style-guide"

export const PokeDollar: FC<HTMLAttributes<SVGElement>> = (props) => (
    <svg
        version="1.0"
        width={numbPxToRem(24)}
        height={numbPxToRem(24)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200.000000 1656.000000"
        preserveAspectRatio="xMidYMid meet"
        className="poke-dollar-ico"
        {...props}
    >
        <g transform="translate(0.000000,1656.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M826 16423 c-31 -684 -41 -5028 -18 -7363 6 -657 15 -1511 18 -1897 l7 -703 -417 0 -416 0 0 -825 0 -825 415 0 415 0 0 -495 0 -495 -415 0 -415 0 0 -830 0 -830 415 0 415 0 0 -1075 0 -1075 825 0 825 0 0 1075 0 1075 3145 0 3145 0 0 830 0 830 -3145 0 -3145 0 0 495 0 495 3145 0 3145 0 0 825 0 825 -3142 2 -3143 3 0 495 0 495 2680 6 c1474 3 2698 9 2720 13 22 4 108 16 190 27 1493 200 2805 1155 3470 2524 559 1153 604 2487 124 3690 -58 146 -209 452 -294 595 -625 1056 -1626 1810 -2800 2108 -269 69 -538 112 -825 132 -94 6 -1344 10 -3531 10 l-3387 0 -6 -137z m7064 -1550 c331 -57 583 -139 863 -279 783 -393 1361 -1148 1532 -2002 45 -227 50 -286 50 -587 0 -310 -8 -393 -61 -635 -33 -149 -119 -405 -183 -548 -382 -842 -1142 -1457 -2038 -1646 -306 -65 -84 -60 -2960 -63 l-2613 -4 0 2896 0 2895 2643 -3 2642 -2 125 -22z"/>
        </g>
    </svg>
)
