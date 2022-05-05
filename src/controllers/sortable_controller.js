import Sortable from 'sortablejs';
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {

  connect() {
    Sortable.create(this.element, {
      ghostClass: "ghost",
      animation: 1500
    });
  }
}