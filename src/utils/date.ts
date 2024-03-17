export const getUpdatedDaysAgo = (dateString: string | null | undefined = "") => {
  if (!dateString) return "";
  const currentDate = new Date();
  const updatedDate = new Date(dateString);

  const diffTime = Math.abs(currentDate.getTime() - updatedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `updated ${diffDays} days ago`;
}