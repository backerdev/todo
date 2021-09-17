import React, { useState, useEffect } from "react";
import List from "./List";
import Api from "../api/api.js";

const InputTodo = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addOn, setAddOn] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setAddOn(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await Api.postData(addOn);
    setAddOn("");
    setLoading(true);
  };
  const getList = async () => {
    const todo = await Api.getData();
    setItems(todo);
    setLoading(false);
    console.log(todo);
  };
  useEffect(() => {
    return getList();
  }, [loading]);

  return (
    <>
      <List items={items} />
      <div className="InputTodo">
        <form>
          <input
            type="text"
            placeholder="enter here"
            value={addOn}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>ADD</button>
        </form>
      </div>
    </>
  );
};

export default InputTodo;
