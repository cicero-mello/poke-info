import { transitionTime } from "@style-guide/transition-time"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import styled from "styled-components"

export const ContentWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    #setted-version{
        pointer-events: none;
        gap: 16px;

        label {
            opacity: 1;
            font-weight: bold;
        }
        button {
            border-radius: 50%;
            overflow: hidden;
            height: ${numbPxToRem(200)};
            width: ${numbPxToRem(200)};
        }
        button > img {
            height: 100%;
            width: 100%;
            opacity: 1;
            object-fit: cover;
        }
    }

    & > .styled-button {
        position: absolute;
        top: 0;
        left: -${numbPxToRem(20)};
        height: fit-content;
        transition: ${transitionTime.medium} linear;
        opacity: 0;

        .arrow-return-ico {
            height: ${numbPxToRem(18)};
            * {
                transition: ${transitionTime.fast} linear;
                fill: ${color.whiteAlpha49};
            }
        }

        &:hover{
            .arrow-return-ico *{
                fill: ${color.whiteAlpha70};
            }
        }
    }
`

export const VersionList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${numbPxToRem(24)};
    height: 100%;
    width: 100%;
`

export const Line = styled.span`
    min-width: calc(100% - 60px);
    min-height: ${numbPxToRem(2)};
    border-radius: ${numbPxToRem(8)};
    background-color: ${color.shadowGray};
    margin: ${numbPxToRem(18)} 0 ${numbPxToRem(6)} 0;
`
