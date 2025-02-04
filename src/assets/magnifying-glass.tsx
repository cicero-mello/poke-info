import { FunctionComponent as FC } from "preact/compat"
import { HTMLAttributes } from "preact/compat"
import { numbPxToRem } from "@style-guide"

export const MagnifyingGlassIco: FC<HTMLAttributes<SVGElement>> = (props) => (
    <svg
        width={numbPxToRem(24)}
        height={numbPxToRem(24)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"magnifying-glass-ico"}
        {...props}
    >
        <g clip-path="url(#clip0_1936_206)">
            <circle cx="9.55981" cy="9.5598" r="6.95961" transform="rotate(-70.8963 9.55981 9.5598)" stroke="#D2D2D2" stroke-width="2.68156" />
            <line x1="15.2122" y1="14.8334" x2="21.6173" y2="21.1038" stroke="#D2D2D2" stroke-width="2.68156" stroke-linecap="round" />
        </g>
        <defs>
            <clipPath id="clip0_1936_206">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
