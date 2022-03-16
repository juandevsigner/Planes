//-----------SELECTORES-----------

//SWICTH
const suiche = document.querySelector('.swicth__link');

//TITULOS
const emprendedor = document.querySelector('#empT');
const pyme = document.querySelector('#pymeT');
const pro = document.querySelector('#proT');

const texto = document.querySelector('#texto');


//PLANES
const emprendedorPlan = document.querySelector('#emprendedor');
const pymePlan = document.querySelector('#pyme');
const proPlan = document.querySelector('#pro');

const facturacionElectronica = document.querySelector('#facturaElectronica');

//PRECIOS
const precioMes = document.querySelector('#pe');
const precioAnual = document.querySelector('#pes');
const precioMesPy = document.querySelector('#py');
const precioAnualPy = document.querySelector('#pys');
const precioMesPr = document.querySelector('#pr');
const precioAnualPr = document.querySelector('#prs');

//BOTONE RESET
const btnReset = document.querySelector('#btnReset');

//BOTONES NOMINA
const btne1 = document.querySelector('#ne1');
const btne11 = document.querySelector('#ne11');
const btne51 = document.querySelector('#ne51');
const btne101 = document.querySelector('#ne101');

//BOTONES FACTURACION
const fa1 = document.querySelector('#fa1');
const fa2 = document.querySelector('#fa2');

//VALOR TOTAL
const valorTotalPrint = document.querySelector('#valorTotal');
let valorNomina = 0;
let valorFactura = 0;
let valorTotaEmp = 27000;
let valorTotaPyme = 45000;
let valorTotaPro = 67500;
let valorTotaEmpMes = 30000;
let valorTotaPymeMes = 50000;
let valorTotaProMes = 75000;
let valorTotal = 0;


 
//------------EVENTOS--------------
eventos();
function eventos(){
    suiche.addEventListener('click', activarSuiche);

    btne1.addEventListener('click', nomina1);
    btne11.addEventListener('click', nomina2);
    btne51.addEventListener('click', nomina3);
    btne101.addEventListener('click', nomina4);

    fa1.addEventListener('click', factura1);
    fa2.addEventListener('click', factura2);
    
    emprendedor.addEventListener('click', activarPlan1);
    pyme.addEventListener('click', activarPlan2);
    pro.addEventListener('click', activarPlan3);

    btnReset.addEventListener('click', resetearPlanes)
}


//--------------FUNCIONES-----------------
//FUNCION SWICTH
function activarSuiche(e) {
    e.preventDefault(),
    suiche.classList.toggle('swicthActivo');
    
    precioMes.classList.toggle('ocultarPlan');
    precioAnual.classList.toggle('ocultarPlan');

    precioMesPy.classList.toggle('ocultarPlan');
    precioAnualPy.classList.toggle('ocultarPlan');

    precioMesPr.classList.toggle('ocultarPlan');
    precioAnualPr.classList.toggle('ocultarPlan');

    btne11.classList.remove('activoBtn');
    btne1.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');
    fa1.classList.remove('activoBtn');
    fa2.classList.remove('activoBtn'); 

    btne11.textContent = 'AGREGAR AL PLAN';
    btne1.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';
    fa1.textContent = 'AGREGAR AL PLAN';
    fa2.textContent = 'AGREGAR AL PLAN';

    /* activarMes(); */

    valorNomina = 0;
    valorFactura = 0;
    valorTotal = 0;
    valorTotalPrint.textContent = valorTotal;

}

//FUNCIONES PLANES TARJETAS



function mostrarPlan1(){
    facturacionElectronica.classList.add('ocultarPlan');
    emprendedorPlan.classList.remove('ocultarPlan');
    pymePlan.classList.add('ocultarPlan');
    proPlan.classList.add('ocultarPlan');


    btne11.classList.remove('activoBtn');
    btne1.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');
    fa1.classList.remove('activoBtn');
    fa2.classList.remove('activoBtn');

    btne11.textContent = 'AGREGAR AL PLAN';
    btne1.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';
    fa1.textContent = 'AGREGAR AL PLAN';
    fa2.textContent = 'AGREGAR AL PLAN';

    texto.textContent = '(Sin Nómina Electrónica)';
    

    valorNomina = 0;
    valorFactura = 0;
    valorTotal = 0;
    valorTotalPrint.textContent = valorTotal;

}
function mostrarPlan2(){
    facturacionElectronica.classList.remove('ocultarPlan');
    emprendedorPlan.classList.add('ocultarPlan');
    pymePlan.classList.remove('ocultarPlan');
    proPlan.classList.add('ocultarPlan');

    btne11.classList.remove('activoBtn');
    btne1.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');
    fa1.classList.remove('activoBtn');
    fa2.classList.remove('activoBtn');

    btne11.textContent = 'AGREGAR AL PLAN';
    btne1.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';
    fa1.textContent = 'AGREGAR AL PLAN';
    fa2.textContent = 'AGREGAR AL PLAN';

    texto.textContent = '(Sin Nómina ni Factura Electrónica)';

    valorNomina = 0;
    valorFactura = 0;
    valorTotal = 0;
    valorTotalPrint.textContent = valorTotal;
    
}

