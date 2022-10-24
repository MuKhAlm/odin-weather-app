import Form from './form'

/**
 * The class responsible for rendering the page,
 */
class Render {
  header
  main
  footer

  constructor () {
    this.createHeader()
    this.createMain()
    this.createFooter()
  }

  /**
   * Creates a header element, populates it and appands it to the body,
   */
  createHeader = () => {
    this.header = document.createElement('header')

    const h1 = document.createElement('h1')
    h1.textContent = 'Weather App'
    this.header.appendChild(h1)

    document.querySelector('body').appendChild(this.header)
  }

  /**
   * Creates a main element, populates with form it and appands it to the body,
   */
  createMain = () => {
    this.main = document.createElement('main')

    const form = Form.getForm()
    this.main.appendChild(form)

    document.querySelector('body').appendChild(this.main)
  }

  /**
   * Creates a footer element, populates with form it and appands it to the body,
   */
  createFooter = () => {
    this.footer = document.createElement('footer')

    const a = document.createElement('a')
    a.href = 'https://github.com/MuKhAlt/odin-weather-app.git'

    const gitHubIcon = document.createElement('i')
    a.appendChild(gitHubIcon)

    this.footer.appendChild(a)
    document.querySelector('body').appendChild(this.footer)
  }
}

/**
 * The function responsible for setting up the website
 */
function main () {
  const render = new Render()
  // Render() for rendering the page
  // Controll() for controlling the form and taking actions when it is submitted
}

main()
