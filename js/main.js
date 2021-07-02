(function ($) {
   var form = $("#signup-form");
   form.validate({
      errorPlacement: function errorPlacement(error, element) {
         element.before(error);
      },
      rules: {
         email: {
            email: true,
         },
      },
      onfocusout: function (element) {
         $(element).valid();
      },
   });
   form.children("div").steps({
      headerTag: "h3",
      bodyTag: "fieldset",
      transitionEffect: "fade",
      stepsOrientation: "vertical",
      titleTemplate:
         '<div class="title"><span class="step-number">#index#</span><span class="step-text">#title#</span></div>',
      labels: {
         previous: "Previous",
         next: "Kế tiếp",
         finish: "Finish",
         current: "",
      },
      onStepChanging: function (event, currentIndex, newIndex) {
         if (currentIndex === 0) {
            form
               .parent()
               .parent()
               .parent()
               .append('<div class="footer footer-' + currentIndex + '"></div>');
         }
         if (currentIndex === 1) {
            form
               .parent()
               .parent()
               .parent()
               .find(".footer")
               .removeClass("footer-0")
               .addClass("footer-" + currentIndex + "");
         }
         if (currentIndex === 2) {
            form
               .parent()
               .parent()
               .parent()
               .find(".footer")
               .removeClass("footer-1")
               .addClass("footer-" + currentIndex + "");
            // console.log("dang o 2")
            // console.log("dang o 2 ne")
            document.querySelector("#information").remove();
         }
         if (currentIndex === 3) {
            form
               .parent()
               .parent()
               .parent()
               .find(".footer")
               .removeClass("footer-2")
               .addClass("footer-" + currentIndex + "");
         }
         // if(currentIndex === 4) {
         //     form.parent().parent().parent().append('<div class="footer" style="height:752px;"></div>');
         // }
         form.validate().settings.ignore = ":disabled,:hidden";
         return form.valid();
      },
      onFinishing: function (event, currentIndex) {
         form.validate().settings.ignore = ":disabled";
         return form.valid();
      },
      onFinished: function (event, currentIndex) {
         alert("Submited");
         //Làm bài tập

         let arrInput = document.querySelectorAll("input,select");

         let thongTin = {};
         for (let i = 0; i < arrInput.length; i++) {
            let inputTag = arrInput[i]; //Input : [id] - [value]
            let id = inputTag.name;
            let value = inputTag.value;
            thongTin = { ...thongTin, [id]: value };
         }

         let content = ``;
         let divWrapper = document.createElement("div");
         for (let key in thongTin) {
            content += `
             <p>${key} : ${thongTin[key]}</p>
             `;
         }
         divWrapper.style.fontSize="20px";
         divWrapper.innerHTML = content;
         divWrapper.id = "information";
         document.querySelector(".content").appendChild(divWrapper);
         // var arrThongTin = document.querySelectorAll("label,input,select");
         // console.log(arrThongTin);
      
         // let thongTin = {};
         // let attributeOfObject;
         // for (let i = 0; i < arrThongTin.length; i++) {
         //    let tag = arrThongTin[i];
         //    let valueInput = "";
         //    if (tag.tagName == "LABEL") {
         //       attributeOfObject = tag.innerHTML;
         //    }
         //    while (tag.tagName == "INPUT") {
         //       valueInput += tag.value;
         //       if (arrThongTin[i + 1].tagName == "INPUT") {
         //          i++;
         //          tag = arrThongTin[i];
         //       }
         //       else {
         //          break;
         //       }
         //    }
         //    thongTin = { ...thongTin, [attributeOfObject]: valueInput };
         // }

         // let content = ``;
         // for(let i in thongTin) {
         //    content+=`
         //    <p>${i} : ${thongTin[i]}</p>
         //    `
         // }
         // let div=document.createElement('div');
         // div.innerHTML=content;
         // document.querySelector(".content").appendChild(div);

      },
      onStepChanged: function (event, currentIndex, priorIndex) {
         return true;
      },
   });

   jQuery.extend(jQuery.validator.messages, {
      required: "",
      remote: "",
      email: "",
      url: "",
      date: "",
      dateISO: "",
      number: "",
      digits: "",
      creditcard: "",
      equalTo: "",
   });

   $.dobPicker({
      daySelector: "#birth_date",
      monthSelector: "#birth_month",
      yearSelector: "#birth_year",
      dayDefault: "",
      monthDefault: "",
      yearDefault: "",
      minimumAge: 0,
      maximumAge: 120,
   });
   var marginSlider = document.getElementById("slider-margin");
   if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
         start: [1100],
         step: 100,
         connect: [true, false],
         tooltips: [true],
         range: {
            min: 100,
            max: 2000,
         },
         pips: {
            mode: "values",
            values: [100, 2000],
            density: 4,
         },
         format: wNumb({
            decimals: 0,
            thousand: "",
            prefix: "$ ",
         }),
      });
      var marginMin = document.getElementById("value-lower"),
         marginMax = document.getElementById("value-upper");

      marginSlider.noUiSlider.on("update", function (values, handle) {
         if (handle) {
            marginMax.innerHTML = values[handle];
         } else {
            marginMin.innerHTML = values[handle];
         }
      });
   }
})(jQuery);

//------------------------- Làm bài tập -------------------------