function mostrarPlan3(){
    facturacionElectronica.classList.remove('ocultarPlan');
    emprendedorPlan.classList.add('ocultarPlan');
    pymePlan.classList.add('ocultarPlan');
    proPlan.classList.remove('ocultarPlan');

    btne11.classList.remove('activoBtn');
    btne1.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');
    fa1.classList.remove('activoBtn');
    fa2.classList.remove('activoBtn');

    btne11.textContent = 'AGREGAR AL PLAN';
    btne1.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';
    fa1.textContent = 'AGREGAR AL PLAN';
    fa2.textContent = 'AGREGAR AL PLAN';

    texto.textContent = '(Sin Nómina ni Factura Electrónica)';

    valorNomina = 0;
    valorFactura = 0;
    valorTotal = 0;
    valorTotalPrint.textContent = valorTotal;
    
}


//FUNCIONES PLANES TITULO
function activarPlan1() {
    /* e.preventDefault(); */
    emprendedor.classList.add('activoBg-titulo');
    pyme.classList.remove('activoBg-titulo');
    pro.classList.remove('activoBg-titulo');
    
    mostrarPlan1();
}
function activarPlan2() {
    /* e.preventDefault(); */
    emprendedor.classList.remove('activoBg-titulo');
    pyme.classList.add('activoBg-titulo');
    pro.classList.remove('activoBg-titulo');

    mostrarPlan2();
}
function activarPlan3() {
    /* e.preventDefault(); */
    emprendedor.classList.remove('activoBg-titulo');
    pyme.classList.remove('activoBg-titulo');
    pro.classList.add('activoBg-titulo');

    mostrarPlan3();
}



//FUNCIONES NOMINA

