export const generateInitials = (name?: string, code?: string): string => {
  if (code) {
    return code.substring(0, 2).toUpperCase();
  }

  if (name) {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  return "ZZ";
};
