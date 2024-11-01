type validPx =
    "1px" | "2px" | "3px" | "4px" | "5px" | "6px" | "7px" | "8px" | "10px" |
    "12px" | "14px" | "16px" | "20px" | "24px" | "25px" | "26px" | "28px" |
    "30px" | "32px" | "34px" | "36px" | "40px" | "42px" | "44px" | "48px" |
    "56px" | "60px" | "64px" | "68px" | "80px" | "96px" | "112px" | "128px" | "130px" |
    "144px" | "150px" | "154px" | "160px" | "168px" | "176px" | "180px" | "192px" |
    "204px" |"208px" | "210px" | "224px" | "240px" | "256px" | "260px" | "268px" |
    "288px" | "320px" | "356px" | "370px" | "384px" | "400px" | "550px" |
    "624px" | "760px" | "860px" | "1120px" | "105px" | "92px" | "78px"

export const pxToRem = (px: validPx): string => {
    const pxInInt = parseInt(px.slice(0, -2))
    return numbPxToRem(pxInInt)
}

export const numbPxToRem = (px: number): string => (
    (px / 16).toFixed(5) + "rem"
)
