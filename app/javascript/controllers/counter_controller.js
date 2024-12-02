import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // Define targets you want to interact with
  static targets = [ "count" ]

  // Lifecycle method when controller connects
  connect() {
    console.log("Counter controller connected!")
  }

  // Custom methods
  increment() {
    const currentValue = parseInt(this.countTarget.textContent)
    this.countTarget.textContent = currentValue + 1
  }

  decrement() {
    const currentValue = parseInt(this.countTarget.textContent)
    this.countTarget.textContent = currentValue - 1
  }
}