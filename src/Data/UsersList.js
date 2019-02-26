import Roles from "./Roles";

let userslist = {
  "V.K@vstu.by": {
    eMail: "V.K@vstu.by",
    firstName: "Vad",
    lastName: "Kazakoff",
    delRequest: false,
    role: Roles.ADMIN
  },
  "I.I@vstu.by": {
    eMail: "I.I@vstu.by",
    firstName: "Ivan",
    lastName: "Ivanoff",
    delRequest: false,
    role: Roles.USER
  }
};
export default userslist;
