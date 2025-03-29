export const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  console.log(`Clicked element:, id: ${e.currentTarget.id}, data-name: ${e.currentTarget.dataset.name}`);
};