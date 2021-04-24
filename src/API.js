export const fetcherListData = async () => {
  const data = await (await fetch("http://localhost:5000/designs")).json();
  return data;
};
