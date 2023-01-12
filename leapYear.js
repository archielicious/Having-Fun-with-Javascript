function checkLeapYear(year) {
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    return "LEAP YEAR";
  }
  else {
    return "COMMON YEAR";
  }
}
