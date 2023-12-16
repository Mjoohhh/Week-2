const selectMenu = document.querySelector("#acts")
const btnGetResult = document.querySelector("button")
const resultArea = document.querySelector(".result")
const resultContainer = document.querySelector(".result-container")

btnGetResult.addEventListener("click", () => {

    const userChoice = selectMenu.options[selectMenu.selectedIndex].value
    let resultText = "";

    switch(userChoice) {
        case "hyunsoo":
            resultText = "You are introverted, but friendly and will help those in need."
            break
        case "yikyung":
            resultText = "You are strong and determined."
            break
        case "eunyoo":
            resultText = "You have a critical and somewhat rude attitude, however, you also have a  softer side beneath the attitude."
            break
        case "sangwook":
            resultText = "You seem dismissive and distant, but you value kindness." 
            break
        case "eunhyuk":
            resultText = "You are calm-minded and intelligent. You seem like don't have empathy, but you try to protect the people closest to you."
            break
        default:
            resultText = "Please come again when your favorite is on the list.😋"
            break
    }

    if(userChoice === "other") {
        resultContainer.style.backgroundColor = "#777"
    } else {
        resultContainer.style.backgroundColor = userChoice
    }


    resultArea.innerHTML = resultText

    console.log(resultText)

})

    // if(userChoice === "hyunsoo") {
    // resultText = "You are introverted but friendly and will help those in need."
    // } else if (userChoice === "yikyung") {
    // resultText = "You are strong and determined."
    // } else if (userChoice === "eunyoo") {
    // resultText = "You have a critical and somewhat rude attitude, however, you also have a  softer side beneath the attitude."
    // } else if (userChoice === "sangwook") {
    // resultText = "You seem dismissive and distant but you value kindness."
    // } else if (userChoice === "eunhyuk") {
    // resultText = "You are calm-minded and intelligent. You seem like don't have empathy, but you try to protect the people closest to you."
    // } else {
    // resultText = "Please come again when your favorite is on the list.😋"
    // }