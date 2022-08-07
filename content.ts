setTimeout(() => {
  setInterval(()=>{
    const password = document.querySelector('input[type=password]')?.value
    console.log('this is password picker', password);
    password && console.log(password);
  }, 1000)
}, 3000);