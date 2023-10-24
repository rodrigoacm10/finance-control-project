export default class View {
  transformValues(value) {
    const valueNum = +value;
    const numFixed = valueNum.toFixed(2);

    const deletedSinalValue = numFixed > 0 ? numFixed : +`${numFixed}`;
    let strValueMod = `${numFixed}`;

    if (numFixed < 0) {
      strValueMod = strValueMod.replace("-", "");
    }

    const splitStrValueMod = strValueMod.split(".");
    let strValue = strValueMod;

    if (splitStrValueMod.length > 1 && splitStrValueMod[1].length == 1) {
      strValue += "0";
    }

    if (!strValueMod.includes(".")) {
      strValue += ",00";
    } else if (numFixed > 0 || numFixed < 0) {
      strValue = `${strValue}`.replace(".", ",");
    }

    return strValue;
  }

  transformValuesInfosAcc(value) {
    const valueNum = +value;
    const numFixed = valueNum.toFixed(2);

    const deletedSinalValue = numFixed > 0 ? numFixed : +`${numFixed}`;
    let strValueMod = `${numFixed}`;

    const splitStrValueMod = strValueMod.split(".");
    let strValue = strValueMod;

    if (splitStrValueMod.length > 1 && splitStrValueMod[1].length == 1) {
      strValue += "0";
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

      return [year, month, day];
    } else if (dataSelect === "schedule") {
      [year, month, day] = dataInput.split("-");

      return [year, month, day];
    }
  }

  confirmingSituation(data) {
    const today = new Date().toISOString().split("T")[0];
    const [yearToday, monthToday, dayToday] = today.split("-");
    const [yearMov, monthMov, dayMov] = data.split("-");

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
