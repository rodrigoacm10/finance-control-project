export default class View {
  transformValues(value) {
    // console.log(value, typeof value);
    // console.log("----a-s-d-s-w--------", +value.toFixed(2));
    const valueNum = +value;
    const numFixed = valueNum.toFixed(2);
    console.log(valueNum);
    console.log("----a-s-d-s-w--------", numFixed);
    const deletedSinalValue = numFixed > 0 ? numFixed : +`${numFixed}`;
    let strValueMod = `${numFixed}`;

    if (numFixed < 0) {
      strValueMod = strValueMod.replace("-", "");
    }

    const splitStrValueMod = strValueMod.split(".");
    let strValue = strValueMod;

    console.log("--------", [...strValueMod]);

    if (splitStrValueMod.length > 1 && splitStrValueMod[1].length == 1) {
      strValue += "0";
      // console.log(splitStrValueMod);
    }

    if (!strValueMod.includes(".")) {
      strValue += ",00";
    } else if (numFixed > 0 || numFixed < 0) {
      strValue = `${strValue}`.replace(".", ",");
    }

    return strValue;
  }

  getDataFormat(dataSelect, dataInput) {
    let day = " ";
    let month = " ";
    let year = " ";

    if (dataSelect === "today") {
      [year, month, day] = new Date().toISOString().split("T")[0].split("-");
      console.log([year, month, day]);
      return [year, month, day];
    } else if (dataSelect === "schedule") {
      [year, month, day] = dataInput.split("-");
      console.log([year, month, day]);
      return [year, month, day];
    }
  }

  confirmingSituation(data) {
    const today = new Date().toISOString().split("T")[0];
    const [yearToday, monthToday, dayToday] = today.split("-");
    const [yearMov, monthMov, dayMov] = data.split("-");
    // console.log(today);
    // console.log(dayToday, monthToday, yearToday);
    // console.log(dayMov, monthMov, yearMov);

    if (today > data || today == data) return true;
  }

  testSituation(booleanValue, situation) {
    let confimedSituation = situation;

    if (booleanValue) {
      if (confimedSituation == "a receber") {
        confimedSituation = "recebido";

        return confimedSituation;
      } else if (confimedSituation == "a pagar") {
        confimedSituation = "pago";

        return confimedSituation;
      }
    }
    return confimedSituation;
  }

  getSituationClass(data) {
    let situation = "";
    if (data === "recebido") {
      situation = "received";
    } else if (data === "a receber") {
      situation = "to-recive";
    } else if (data === "pago") {
      situation = "payed";
    } else if (data === "a pagar") {
      situation = "to-pay";
    }
    return situation;
  }
}
