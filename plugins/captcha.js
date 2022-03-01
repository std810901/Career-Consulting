// approach comes from https://vrsofttech.com/javascript/how-to-create-a-captcha-using-javascript
export class Captcha {
    constructor (selector) {
      this.captchaValue = null
      this.container = document.querySelector(selector)
    }
  
    generateCaptcha () {
      this.container.innerHTML = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const captchaLength = 6
      const captcha = []
      for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length + 1)
        if (captcha.includes(characters[randomIndex]) === false) {
          captcha.push(characters[randomIndex])
        } else {
          i--
        }
      }
      const canvas = document.createElement('canvas')
      canvas.id = 'captcha'
      canvas.width = 160
      canvas.height = 32
      const context = canvas.getContext('2d')
      context.font = '30px Montserrat'
      context.strokeText(captcha.join(''), 25, 25)
      this.captchaValue = captcha.join('')
      this.container.appendChild(canvas)
    }
  
    refresh () {
      this.removeCaptcha()
      this.generateCaptcha()
    }
  
    removeCaptcha () {
      if (this.container) this.container.innerHTML = ''
    }
  
    get captValue () {
      return this.captchaValue
    }
  }
  
  