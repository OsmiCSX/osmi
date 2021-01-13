export const strReplace = (source, replace, replaceWith) => {
  var value = source
  var i = 0
  for (i; i < value.length; i++) {
    value = value.replace(replace, replaceWith)
  }
  // console.log(value)
  return value;
}

export const upperCaseString = (i) => {
  if (typeof i === 'string') {
    return i.toUpperCase()
  }
  return i
}

export const formattingNumber = (i) => {
  if (typeof i === 'number') {
    return i.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
  }
  return i
}

export const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
}

export const getListYear = () => {
  var currentYear = new Date().getFullYear(), years = [];
  var startYear = 2000;
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
}

export const getDate = (value, newFormat = null) => {
  if (newFormat == null) {
    newFormat = 'DD MMMM YYYY'
  }
  let date = moment(value, formatDateDefault).format(newFormat)
  return date
}

export const getCurrentDate = () => {
  let date = moment(new Date, 'DD-MM-YYYY').format();
  return date
}

export const getDateTime = (value) => {
  let date = moment(value, formatDateDefault).format('DD MMMM YYYY HH:mm:ss')
  return date
}

export const getDateTime2 = (value) => {
  let date = moment(value, formatDateDefault).format('DD MMMM YYYY HH:mm')
  return date
}

export const getFullDay = (value) => {
  let date = moment(value, formatDateDefault).format('dddd, DD MMMM YYYY')
  return date
}

export const getTime = (value) => {
  let date = moment(value, formatDateDefault).format('HH:mm:ss')
  return date
}

export const getHour = (value) => {
  let date = moment(value, formatDateDefault).format('HH:mm')
  return date
}

export const formatKM = (num) => parseFloat(Number(num) / 1000).toFixed()

export const formatMoney = (num) => {
  num = num + ""

  if (num == "" || num == "0")
    return 0;

  num = num.replace(/\./g, "");
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return num_parts.join(".");
}

export const moneytoInt = (num) => {
  if (num) {
    return num.replace(/\./g, "");
  } else {
    return 0;
  }
}
