import { render, screen } from "@testing-library/react";
import DisplayTable from "./DisplayTable";

const testDataToDisplayDesigns = [
  {
    courses: 111,
    id: 20,
    name: "20th Design",
    status: "in-progress",
    updated: "2021-04-12 08:25:41.567611",
    user_id_last_update: 1,
    wales: 333,
  },
  {
    courses: 400,
    id: 19,
    name: "19th Design",
    status: "in-progress",
    updated: "2021-04-11 08:25:41.567611",
    user_id_last_update: 2,
    wales: 100,
  },
];

test("when the table loads designs, it shows the fields 'name' and 'courses' in the table head", () => {
  render(
    <DisplayTable tableToDisplay="designs" data={testDataToDisplayDesigns} />
  );

  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Courses")).toBeInTheDocument();
});
