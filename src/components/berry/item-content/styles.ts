import { berryAnimationClasses } from "@pages/berry/animation"
import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"

export const Component = styled.div.attrs({
    className: "item-content"
})`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    color: ${color.pearlGray};

    ${berryAnimationClasses}
`

export const Descriptions = styled.div.attrs({
    className: "descriptions"
})`
    display: flex;
    flex-direction: column;
    width: 64%;
    gap: ${pxToRem(5)};

    color: ${color.pearlGray};
`

export const ShortEffectWrapper = styled.div.attrs({
    className: "short-effect-wrapper"
})
<{$imageIsLoaded: boolean}>`
${({ $imageIsLoaded }) => css`
    display: flex;
    ${text.lg}

    img {
        image-rendering: pixelated;
        min-width: ${pxToRem(30)};
        max-width: ${pxToRem(30)};
        min-height: ${pxToRem(30)};
        max-height: ${pxToRem(30)};
        margin-right: ${pxToRem(12)};
        pointer-events: none;

        transition: ${transitionTime.medium};
        opacity: 0;
        filter: blur(4px);

        ${$imageIsLoaded && css`
            opacity: 1;
            filter: blur(0);
        `}
    }

    & > p:first-of-type {
        font-weight: bold;
    }
`}`

export const Description = styled.p`
    ${text.base}
    margin-left: ${pxToRem(12 + 30)};
    line-height: ${pxToRem(22)};
`

export const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(8)};
    width: 30%;
    width: ${pxToRem(320)};
    padding-left: ${pxToRem(44)};

    .info-line {
        width: fit-content;
        ${text.lg}
        gap: 0 ${pxToRem(5)};
    }

    .info-line-title {
        font-weight: normal;
        white-space: nowrap;
        color: ${color.platinum};
    }

    .info-line-data {
        font-weight: bold;
        white-space: nowrap;
        line-height: ${pxToRem(18)};
        color: ${color.softSilver};
    }

    li {
        display: flex;
        align-items: center;
        position: relative;
        font-weight: bold;
        white-space: nowrap;
        ${text.lg}
    }

    .poke-dollar-ico {
        position: absolute;
        right: -${pxToRem(23)};
        height: ${pxToRem(20)};
        path {
            fill: ${color.softSilver};
        }
    }
`
