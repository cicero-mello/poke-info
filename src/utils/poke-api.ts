import { VersionName } from "@types"

export const versionNamePerVersionId = new Map<number, VersionName>([
    [1, "Red"],
    [2, "Blue"],
    [3, "Yellow"],
    [4, "Gold"],
    [5, "Silver"],
    [6, "Crystal"],
    [7, "Ruby"],
    [8, "Sapphire"],
    [9, "Emerald"],
    [10, "Fire Red"],
    [11, "Leaf Green"],
    [12, "Diamond"],
    [13, "Pearl"],
    [14, "Platinum"],
    [15, "Heart Gold"],
    [16, "Soul Silver"],
    [17, "Black"],
    [18, "White"],
    [19, "Colosseum"],
    [20, "XD"],
    [21, "Black 2"],
    [22, "White 2"],
    [23, "X"],
    [24, "Y"],
    [25, "Omega Ruby"],
    [26, "Alpha Sapphire"],
    [27, "Sun"],
    [28, "Moon"],
    [29, "Ultra Sun"],
    [30, "Ultra Moon"],
    [31, "Let's Go Pikachu"],
    [32, "Let's Go Eevee"],
    [33, "Sword"],
    [34, "Shield"],
    [35, "The Isle Of Armor"],
    [36, "The Crown Tundra"],
    [37, "Brilliant Diamond"],
    [38, "Shining Pearl"],
    [39, "Legends Arceus"],
    [40, "Scarlet"],
    [41, "Violet"],
    [42, "The Teal Mask"],
    [43, "The Indigo Disk"]
])

export const versionGroupIdPerVersionName = new Map<VersionName, number>([
    ["Red", 1],
    ["Blue", 1],
    ["Yellow", 2],
    ["Gold", 3],
    ["Silver", 3],
    ["Crystal", 4],
    ["Ruby", 5],
    ["Sapphire", 5],
    ["Emerald", 6],
    ["Fire Red", 7],
    ["Leaf Green", 7],
    ["Diamond", 8],
    ["Pearl", 8],
    ["Platinum", 9],
    ["Heart Gold", 10],
    ["Soul Silver", 10],
    ["Black", 11],
    ["White", 11],
    ["Colosseum", 12],
    ["XD", 13],
    ["Black 2", 14],
    ["White 2", 14],
    ["X", 15],
    ["Y", 15],
    ["Omega Ruby", 16],
    ["Alpha Sapphire", 16],
    ["Sun", 17],
    ["Moon", 17],
    ["Ultra Sun", 18],
    ["Ultra Moon", 18],
    ["Let's Go Pikachu", 19],
    ["Let's Go Eevee", 19],
    ["Sword", 20],
    ["Shield", 20],
    ["The Isle Of Armor", 21],
    ["The Crown Tundra", 22],
    ["Brilliant Diamond", 23],
    ["Shining Pearl", 23],
    ["Legends Arceus", 24],
    ["Scarlet", 25],
    ["Violet", 25],
    ["The Teal Mask", 26],
    ["The Indigo Disk", 27]
])

export const versionNamesPerVersionGroupId = new Map<number, VersionName[]>([
    [1, ["Red", "Blue"]],
    [2, ["Yellow"]],
    [3, ["Gold", "Silver"]],
    [4, ["Crystal"]],
    [5, ["Ruby", "Sapphire"]],
    [6, ["Emerald"]],
    [7, ["Fire Red", "Leaf Green"]],
    [8, ["Diamond", "Pearl"]],
    [9, ["Platinum"]],
    [10, ["Heart Gold", "Soul Silver"]],
    [11, ["Black", "White"]],
    [12, ["Colosseum"]],
    [13, ["XD"]],
    [14, ["Black 2", "White 2"]],
    [15, ["X", "Y"]],
    [16, ["Omega Ruby", "Alpha Sapphire"]],
    [17, ["Sun", "Moon"]],
    [18, ["Ultra Sun", "Ultra Moon"]],
    [19, ["Let's Go Pikachu", "Let's Go Eevee"]],
    [20, ["Sword", "Shield"]],
    [21, ["The Isle Of Armor"]],
    [22, ["The Crown Tundra"]],
    [23, ["Brilliant Diamond", "Shining Pearl"]],
    [24, ["Legends Arceus"]],
    [25, ["Scarlet", "Violet"]],
    [26, ["The Teal Mask"]],
    [27, ["The Indigo Disk"]]
])
