export const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //e.preventDefault(); // Prevent navigation
  console.log('Clicked event:', e);
  console.log('Element ID:', e.currentTarget.id);
};