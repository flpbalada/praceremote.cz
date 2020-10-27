export function data() {
  return {
    form: {
      /**
       * return object of input values
       */
      submited: false,
      getData: () => {
        let data = {};

        this.form.inputs.forEach(item => {
          data[item.id] = item.data;
        });

        return data;
      },
      getItemDataById: id => {
        return this.form.getData()[id];
      },

      /**
       * form structure
       * define component type and component props
       * store value in item.data
       */
      inputs: [
        {
          component: "Input",
          id: "positionName",
          name: "positionName",
          type: "text",
          required: true,
          label: "Název pracovní pozice",
          placeholder: "UI designer",
          data: null,
          getErrorMessage: () => {
            let data = this.form.getItemDataById("positionName");
            let success = { state: true, message: "" };
            let normal = { state: null, message: "" };
            return data ? (data.length > 0 ? success : normal) : normal;
          }
        },
        {
          component: "Radio",
          id: "jobCategory",
          name: "jobCategory",
          required: true,
          label: "Kategorie pracovní pozice",
          radioButtons: [
            {
              id: 0,
              title: "Design",
              checked: true
            },
            {
              id: 1,
              title: "IT, vývoj",
              checked: false
            },
            {
              id: 2,
              title: "Zákaznický servis",
              checked: false
            },
            {
              id: 3,
              title: "Sales a Marketing",
              checked: false
            },
            {
              id: 4,
              title: "Business, Management a finance",
              checked: false
            },
            {
              id: 5,
              title: "Ostatní",
              checked: false
            }
          ],
          data: null
        },
        {
          component: "Input",
          id: "positionSkills",
          name: "positionSkills",
          type: "number",
          required: true,
          label: "Praxe na pozici",
          placeholder: "5 let",
          data: null,
          getErrorMessage: () => {
            let data = this.form.getItemDataById("positionSkills");
            let success = { state: true, message: "" };
            let min = { state: false, message: "Zadejte alespoň 0 let." };
            let max = { state: false, message: "Nejvíce lze zadat 100 let." };
            let normal = { state: null, message: "" };

            let state = null;

            if (data && data < 0) {
              state = min;
            } else if (data > 100) {
              state = max;
            } else if (data == null || data.length == 0) {
              state = normal;
            } else {
              state = success;
            }

            return state;
          }
        },
        {
          component: "Input",
          id: "grossSalaryPerMonth",
          name: "grossSalaryPerMonth",
          type: "number",
          required: true,
          label: "Hrubý plat/mzda",
          placeholder: "40 000 Kč",
          data: null,
          getErrorMessage: () => {
            let data = this.form.getItemDataById("grossSalaryPerMonth");
            let success = { state: true, message: "" };
            let min = { state: false, message: "Zadejte alespoň 15 000 Kč." };
            let max = {
              state: false,
              message: "Nejvíce lze zadat 500 000 Kč."
            };
            let normal = { state: null, message: "" };

            let state = null;
            if (data && data < 15000) {
              state = min;
            } else if (data > 500000) {
              state = max;
            } else if (data == null || data.length == 0) {
              state = normal;
            } else {
              state = success;
            }

            return state;
          }
        },
        {
          component: "Input",
          id: "netSalaryPerMonth",
          name: "netSalaryPerMonth",
          type: "number",
          required: true,
          label: "Čistý plat/mzda",
          placeholder: "30 000 Kč",
          data: null,
          getErrorMessage: () => {
            let data = this.form.getItemDataById("netSalaryPerMonth");
            let success = { state: true, message: "" };
            let min = { state: false, message: "Zadejte alespoň 10 000 Kč." };
            let max = {
              state: false,
              message: "Nejvíce lze zadat 500 000 Kč."
            };
            let normal = { state: null, message: "" };

            let state = null;
            if (data && data < 10000) {
              state = min;
            } else if (data > 500000) {
              state = max;
            } else if (data == null || data.length == 0) {
              state = normal;
            } else {
              state = success;
            }

            return state;
          }
        },
        {
          component: "Input",
          id: "premiumsPerYear",
          name: "premiumsPerYear",
          type: "number",
          required: true,
          label: "Roční odměny, odměny ze zisku",
          placeholder: "150 000 Kč",
          data: null,
          getErrorMessage: () => {
            let data = this.form.getItemDataById("premiumsPerYear");
            let success = { state: true, message: "" };
            let min = { state: false, message: "Zadejte alespoň 0 Kč." };
            let max = {
              state: false,
              message: "Nejvíce lze zadat 500 000 Kč."
            };
            let normal = { state: null, message: "" };

            let state = null;

            if (data && data < 0) {
              state = min;
            } else if (data > 500000) {
              state = max;
            } else if (data == null || data.length == 0) {
              state = normal;
            } else {
              state = success;
            }

            return state;
          }
        },
        {
          component: "Radio",
          id: "region",
          name: "region",
          required: true,
          label: "Region",
          radioButtons: [
            {
              id: 0,
              title: "Praha a Střední Čechy",
              checked: true
            },
            {
              id: 1,
              title: "Severní Čechy",
              checked: false
            },
            {
              id: 2,
              title: "Západní Čechy",
              checked: false
            },
            {
              id: 3,
              title: "Jižní Čechy",
              checked: false
            },
            {
              id: 4,
              title: "Východní Čechy",
              checked: false
            },
            {
              id: 5,
              title: "Morava a Slezsko",
              checked: false
            }
          ],
          data: null
        },
        {
          component: "Input",
          id: "email",
          name: "email",
          type: "email",
          required: true,
          label: "E-mail",
          tooltip:
            "Na e-mail zašleme zda je váš plat nebo mzda v dobré kondici.",
          placeholder: "info@email.cz",
          data: null,
          getErrorMessage: () => {
            let data = this.form.getItemDataById("email");
            let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

            let normal = { state: null, message: "" };
            let success = { state: true, message: "" };

            return regex.test(data) ? success : normal;
          }
        }
      ]
    }
  };
}
