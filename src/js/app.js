export default class App {
  getRandomGoblin() {
    if (!this.goblin) this.goblin = document.getElementById('goblin');
    if (!this.box) this.box = document.getElementsByClassName('box');
    const random = Math.floor(Math.random() * 15);
    for (const element of this.box) {
      if (element.getAttribute('data-id') === random.toString()) {
        if (this.prevElement) this.prevElement.removeChild(this.goblin);
        else this.goblin.classList.remove('hide');
        element.appendChild(this.goblin);
        this.prevElement = element;
        return;
      }
    }
  }

  start() {
    setInterval(() => this.getRandomGoblin(), 500);
  }
}

const app = new App();
app.start();
