/* eslint-disable linebreak-style */
export function handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    localStorage.setItem('hostmabg-color',"--primary-rgb :"+cssVars[key]);
    document.querySelector("html")?.setAttribute("style","--primary-rgb :"+cssVars[key]);

    // root.style.setProperty(key, cssVars[key]);
  // eslint-disable-next-line linebreak-style
  });
}
// eslint-disable-next-line linebreak-style
export function handleThemeUpdate1(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    localStorage.setItem('hostmabg-color',"--body-bg-rgb :"+cssVars[key]);

    document.querySelector("html")?.setAttribute("style","--body-bg-rgb :"+cssVars[key]);
    localStorage.setItem('hostmabg-color',"--primary-rgb :"+cssVars[key]);
    document.querySelector("html")?.setAttribute("style","--primary-rgb :"+cssVars[key]);
  });

}

// to check the value is hexa or not
const isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: any, alpha: any) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};

export function hexToRgba(hexValue: any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)}`;
}
export function hexToRgb(hexValue: any) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b] = hexArr.map(convertHexUnitTo256);
  return `${r}, ${g}, ${b} `;
}
export function dynamicDarkBodyColor(primaryColor: any, element: any) {

  // element?.setAttribute("style",'--primary-rgb:'+hexToRgba(element))

  const cssPropName = "--primary-rgb";
  handleThemeUpdate({
        [cssPropName]: hexToRgb(primaryColor),
      });

}
export function dynamicDarkColor(primaryColor1: any,primaryColor: any,) {
  // color.forEach((item: any) => {
    const cssPropName =  "--primary-rgb";
    const cssPropName2 = "--body-bg-rgb";
    handleThemeUpdate1({
      [cssPropName]: hexToRgb(primaryColor),
      [cssPropName2]: hexToRgb(primaryColor1),
    });
  // });
}
export function checkOptions() {

  if( document.getElementById("switcher-dark-theme")){
    document.getElementById("switcher-dark-theme");
    const dark = document.getElementById("switcher-dark-theme") as HTMLInputElement;
    dark.checked = true;
  }
if(document.querySelector("html")?.setAttribute('data-theme-mode','light')){
  const light = document.getElementById('switcher-light-theme') as HTMLInputElement;
  light.checked = true; }
if(document.querySelector("html")?.setAttribute('data-theme-mode','dark')){
  const dark = document.getElementById('switcher-dark-theme') as HTMLInputElement;
  dark.checked = true;
}
if(document.querySelector("html")?.setAttribute('dir','ltr')){
  const ltr = document.getElementById('switcher-ltr') as HTMLInputElement;
  ltr.checked = true;
}
if(document.querySelector("html")?.setAttribute('dir','rtl')){
  const rtl = document.getElementById('switcher-rtl') as HTMLInputElement;
  rtl.checked = true;

}

  document.querySelector("html")?.setAttribute("data-theme-mode",'light');
  localStorage.setItem("hostma-theme-mode", 'light');
  const btnlight = document.getElementById('switcher-light-theme') as HTMLInputElement;
  btnlight.checked = true;

  // document.querySelector("html")?.setAttribute("data-theme-mode",'light')
  // localStorage.setItem("hostma-theme-mode", 'light');
  // let btndark = document.getElementById('switcher-light-theme') as HTMLInputElement;
  // btndark.checked = true;

document.querySelector("html")?.setAttribute("dir","ltr");
    localStorage.setItem("hostma-dir-mode", "ltr");
    const ltr = document.getElementById('switcher-ltr') as HTMLInputElement;
    ltr.checked = true;

}
const body:HTMLBodyElement | any= document.querySelector('body');
const html: any = document.querySelector('html');
const ltr: any = document.querySelectorAll('switcher-ltr');
const rtl: any = document.querySelectorAll('switcher-rtl');
const styleId = document.querySelector('#style');
