interface Data {
  source?: string
  things: []
}

class AppShell {
  title = 'Hello World!'
  data: Data = <Data>{}
  currentIndex: number = -1

  thing: HTMLQuoteElement | null
  anotherIdeaButton: HTMLButtonElement | null
  feelingLuckyButton: HTMLButtonElement | null

  constructor() {
    document.body.classList
    this.thing = document.querySelector('#thing') as HTMLQuoteElement
    this.anotherIdeaButton = document.querySelector('#anotherIdea') as HTMLButtonElement
    this.feelingLuckyButton = document.querySelector('#feelingLucky') as HTMLButtonElement
  }
  
  public async bootstrap() {
    await this.fetchData()

    if (this.anotherIdeaButton) {
      this.anotherIdeaButton.addEventListener('click', () => {
        this.render()
      })
    }
    if (this.feelingLuckyButton) {
      this.feelingLuckyButton.addEventListener('click', () => {
        if (this.currentIndex >= 0) {
          let encodedSearch = encodeURI(this.data.things[this.currentIndex])
          window.open(`http://www.google.com/search?btnI&q=${encodedSearch}`, '_blank')
        }
      })
    }

    this.render()
  }

  private fetchData() {
    return fetch('things-to-do.json')
      .then(res => res.json())
      .then(res => {
        this.data = res || <Data>{}
      })
      .catch(err => {
        console.error(err)
      })
  }

  private render() {
    if (this.thing) {
      this.currentIndex = Math.round(Math.random() * (this.data.things.length - 1 ))

      this.thing.innerHTML = `
      <span>#${this.currentIndex + 1}</span>
      <p>${this.data.things[this.currentIndex]}</p>
      `
    }
    this.randomTheme()
  }

  private randomTheme() {
    let themes = [
      '#9DA5A8',
      '#20990A',
      '#853624',
      '#D91A7B',
      '#401A31',
      '#F4E1B0',
      '#86082E',
      '#FFFFFF',
      '#000000'
    ]
    let randomThemeIndex = Math.round(Math.random() * (themes.length - 1))
    /* Setting the background */
    document.body.style.background = themes[randomThemeIndex];
    /* Setting the text colour */
    let contrast = this.getContrast(themes[randomThemeIndex].slice(1))
    document.body.classList.value = contrast
  }

  private getContrast(hex: string) {
    var r = parseInt(hex.substr(0,2),16);
    var g = parseInt(hex.substr(2,2),16);
    var b = parseInt(hex.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'dark' : 'light';
  }
}