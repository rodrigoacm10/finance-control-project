export default class View {
  transformValues(value) {
    const deletedSinalValue = value > 0 ? value : +`${value}`;
    let strValueMod = `${value}`;

    if (value < 0) {
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
    } else if (value > 0 || value < 0) {
      strValue = `${strValue}`.replace(".", ",");
    }

    return strValue;
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
