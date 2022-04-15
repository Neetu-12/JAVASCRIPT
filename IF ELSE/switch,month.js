let month;
day=31
switch (new Date().getMonth()) {
  case 1:
    month= "january";
    day=31
    break;
  case 2:
    month = "february";
    day=28/29
    break;
  case 3:
    month= "March";
    day=31
    break;
  case 4:
    month = "april";
    day=30
    break;
  case 5:
    month = "may";
    day=31
    break;
  case  6:
    month = "june";
    day=30
    break;
  case  7:
    month = "july";
    day=31
    break;
  case  8:
    month = "august";
    day=31
    break;
  case  9:
    month = "september";
    day=30
    break;
  case  10:
    month = "october";
    day=31
    break;
  case 11:
    month = "november";
    day=30
    break;
  case 12:
    month = "december";
    day=31
    break;
}
console.log(month,day);