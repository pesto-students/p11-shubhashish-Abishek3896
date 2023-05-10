const isStrongPassword = password => {
  let i = 0;
  if (password.length < 8) {
    return 'false-Too short';
  } else if (password === 'password') {
    return 'false - contains password';
  } else {
    while (i <= password.length) {
      character = password.charAt(i);
      if (character == character.toUpperCase()) {
        break;
      }
      i++;
    }
    if (i == password.length) {
      return 'false No uppercase characters';
    } else {
      return true;
    }
  }
};
