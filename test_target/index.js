function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack',ABC_STR2], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());