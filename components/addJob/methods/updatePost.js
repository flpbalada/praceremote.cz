export function updatePost() {
  this.post = {
    jobDetail: {
      title: "",
      description: "",
      commitment: "0",
      category: "0",
      region: "0",
      howToAply: ""
    },
    company: {
      name: "",
      description: "",
      websiteUrl: "",
      contact: {
        name: "",
        tel: "",
        email: ""
      },
      jobs: []
    },
    published: false
  };
}