function nomina1() {
    /* e.preventDefault(); */
    btne1.classList.add('activoBtn');
    btne1.textContent = 'AGREGADO';
    btne11.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');
    
    btne11.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';

    if(emprendedor.classList.contains('activoBg-titulo')) {
        valorNomina = 5000;
        valorTotal = (valorNomina + valorFactura) + valorTotaEmp;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 5000;
            valorTotal = (valorNomina + valorFactura) + valorTotaEmpMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

     if(pyme.classList.contains('activoBg-titulo')) {
        valorNomina = 5000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPyme;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 5000;
            valorTotal = (valorNomina + valorFactura) + valorTotaPymeMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

    if(pro.classList.contains('activoBg-titulo')) {
        valorNomina = 5000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPro;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 5000;
            valorTotal = (valorNomina + valorFactura) + valorTotaProMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

    
    
}

function nomina2() {
    /* e.preventDefault(); */
    btne11.classList.add('activoBtn');
    btne11.textContent = 'AGREGADO';
    btne1.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');

    btne1.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';

    if(emprendedor.classList.contains('activoBg-titulo')) {
        valorNomina = 10000;
        valorTotal = (valorNomina + valorFactura) + valorTotaEmp;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 10000;
            valorTotal = (valorNomina + valorFactura) + valorTotaEmpMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

     if(pyme.classList.contains('activoBg-titulo')) {
        valorNomina = 10000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPyme;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 10000;
            valorTotal = (valorNomina + valorFactura) + valorTotaPymeMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

    if(pro.classList.contains('activoBg-titulo')) {
        valorNomina = 10000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPro;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 10000;
            valorTotal = (valorNomina + valorFactura) + valorTotaProMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 
}

function nomina3() {
    /* e.preventDefault(); */
    btne51.classList.add('activoBtn');
    btne51.textContent = 'AGREGADO';
    btne1.classList.remove('activoBtn');
    btne11.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');

    btne1.textContent = 'AGREGAR AL PLAN';
    btne11.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';

    if(emprendedor.classList.contains('activoBg-titulo')) {
        valorNomina = 15000;
        valorTotal = (valorNomina + valorFactura) + valorTotaEmp;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 15000;
            valorTotal = (valorNomina + valorFactura) + valorTotaEmpMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

     if(pyme.classList.contains('activoBg-titulo')) {
        valorNomina = 15000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPyme;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 15000;
            valorTotal = (valorNomina + valorFactura) + valorTotaPymeMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

    if(pro.classList.contains('activoBg-titulo')) {
        valorNomina = 15000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPro;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 15000;
            valorTotal = (valorNomina + valorFactura) + valorTotaProMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 
    
}

function nomina4() {
    /* e.preventDefault(); */
    btne101.classList.add('activoBtn');
    btne101.textContent = 'AGREGADO';
    btne1.classList.remove('activoBtn');
    btne11.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');

    btne1.textContent = 'AGREGAR AL PLAN';
    btne11.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';

    if(emprendedor.classList.contains('activoBg-titulo')) {
        valorNomina = 20000;
        valorTotal = (valorNomina + valorFactura) + valorTotaEmp;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 20000;
            valorTotal = (valorNomina + valorFactura) + valorTotaEmpMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

     if(pyme.classList.contains('activoBg-titulo')) {
        valorNomina = 20000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPyme;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 20000;
            valorTotal = (valorNomina + valorFactura) + valorTotaPymeMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

    if(pro.classList.contains('activoBg-titulo')) {
        valorNomina = 20000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPro;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorNomina = 20000;
            valorTotal = (valorNomina + valorFactura) + valorTotaProMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

    
}

//FUNCIONES FACTURA

function factura1() {
    /* e.preventDefault(); */
    fa1.classList.add('activoBtn');
    fa1.textContent = 'AGREGADO';
    fa2.classList.remove('activoBtn');
    fa2.textContent = 'AGREGAR AL PLAN';

    if(pyme.classList.contains('activoBg-titulo')) {
        valorFactura = 4500;
        valorTotal = (valorNomina + valorFactura) + valorTotaPyme;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorFactura = 5000;
            valorTotal = (valorNomina + valorFactura) + valorTotaPymeMes;
            valorTotalPrint.textContent = valorTotal; 
        }return;
    } 

    if(pro.classList.contains('activoBg-titulo')) {
        valorFactura = 9000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPro;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorFactura = 10000;
            valorTotal = (valorNomina + valorFactura) + valorTotaProMes;
            valorTotalPrint.textContent = valorTotal; 
        }return;
    } 
    

}

function factura2() {
    /* e.preventDefault(); */
    fa2.classList.add('activoBtn');
    fa2.textContent = 'AGREGADO';
    fa1.classList.remove('activoBtn');
    fa1.textContent = 'AGREGAR AL PLAN';

    if(pyme.classList.contains('activoBg-titulo')) {
        valorFactura = 22500;
        valorTotal = (valorNomina + valorFactura) + valorTotaPyme;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorFactura = 25000;
            valorTotal = (valorNomina + valorFactura) + valorTotaPymeMes;
            valorTotalPrint.textContent = valorTotal; 
        }
        return;
    } 

    if(pro.classList.contains('activoBg-titulo')) {
        valorFactura = 27000;
        valorTotal = (valorNomina + valorFactura) + valorTotaPro;
        valorTotalPrint.textContent = valorTotal;
        if(suiche.classList.contains('swicthActivo')) {
            valorFactura = 30000;
            valorTotal = (valorNomina + valorFactura) + valorTotaProMes;
            valorTotalPrint.textContent = valorTotal; 
            
        }
        return;
    } 

}
//RESETEAR PLANES

function resetearPlanes() {
    /* e.preventDefault(); */

    btne11.classList.remove('activoBtn');
    btne1.classList.remove('activoBtn');
    btne51.classList.remove('activoBtn');
    btne101.classList.remove('activoBtn');
    fa1.classList.remove('activoBtn');
    fa2.classList.remove('activoBtn');

    btne11.textContent = 'AGREGAR AL PLAN';
    btne1.textContent = 'AGREGAR AL PLAN';
    btne51.textContent = 'AGREGAR AL PLAN';
    btne101.textContent = 'AGREGAR AL PLAN';
    fa1.textContent = 'AGREGAR AL PLAN';
    fa2.textContent = 'AGREGAR AL PLAN';

    valorNomina = 0;
    valorFactura = 0;
    valorTotal = 0;
    valorTotalPrint.textContent = valorTotal;

}



function activarMes(){

    if(suiche.classList.contains('swicthActivo')) {
        let porcentaje = valorTotal * 0.10;
        valorTotal= valorTotal + porcentaje;
        valorTotalPrint.textContent = Math.round(valorTotal);
        return; 
    };

    let porcentaje = valorTotal * 0.10;
    valorTotal = valorTotal - porcentaje;
    valorTotalPrint.textContent = Math.round(valorTotal);
    return;
} 



