type validPx =
    "1px" | "2px" | "3px" | "4px" | "6px" | "8px" | "10px" | "12px" |
    "14px" | "16px" | "20px" | "24px" | "28px" | "32px" |
    "36px" | "40px" | "44px" | "48px" | "56px" | "60px" | "64px" |
    "80px" | "96px" | "112px" | "128px" | "144px" | "160px" |
    "168px" | "176px" | "180px" | "192px" | "208px" | "224px" | "240px" |
    "256px" | "288px" | "320px" | "384px" | "550px" | "624px" | "1120px"

export const pxToRem = (px: validPx): string => {
    const pxInInt = parseInt(px.slice(0, -2))
    return (pxInInt / 16).toFixed(5) + "rem"
}
