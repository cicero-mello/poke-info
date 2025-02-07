import { berryAnimationClasses } from "@pages/berry/animation"
import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"

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
    gap: ${numbPxToRem(5)};

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
        min-width: ${numbPxToRem(30)};
        max-width: ${numbPxToRem(30)};
        min-height: ${numbPxToRem(30)};
        max-height: ${numbPxToRem(30)};
        margin-right: ${numbPxToRem(12)};
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
    margin-left: ${numbPxToRem(12 + 30)};
    line-height: ${numbPxToRem(22)};
`

export const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${numbPxToRem(8)};
    width: 30%;
    width: ${numbPxToRem(320)};
    padding-left: ${numbPxToRem(44)};

    .info-line {
        width: fit-content;
        ${text.lg}
        gap: 0 ${numbPxToRem(5)};
    }

    .info-line-title {
        font-weight: normal;
        white-space: nowrap;
        color: ${color.platinum};
    }

    .info-line-data {
        font-weight: bold;
        white-space: nowrap;
        line-height: ${numbPxToRem(18)};
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
        right: -${numbPxToRem(23)};
        height: ${numbPxToRem(20)};
        path {
            fill: ${color.softSilver};
        }
    }
`
