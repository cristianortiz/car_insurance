export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

//calculate total amount of quote according to the car brand
export function calculateBrandPaid(brand) {
  let increment;
  switch (brand) {
    case "europe":
      increment = 1.3; //30% increment
      break;
    case "america":
      increment = 1.15;
      break;
    case "asian":
      increment = 1.05;
      break;
    default:
      break;
  }
  return increment;
}

//calculate the insurance plan
export function getPlanType(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

export function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
