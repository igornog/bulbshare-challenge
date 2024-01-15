export const formatDate = (dateString: string) => {
  const inputDate = new Date(dateString);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = inputDate.toLocaleDateString(
    'en-US',
    options as {
      day: 'numeric';
      month: 'long';
      year: 'numeric';
    }
  );

  return formattedDate;
};
