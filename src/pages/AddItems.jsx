import Header from "../components/header/Header";
import InputWithLabel from "../components/InputComponent/InputComponent";
import SelectComponent from "../components/selectcomponent/SelectComponent";
import TextAreaComponent from "../components/textareacomponent/TextAreaComponent";
import image from "../assets/addItemsImage.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { selectOptions } from "./constants";
import { useAddResources } from "./api.contants";

function AddItems(props) {
  const navigate = useNavigate();

  const { mutate: addResource, isSuccess } = useAddResources();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    addResource(data);
    if (isSuccess) e.target.reset();
  };

  return (
    <>
      <Header isbutton={false} />
      <div className="add__items__main">
        <div
          className="add__items__back_button"
          onClick={() => navigate("/nxtwaveassignment/home")}
        >
          {" "}
          <span style={{ color: "#171F46" }}>&#x276E;</span> User
        </div>
        <div className="add__items__main__half">
          <h1 className="add__items__heading">Item Details</h1>
          <form onSubmit={handleSubmit} className="add__items__form">
            <InputWithLabel
              labelText="item title"
              type="text"
              name="title"
              value={""}
              required={true}
              placeholder={"Item title.."}
              onChange={(e) => console.log()}
            />
            <InputWithLabel
              labelText="link"
              type="url"
              name="link"
              value={""}
              placeholder={"Link.."}
              required={true}
              onChange={(e) => console.log()}
            />
            <InputWithLabel
              labelText="icon url"
              name="icon_url"
              type="url"
              value={""}
              placeholder={"icon url.."}
              required={true}
              onChange={(e) => console.log()}
            />

            <SelectComponent
              labelText="tag name"
              value={selectOptions[0]}
              name="tag"
              onChange={(e) => console.log()}
              options={selectOptions}
            />
            <InputWithLabel
              labelText="category"
              type="text"
              name="category"
              value={""}
              placeholder={"Category.."}
              required={true}
              onChange={(e) => console.log()}
            />
            <TextAreaComponent
              labelText="Description"
              value={"text"}
              name="description"
              required={true}
              onChange={(e) => console.log()}
              placeholder="Enter some text"
              rows={3}
              cols={50}
            />
            <input className="form__submit" type="submit" value="Create" />
          </form>
        </div>
        <div
          className="add__items__main__half"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${image})`,
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddItems;
