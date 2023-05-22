const drawtriangle = trianglesize => {
  let string = '';
  for (let i = 1; i <= trianglesize; i++) {
    for (let j = 1; j <= i; j++) {
      string += '*';
    }
    string += '\n';
  }
  return string;
};
