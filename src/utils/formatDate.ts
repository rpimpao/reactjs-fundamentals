const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString('pt-BR');
};

export default formatDate;
