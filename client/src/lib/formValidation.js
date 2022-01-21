const minLength = (name, stringLength) => name.length > stringLength
const isValidCategory = (category) => category !== ""
const isValidType = (category) => category !== ""
const isValidEquipment = (category) => category !== ""

// const isChecked = (isDecorated) => isDecorated === true

const isFormValid = (item) => {
    minLength(item.name, 3) && isValidCategory(item.category) && isValidType(item.contactEmail) && isValidEquipment(item.category)
}

export default isFormValid
