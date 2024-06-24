const div = document.getElementById("venta")

let ventaTemplate = ""
for (const element of propiedades_venta) {
    ventaTemplate += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${element.src}
                class="card-img-top"
                alt="imagen propiedad"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${element.h5}
                </h5>
                <p class="card-text">
                  ${element.p}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${element.i1}
                </p>
                <p>
                  <i class="fas fa-bed"></i>  ${element.i2}|
                  <i class="fas fa-bath"></i>  ${element.i3}
                </p>
                <p><i class="fas fa-dollar-sign"></i>  ${element.i4}</p>
                  <p  class="${element.i5 == "No se permite fumar" ? "text-danger" : "text-success"}">
                  <i class="${element.i5 == "No se permite fumar" ? "fa-solid fa-ban-smoking" : "fa-solid fa-smoking" }"></i> ${element.i5}</p>
                <p class="${element.i6 == "No se permiten mascotas" ? "text-danger" : "text-success"}">
                  <i class="${element.i6 == "No se permiten mascotas" ? "fas fa-ban" : "fas fa-paw"}"></i> ${element.i6}
                </p>
              </div>
            </div>
        </div>
    `
  }
 if(div){ div.innerHTML = ventaTemplate}




  
const vender = document.getElementById("seVende");

let seVendeTemplate = "";
// Itera solo sobre los primeros 3 elementos del arreglo
for (let i = 0; i < 3; i++) {
    const element = propiedades_venta[i];
    seVendeTemplate += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${element.src}"
                class="card-img-top"
                alt="imagen propiedad"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${element.h5}
                </h5>
                <p class="card-text">
                  ${element.p}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${element.i1}
                </p>
                <p>
                  <i class="fas fa-bed"></i>  ${element.i2}|
                  <i class="fas fa-bath"></i>  ${element.i3}
                </p>
                <p><i class="fas fa-dollar-sign"></i>  ${element.i4}</p>
                  <p  class="${element.i5 == "No se permite fumar" ? "text-danger" : "text-success"}">
                  <i class="${element.i5 == "No se permite fumar" ? "fa-solid fa-ban-smoking" : "fa-solid fa-smoking" }"></i> ${element.i5}</p>
                <p class="${element.i6 == "No se permiten mascotas" ? "text-danger" : "text-success"}">
                  <i class="${element.i6 == "No se permiten mascotas" ? "fas fa-ban" : "fas fa-paw"}"></i> ${element.i6}
                </p>
              </div>
            </div>
        </div>
    `;
}

if (vender) {vender.innerHTML = seVendeTemplate;}