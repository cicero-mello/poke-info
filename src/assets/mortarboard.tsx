import { FunctionComponent as FC } from "preact/compat"
import { HTMLAttributes } from "preact/compat"
import { pxToRem } from "@style-guide"

export const MortarboardIco: FC<HTMLAttributes<SVGElement>> = (props) => (
    <svg
        width={pxToRem(24)}
        height={pxToRem(24)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mortarboard-ico"
        {...props}
    >
        <path
            d="M21.42 10.9224C21.5991 10.8434 21.751 10.7136 21.857 10.5492C21.963 10.3847 22.0184 10.1927 22.0164 9.99709C22.0143 9.80144 21.955 9.61068 21.8456 9.44844C21.7362 9.2862 21.5817 9.15961 21.401 9.08436L12.83 5.18036C12.5695 5.06151 12.2864 5 12 5C11.7137 5 11.4306 5.06151 11.17 5.18036L2.60004 9.08036C2.42201 9.15833 2.27056 9.28649 2.16421 9.44917C2.05786 9.61185 2.00122 9.802 2.00122 9.99636C2.00122 10.1907 2.05786 10.3809 2.16421 10.5435C2.27056 10.7062 2.42201 10.8344 2.60004 10.9124L11.17 14.8204C11.4306 14.9392 11.7137 15.0007 12 15.0007C12.2864 15.0007 12.5695 14.9392 12.83 14.8204L21.42 10.9224Z"
            stroke="#E0DDDD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M22 10V16"
            stroke="#E0DDDD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M6 12.5V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V12.5"
            stroke="#E0DDDD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
)
