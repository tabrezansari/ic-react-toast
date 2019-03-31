import React, { Component } from 'react';
import '../index.css';
import { render } from 'react-dom';
let containerDomNode = null;
class ToastContainer extends Component {


  showToast(type, toastMsg) {
    var x = document.getElementById("toaster");
    var msgbox = document.getElementById("toastmsg");
    var wibar = document.getElementById("myProgress");
    var elem = document.getElementById("myBar");
    var iplace = document.getElementById("iconplace");
    if (type == 1) {
      msgbox.innerHTML = toastMsg;
      x.className = "successtoast";
      elem.className = "successbar";
      wibar.className = "successpg";
      iplace.innerHTML = '<i class="far fa-check-circle fa-2x"></i>';

    }
    else if (type == 2) {
      msgbox.innerHTML = toastMsg;
      x.className = "warningtoast";
      elem.className = "warningbar";
      wibar.className = "warningpg";
      iplace.innerHTML = '<i class="fas fa-exclamation-triangle fa-2x"></i>';



    }
    else if (type == 3) {
      wibar.className = "errorpg";
      msgbox.innerHTML = toastMsg;
      x.className = "errortoast";
      elem.className = "errorbar";
      iplace.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';

    }
    else {
      wibar.className = "infopg";
      msgbox.innerHTML = toastMsg;
      x.className = "infotoast";
      elem.className = "infobar";
      iplace.innerHTML = '<i class="fas fa-info-circle fa-2x"></i>';

    }

    var width = 100;
    var id = setInterval(frame, 30);
    function frame() {
      if (width < 1) {
        clearInterval(id);
        if (type == 1) {
          x.className = x.className.replace("successtoast", "");
        }
        else if (type == 2) {
          x.className = x.className.replace("warningtoast", "");

        }
        else if (type == 3) {
          x.className = x.className.replace("errortoast", "");

        }
        else {
          x.className = x.className.replace("infotoast", "");

        }
      } else {
        width--;
        elem.style.width = width + '%';

      }
    }
  }
  success(content) {
    containerDomNode = document.createElement('div');
    this.showToast(1, content);
    render(<ToastContainer message={content} />, containerDomNode)

  }

  warning(content) {
    containerDomNode = document.createElement('div');
    this.showToast(2, content);
    render(<ToastContainer message={content} />, containerDomNode)

  }

  error(content) {
    containerDomNode = document.createElement('div');
    this.showToast(3, content);
    render(<ToastContainer message={content} />, containerDomNode)

  }

  info(content) {
    containerDomNode = document.createElement('div');
    this.showToast(4, content);
    render(<ToastContainer message={content} />, containerDomNode)

  }

  render() {


    return (
      <div id="toaster" >
        <span className="toast-icon" id="iconplace">


        </span>
        <p id="toastmsg" className="msg"></p>
        <div id="myProgress">
          <div id="myBar"></div>
        </div>
      </div>
    )
  }

}

const Toaster = new ToastContainer();
export { ToastContainer, Toaster };