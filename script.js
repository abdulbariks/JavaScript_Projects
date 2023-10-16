function calc(result) {
  if (result == "=") {
      document.form1.text1.value = eval(document.form1.text1.value);
  } else {
      if (result == "C") {
          document.form1.text1.value = "";
      } else {
          document.form1.text1.value += result;
      }
  }
}