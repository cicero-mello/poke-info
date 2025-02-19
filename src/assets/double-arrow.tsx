import { FunctionComponent as FC } from "preact/compat"
import { HTMLAttributes } from "preact/compat"
import { color } from "@style-guide/color"
import { pxToRem } from "@style-guide"

export const DoubleArrowIco: FC<HTMLAttributes<SVGElement>> = (props) => (
    <svg width={pxToRem(18)} height={pxToRem(18)} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clip-path="url(#clip0_314_11329)">
            <g filter="url(#filter0_d_314_11329)">
                <path
                    d="M12.1325 11.1622L5.03125 4.06809C4.89375 3.95034 4.71689 3.88881 4.53599 3.8958C4.3551 3.90279 4.18351 3.97778 4.0555 4.10578C3.9275 4.23379 3.85251 4.40538 3.84552 4.58627C3.83853 4.76717 3.90006 4.94403 4.01781 5.08153L10.5297 11.5934L4.20469 17.9184C4.07082 18.0531 3.99568 18.2352 3.99568 18.4251C3.99568 18.615 4.07082 18.7972 4.20469 18.9318C4.27151 18.9992 4.351 19.0527 4.43859 19.0892C4.52617 19.1257 4.62012 19.1445 4.715 19.1445C4.80989 19.1445 4.90383 19.1257 4.99142 19.0892C5.079 19.0527 5.1585 18.9992 5.22531 18.9318L12.1325 12.0247C12.2466 11.9101 12.3107 11.7551 12.3107 11.5934C12.3107 11.4317 12.2466 11.2767 12.1325 11.1622Z"
                    fill={color.whiteAlpha94}
                />
                <path
                    d="M19.0181 11.1622L11.9169 4.06809C11.7794 3.95034 11.6025 3.88881 11.4216 3.8958C11.2407 3.90279 11.0691 3.97778 10.9411 4.10578C10.8131 4.23379 10.7381 4.40538 10.7311 4.58627C10.7242 4.76717 10.7857 4.94403 10.9034 5.08153L17.4153 11.5934L11.0903 17.9184C10.9564 18.0531 10.8813 18.2352 10.8813 18.4251C10.8813 18.615 10.9564 18.7972 11.0903 18.9318C11.225 19.0657 11.4071 19.1409 11.597 19.1409C11.7869 19.1409 11.9691 19.0657 12.1037 18.9318L19.0181 12.0247C19.1322 11.9101 19.1963 11.7551 19.1963 11.5934C19.1963 11.4317 19.1322 11.2767 19.0181 11.1622Z"
                    fill={color.whiteAlpha94}
                />
            </g>
        </g>
        <defs>
            <filter
                id="filter0_d_314_11329"
                x="-0.155014"
                y="3.89526"
                width="23.3513"
                height="23.2493"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_314_11329" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_314_11329" result="shape" />
            </filter>
            <clipPath id="clip0_314_11329">
                <rect width="23" height="23" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
