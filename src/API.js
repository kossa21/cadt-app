export const fetcherListData = async (route) => {
  const path = `http://localhost:5000/${route}`;
  const data = await (await fetch(path)).json();
  return data;
};
