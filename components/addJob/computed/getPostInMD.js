let getPostInMD = function() {
  let jobDetail = this.$session.get("lastSubmitedPostData").jobDetail;
  let company = this.$session.get("lastSubmitedPostData").company;
  let output = [];

  output[0] = `## 1. Detail pracovní pozice\n`;
  output[0] += `- Název: **${jobDetail.title}** \n`;
  output[0] += `- Pracovní úvazek: **${jobDetail.commitment}** \n`;
  output[0] += `- Kategorie: **${jobDetail.category}** \n`;
  output[0] += `- Region: **${jobDetail.region}** \n`;
  output[0] += `## 2. Popis Pracovní pozice\n`;
  output[1] = `${jobDetail.description}\n`
  output[2] = `## 3. Detail firmy\n`;
  output[2] += `- Název: **${company.name}** \n`;
  output[2] += `- Webová stránka: **${company.websiteUrl}** \n`;
  output[2] += `## 4. Popis firmy\n`;
  output[3] = `${company.description}\n`;
  output[4] = `## 5. Kontakt\n`;
  output[4] += `- Jméno: **${company.contact.name}** \n`;
  output[4] += `- Telefonní číslo: **${company.contact.tel}** \n`;
  output[4] += `- E-mail: **${company.contact.email}** \n`;

  return output;
}

module.exports = {
  getPostInMD
}