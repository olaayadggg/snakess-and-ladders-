const checkIsElement = (lastPosition, elementsArray) => {
    elementsArray.map((item) => {
        if (lastPosition == item.from) {
            lastPosition = item.to
        }
    })
    return lastPosition;
}