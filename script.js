function paruostiDienosSelektoriu(elem) {
  var d1 = new Date();
  var y1 = d1.getFullYear();
  var m1 = d1.getMonth() + 1;
  if (m1 < 10) m1 = "0" + m1;
  var dt1 = d1.getDate();
  if (dt1 < 10) dt1 = "0" + dt1;
  var d2 = y1 + "-" + m1 + "-" + dt1;
  elem.value = d2;
}

async function gautiJSON(url) {
  //veikia asinchroniskai
  let a = fetch(url) //grazina atsako pazada
    .then(function (response) {
      if (response.ok) {
        return response.json(); //grazina metodo konversijos is json pazada
      } else {
        console.warn(response);
        throw new Error(response.status);
      }
    })
    .then(function (jsonData) {
      //console.log(jsonData);
      return jsonData; //grazina metoda
    })
    .catch((e) => {
      //console.warn(error);
      //throw new Error(400);
      //or throw 400;
      return Promise.reject(new Error(e));
    });
  return a; //grazina rezultato pazada (galima gauti su await)
}

function ikeltiRIV(riv) {
  switch (riv.versija) {
    case "1.0":
    default:
      let d = document.getElementsByClassName("data");
      d[0].innerHTML = riv.data;
      d[1].innerHTML = riv.data;

      let c = document.getElementsByClassName("citata");
      c[0].innerHTML = riv.rytas.citata;
      c[1].innerHTML = riv.vakaras.citata;

      let t = document.getElementsByClassName("turinys");
      t[0].innerHTML = riv.rytas.turinys;
      t[1].innerHTML = riv.vakaras.turinys;
  }
}

async function ikelti() {
  document.getElementById("knyga").style.display = "none";
  document.getElementById("knyga-alt").style.display = "none";
  const turinioUrl =
    "https://bitukas.github.io/Rytas-Ir-Vakaras/json";
  //https://bitukas.github.io/Rytas-Ir-Vakaras/json/
  const turinioUrlAlt = "https://bitukas.github.io/Rytas-Ir-Vakaras";

  let men = document.getElementById("dienSel").value.substring(5, 7);

  let dien = document.getElementById("dienSel").value.substring(8, 10);

  try {
    url = turinioUrl + "/" + men + "-" + dien + ".json";
    console.log(url);
    riv = await gautiJSON(url);
    console.log(riv);
    ikeltiRIV(riv);
    document.getElementById("knyga").style.display = "";
  } catch (e) {
    console.warn("Nerasta json failo, ikeliamas alternatyvus", e);
    url = `${turinioUrlAlt}/${parseInt(men)}/img-${parseInt(dien)}.htm`;
    console.log(url);
    document.getElementById("knyga-alt").src = url;
    document.getElementById("knyga-alt").style.display = "";
  }
}

paruostiDienosSelektoriu(document.getElementById("dienSel"));
ikelti();
