
export function buttonDisabled() {
  let data = this.form.getData();

  if (
    data["positionName"] == null ||
    data["positionSkills"] == null ||
    data["grossSalaryPerMonth"] == null ||
    data["netSalaryPerMonth"] == null ||
    data["premiumsPerYear"] == null ||
    data["email"] == null
  ) {
    return true;
  }


  if (
    data["positionName"].length > 0 &&
    data["positionSkills"] > 0 &&
    data["positionSkills"] <= 100 &&
    data["grossSalaryPerMonth"] >= 15000 &&
    data["grossSalaryPerMonth"] <= 500000 &&
    data["netSalaryPerMonth"] >= 10000 &&
    data["netSalaryPerMonth"] <= 500000 &&
    data["premiumsPerYear"] >= 0 &&
    data["premiumsPerYear"] <= 500000 &&
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(data["email"])
  ) {
    return false;
  }
  return true;
}
