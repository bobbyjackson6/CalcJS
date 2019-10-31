let markValue = 0;
let napolnitelValue = 0;
let objem = '';
let summary = 0;

function getMark() {
    mark = document.getElementById("mark");
    markValue = mark.options[mark.selectedIndex].value;
    console.log(mark);
    if (markValue == '') {
        alert("Выберите один из вариантов");
    }
    document.querySelector('.itog-mark').innerHTML = "<b>Марка:</b> " + mark.options[mark.selectedIndex].text;
    document.querySelector(".mark").style.cssText = `display:none;`;
    document.querySelector(".napolnitel").style.cssText = `display:block;`;
    return markValue;
}


function getNapolnitel() {
    napolnitel = document.getElementById("napolnitel");
    napolnitelValue = napolnitel.options[napolnitel.selectedIndex].value;
    if (napolnitelValue == '') {
        alert("Выберите один из вариантов");
    }
    document.querySelector(".itog-napolnitel").innerHTML = "<b>Наполнитель:</b> " + napolnitel.options[napolnitel.selectedIndex].text;
    document.querySelector(".napolnitel").style.cssText = `display:none;`;
    document.querySelector(".objem").style.cssText = `display:block;`;
    return napolnitelValue;
}

function getObjem() {
    objem = document.getElementById('objem').value;
    for (let i = 0; i < objem.length; i++) {
        if (!objem[i].match(/^\d+/)) {
            document.getElementById("objem").value = "";
            alert("Введите только цифры (0-9)");
            break;
        }
    }
    document.querySelector(".itog-objem").innerHTML = "<b>Объем:</b> " + objem + " м3";
    summary = (Number(markValue)+Number(napolnitelValue))*Number(objem);
    console.log(napolnitelValue);
    console.log(objem);
    document.querySelector(".itog-sum").innerHTML = summary + "р";
    document.querySelector(".objem").style.cssText = `display:none;`;
    document.querySelector(".itog").style.cssText = `display:block;`;
}

