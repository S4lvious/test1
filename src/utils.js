import moment from 'moment';

export const convertDate = date => {
  return moment(date).format('DD/MM/YYYY, HH:mm:ss');
};

export const sum = (a, b) => {
  return a + b;
};

export const roundTo = (value, decimalpositions) => {
  let i = value * Math.pow(10, decimalpositions);
  i = Math.round(i);
  return i / Math.pow(10, decimalpositions);
};

export const mapColor = score => {
  if (score >= 0 && score <= 11) {
    return '#00CD65';
  } else if (score > 11 && score <= 25) {
    return '#CCFF66';
  } else if (score > 25 && score <= 40) {
    return '#FFFF99';
  } else if (score > 40 && score <= 60) {
    return '#FFCC01';
  } else if (score > 60) {
    return '#FF0000';
  }
};

export const numberWithThousandSeparator = num => {
  let parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join(',');
};

/*
export const resizeChart = chart => {
  document.onfullscreenchange = function(event) {
    setTimeout(() => {
      chart.reflow();
    }, 1000);
  };
  window.onresize = () => {
    //chart.reflow();
  };
};
*/
