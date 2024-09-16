
'use strict'
document.querySelector('.signup-link').addEventListener('click',function(){
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'block';
});

document.querySelector('.login-link').addEventListener('click', () => {
  document.querySelector('.login-container').style.display = 'block';
  document.querySelector('.signup-container').style.display = 'none';
});
