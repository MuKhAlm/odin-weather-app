class Form {
  /**
   * Creates form,
   */
  static getForm = () => {
    const div = document.createElement('div')
    div.id = 'form'

    const textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.placeholder = 'Enter a location name'

    const buttonInput = document.createElement('input')
    buttonInput.type = 'button'
    buttonInput.value = 'Search'

    div.append(textInput, buttonInput)
    return div
  }
}

export default Form
