const fullName = (fname, lname) => {
  return `${fname} ${lname}`;
};
const actualFullName = fullName("amol", "sontakke");
const expectedFullName = "amolsontakke";
if (actualFullName !== expectedFullName) {
  throw new Error(` ${actualFullName} is not equal to ${expectedFullName}`);
}
