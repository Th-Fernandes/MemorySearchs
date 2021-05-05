const Modal = {
    open(){
      document
      .querySelector('.modal-overlay')
      .classList
      .add('active')
    },
    close(){
      document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
    }
  }

  const options = {
    selecioned() {
      document.querySelector('.options')
      .classList
      .add('activeded')

    },

    unselecioned() {
      document.querySelector('.options')
      .classList
      .remove('activeded')
    }
  }