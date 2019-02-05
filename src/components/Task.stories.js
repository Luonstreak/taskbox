import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Task from "../components/Task";

export const task = {
  id: "1",
  title: "Sample Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onStarTask: action("onStarTask"),
  onArchiveTask: action("onArchiveTask")
};

storiesOf("Task", module)
  .add("default", () => <Task task={task} {...actions} />)
  .add("starred", () => (
    <Task task={{ ...task, state: "TASK_STARRED" }} {...actions} />
  ))
  .add("archived", () => (
    <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
  ));
