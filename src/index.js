import _ from 'lodash';
import './style.css';
import jsPng from './js_icon.png';
import Data from './data.xml';

function component() {
    const myIcon  = new Image();
    const element = document.createElement('div');
    
    myIcon.src = jsPng;

    element.innerHTML = _.join(['Hello', 'Webpack'], '');
    element.classList.add('hello');
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());