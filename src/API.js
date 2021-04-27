const convertNameIntoInitial = (name) => {
  const nameArray = name.split(" ");
  return nameArray[0].charAt(0) + nameArray[1].charAt(0);
};

const convertDateFormat = (list) => {
  list.forEach((listItem) => {
    const baseDate = new Date(listItem.updated);
    console.log(baseDate.toLocaleDateString("en-US"));
    listItem.updated = baseDate.toLocaleDateString("en-US");
  });
};

const getDataWithName = async (data) => {
  const path = `http://localhost:5000/users`;
  const userInformation = await (await fetch(path)).json();

  data.forEach((row) => {
    userInformation.forEach((user) => {
      if (row.user_id_last_update === user.id) {
        row.user_id_last_update = convertNameIntoInitial(user.name);
      }
    });
  });
  return data;
};

export const fetcherListData = async (route) => {
  const path = `http://localhost:5000/${route}`;
  const data = await (await fetch(path)).json();
  convertDateFormat(data);

  if (route === "designs") {
    return getDataWithName(data);
  }
  return data;
};
