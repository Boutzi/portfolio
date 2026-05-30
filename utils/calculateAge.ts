export const calculateAge = (birthDate: string): number => {
  const [day, month, year] = birthDate.split("-").map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
};
