import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'reset', 'clickme' ]

  connect() {
    // console.log('Hello from disable_button_controller.js')
    // console.log(this.resetTarget)
  }

  disable(event) {
    console.log(event)
    event.currentTarget.classList.add("disabled")
    event.currentTarget.innerText = "I am ☠️!"
    this.resetTarget.classList.remove("d-none")
  }

  enable() {
    this.clickmeTarget.classList.remove("disabled")
    this.clickmeTarget.innerText = "Click me again!"
    this.resetTarget.classList.add("d-none")
  }
}